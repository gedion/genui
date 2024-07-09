import { type ReactNode } from 'react';
import { AI } from './action';
import fs from 'fs'
import path from 'path'
import ThankYouCard from '@/components/dynamic/ThankYouCard';
//{ position } from '@/components/dynamic/ThankYouCard';

const getTsxFiles = (folderPath) => {
  try {
    const files = fs.readdirSync(folderPath);
    const jsxFiles = files.filter(file => path.basename(file) === 'ThankYouCard.tsx')
      .map(file => file.split('.')[0]);

    //    return files.filter(file => file.endsWith('.jsx')).map(file => path.join(directory, file));

    return jsxFiles;
  } catch (err) {
    console.error(`Error reading directory: ${err.message}`);
    return [];
  }
};


const toComponents = async () => {
  const componentDirectory = path.join(process.cwd(), 'components/dynamic');
  const tsxFiles = getTsxFiles(componentDirectory);

  const components = await Promise.all(tsxFiles.map(async (file) => {
    const module = await import('@/components/dynamic/ThankYouCard');
    return { component: module.default, position: module.position };
  }));
  return components.filter(Boolean); // Filter out null values
};

export default async function RootLayout({
  children
}) {
  return (
    <AI>
      <html lang="en">
        <body>{children}</body>
      </html>
    </AI>
  );
}