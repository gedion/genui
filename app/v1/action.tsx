import 'server-only';
import React from 'react';
import { createAI, streamUI } from 'ai/rsc';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';
import fs from 'fs/promises';
import path from 'path';

export async function submitUserMessage(input: string, position: { x: number, y: number }) {
  'use server';
  const ui = await streamUI({
    model: openai('gpt-4o', {
      temperature: 1,
    }),
    system: `
      You are the best UX designer and web developer, tasked with generating amazing UI components. 
      Your goal is to create visually stunning, user-friendly, and responsive React components. 
      Use concise, clear, and well-structured code, ensuring every component follows best practices and 
      leverages inline Tailwind CSS for styling. 
      Do not assume the existence of external modules or custom CSS files. 
      Your output should be a default exported React component, 
      starting with the Next.js declarative "use client" syntax. 
    `,
    prompt: input,
    text: async ({ content }) => <div>{content}</div>,
    tools: {
      display: {
        description: 'The React component that will be rendered with Next.js dynamic import',
        parameters: z.object({
          display: z.string().describe('The beautiful React component you generated'),
          componentName: z.string().describe('The name of the component you generated'),
        }),
        generate: async function* ({ display, componentName }) {
          yield `Looking up details for ${componentName}...`;
          const componentDirectory = path.join(process.cwd(), 'components/dynamic');
          const componentPath = path.join(componentDirectory, `${componentName}.tsx`);

          const componentContent = `
${display}
export const position = ${JSON.stringify(position)};
          `;

          await fs.mkdir(componentDirectory, { recursive: true });
          await fs.writeFile(componentPath, componentContent);

          // Update the components mapping file
          const mappingFilePath = path.join(process.cwd(), 'app/v1/componentsMapping.ts');
          const mappingContent = await fs.readFile(mappingFilePath, 'utf-8');
          const updatedMappingContent = mappingContent.replace(
            '};',
            `  "${componentName}": dynamic(() => import("@/components/dynamic/${componentName}")),\n};`
          );
          await fs.writeFile(mappingFilePath, updatedMappingContent);

          const positionMappingFilePath = path.join(process.cwd(), 'app/v1/componentPositionMapping.ts');
          const positionMappingContent = await fs.readFile(positionMappingFilePath, 'utf-8');
          const updatedPositionMappingContent = positionMappingContent.replace(
            '};',
            `  "${componentName}": ${JSON.stringify(position)},\n};`
          );
          await fs.writeFile(positionMappingFilePath, updatedPositionMappingContent);

          return (
            <div>
              <div className="absolute" style={{ top: position?.y ?? 0, left: position?.x ?? 0 }}>
                Loading...
              </div>
            </div>
          );
        },
      },
    },
  });

  return ui.value;
}

export const AI = createAI<any[], React.ReactNode[]>({
  initialUIState: [],
  initialAIState: [],
  actions: {
    submitUserMessage,
  },
});
