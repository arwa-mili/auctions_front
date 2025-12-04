/**
 * Usage:
 *  - Install dependencies if necessary: npm install glob fs-extra
 *  - Run: npx ts-node scripts/generate-stories.ts
 *
 * What it does:
 *  - Scans src for .tsx files (excluding stories, node_modules, and test files)
 *  - For each file it creates a stories/.../<Path>.stories.tsx that mirrors the
 *    src path under the stories folder (so stories live outside the component
 *    folders). It will not overwrite existing story files.
 *
 * Template strategy:
 *  - The generated story imports the module using a relative path and attempts
 *    to use a default export or a named export matching the component filename
 *    in PascalCase. If none are found it renders a placeholder so Storybook
 *    doesn’t completely break.
 */

import fs from 'fs';
import path from 'path';
import {glob} from 'glob';
import fse from 'fs-extra';

const SRC_GLOB = 'src/**/*.tsx';
const OUTPUT_BASE = 'src/stories';

function pascalCase(filename) {
    return filename
    .replace(/\.(tsx|ts)$/,'')
    .split(/[-_.\\/\\]/)
    .map((p) => (p ? p.charAt(0).toUpperCase() + p.slice(1) : ''))
    .join('');
}

function template(componentName: string, relativeImport: string, title: string) {
  return `import React from 'react';
import { Meta, Story } from '@storybook/react';
import * as ComponentModule from '${relativeImport}';

const Component: any = (ComponentModule as any).default || (ComponentModule as any)['${componentName}'] || (() => <div style={{padding:16}}>Component not found in import: ${relativeImport}</div>);

const meta: Meta = {
  title: '${title}',
  component: Component,
};

export default meta;

const Template: Story<any> = (args) => <Component {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
`;
}

function findRelativeImport(from: string, to: string) {
  let rel = path.relative(path.dirname(from), to);
  if (!rel.startsWith('.')) rel = './' + rel;
  rel = rel.replace(/\.(tsx|ts)$/,'');
  return rel.split(path.sep).join('/');
}

function makeTitleFromRel(relFromSrc: string) {
  // Turn path like "components/Header/Header" into "Generated/Components/Header/Header"
  const parts = relFromSrc.split(path.sep).map((p) => {
    // keep folder names as-is, but PascalCase filenames
    return p;
  });
  return ['Generated', ...parts].join('/');
}

async function main() {
  console.log('Scanning for .tsx files under src...');
  const files = glob.sync(SRC_GLOB, {
    nodir: true,
    ignore: ['**/node_modules/**', '**/stories/**', '**/*.stories.*', '**/*.test.*', '**/*.spec.*'],
  });

  if (!files.length) {
    console.error('No .tsx files found with glob:', SRC_GLOB);
    process.exitCode = 1;
    return;
  }

  for (const file of files) {
    const relFromSrc = path.relative('src', file).replace(/\.tsx$/, '');
    // mirror the src path under stories
    const outFile = path.join(OUTPUT_BASE, relFromSrc + '.stories.tsx');

    if (fs.existsSync(outFile)) {
      console.log(`Skipping existing story: ${outFile}`);
      continue;
    }

    const base = path.basename(file);
    const compName = pascalCase(base);

    const absoluteFile = path.resolve(file);
    const relativeImport = findRelativeImport(outFile, absoluteFile);

    const title = makeTitleFromRel(relFromSrc.split(path.sep).join('/'));

    const content = template(compName, relativeImport, title);

    await fse.outputFile(outFile, content, 'utf8');
    console.log(`Wrote story: ${outFile}`);
  }

  console.log('Done generating stories.');
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
