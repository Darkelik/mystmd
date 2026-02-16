import { GenericParent } from "myst-common";
import { Plugin } from "unified";
import { selectAll } from "unist-util-select";

export function buttonWidgetTransform(tree: GenericParent) {
  const buttonNodes = selectAll('buttonWidget', tree) as GenericParent[];
  buttonNodes.forEach(node => {
    
    node['type'] = 'span';
    node['style'] = { border: '1px solid #ccc', padding: '10px', margin: '10px 0'};
    node['url'] = node.value;

    node.children = [];
    const child = { type : 'text',
      value : node.value as string,
    }
    node.children[0] = child;
  });
}

export const buttonWidgetPlugin: Plugin<[], GenericParent, GenericParent> =
  () => (tree) => {
    buttonWidgetTransform(tree);
  };