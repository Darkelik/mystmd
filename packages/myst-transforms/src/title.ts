import { GenericParent } from "myst-common";
import { Plugin } from "unified";
import { selectAll } from "unist-util-select";

export function titleTransform(tree: GenericParent) {
  const titleNodes = selectAll('title', tree) as GenericParent[];
  titleNodes.forEach(node => {

    node['type'] = 'span';
    node['style'] = { color: 'red', 'font-size': '2em', 'text-decoration': 'underline'}  

    node.children = [];
    const child = { type : 'text',
      value : node.value as string,
    }
    node.children[0] = child;
  });
}

export const titlePlugin: Plugin<[], GenericParent, GenericParent> =
  () => (tree) => {
    titleTransform(tree);
  };