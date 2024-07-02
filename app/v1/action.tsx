import 'server-only'

import React, { useEffect } from 'react'
import { createAI, streamUI } from 'ai/rsc';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';
import dynamic from 'next/dynamic'
import { Flights } from '@/components/flights'
import ReactHtmlParser from 'react-html-parser';
import * as Babel from '@babel/standalone';
import fs from 'fs'
import path from 'path'
//import { writeDyanmicComponent } from '@/lib/utils/writeDynamicComponent'
//import path from 'path'

export async function getServerSideProps() {
  //const fs = require("node:fs/promises");
  return {
    props: {
      fs: '',
    },
  };
}

// Helper function to create a React component from a string
const createComponentFromString = (componentString) => {
  const transpiledCode = Babel.transform(componentString, { presets: ['react'] }).code;
  return new Function('React', `return ${transpiledCode}`)(React);
};


// Client-side dynamic import for the component wrapper
const DynamicComponent = (props) => {
  const { componentString } = props;
  const TranspiledComponent = createComponentFromString(componentString);

  // Use dynamic import to defer the rendering until the component is available
  const DynamicWrapper = dynamic(
    () => Promise.resolve(() => <TranspiledComponent />),
    { ssr: false, loading: () => <p>Loading...</p> }
  );

  return <DynamicWrapper />;
};

const jsxString = `
  <div>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
  </div>
`;

// Helper function to inject CSS into the document head
const injectCSS = (css) => {
  const style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
};

const searchFlights = async (
  source: string,
  destination: string,
  date: string,
) => {
  return [
    {
      id: '1',
      flightNumber: 'AA123',
    },
    {
      id: '2',
      flightNumber: 'AA456',
    },
  ];
};

const lookupFlight = async (flightNumber: string) => {
  return {
    flightNumber: flightNumber,
    departureTime: '10:00 AM',
    arrivalTime: '12:00 PM',
  };
};

export async function submitUserMessage(input: string) {
  'use server';
  const ui = await streamUI({
    model: openai('gpt-4o'),
    system: 'You are a plant cell biologist and software engineer. You will be attempting to simulate the life span of a cell using React components. Use dark mode',
    prompt: input,
    text: async ({ content }) => <div>{content}</div>,
    tools: {
      display: {
        description: 'When asked about plant biology, generate the most pleasant react components to display the concept. all components should begin with the nextjs declarative use client with the correct syntax. do not import custom css files or assume modules exists. use inline tailwind css when you want to make it pretty. The exported component should be default',
        parameters: z.object({
          display: z.string().describe('The beautiful react component you generated'),
        }),
        generate: async function* ({ display }) {
          yield `Looking up details for...`;
          console.log('display ', display);
          /*
          // Ensure the generated JSX string is valid and can be transpiled
          const transpiledCode = Babel.transform(display, { presets: ['react'] }).code;
          const GeneratedComponent = new Function('React', `return ${transpiledCode}`)(React);

          const jsxHello = ReactHtmlParser(jsxString);
          const jsxDisplay = <GeneratedComponent />;

          console.log('jsxDisplay ', jsxDisplay);
*/

          const componentDirectory = path.join(process.cwd(), 'components/dynamic');
          const componentPath = path.join(componentDirectory, 'Hello.tsx');
          console.log('componentPath ', componentPath)
          fs.writeFileSync(componentPath, display)
          const DHello = dynamic(() => import('@/components/dynamic/Hello'), {
            loading: () => <p>Loading...</p>,
          })

          return (
            <div>
              <DHello />
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