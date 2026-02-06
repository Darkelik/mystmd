import type { Plugin } from 'unified';
import { selectAll } from 'unist-util-select';
import type { GenericParent, GenericNode } from 'myst-common';


export function bonjourTransform(tree: GenericParent) {
  const bonjourNodes = selectAll('bonjour', tree) as GenericParent[];
  bonjourNodes.forEach(node => {
    // Change the node type to text
    node.type = 'text';
    // Replace the value
    node.value = `Bonjour ${node.value}!`;
  });
}

export const bonjourPlugin: Plugin<[], GenericParent, GenericParent> =
  () => (tree) => {
    bonjourTransform(tree);
  };