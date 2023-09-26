import React from 'react';
import type { Organism } from '@verndale/core';
import globModules from './glob-modules';
import { renderElement } from './helpers/react-18-shim';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reactModule = (Component: any, nodeList: NodeListOf<HTMLElement>) => {
  return nodeList.forEach(node => {
    renderElement(<Component {...node.dataset} />, node);
  });
};

const modules: Organism[] = [
  {
    name: 'accordion',
    loader: () => import('./modules/accordion')
  }
];

export default [...globModules, ...modules];
