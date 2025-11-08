export class Tree<T> {
  root: TreeNode<T>;

  constructor(rootValue: T) {
    this.root = new TreeNode(rootValue);
  }
}

export class TreeNode<T> {
  children: TreeNode<T>[];
  parent: null | TreeNode<T>;
  value: T;

  constructor(value: T) {
    this.value = value;
    this.children = [];
    this.parent = null;
  }

  addChildNode(node: TreeNode<T>) {
    node.parent = this;
    this.children.push(node);
  }

  addChildValue(value: T) {
    const node = new TreeNode(value);
    node.parent = this;
    this.children.push(node);
  }

  clearChildren() {
    this.children = [];
  }

  find(predicate: (node: TreeNode<T>) => boolean): null | TreeNode<T> {
    const result = this.children.find(predicate);

    if (!result) return null;

    return result;
  }

  removeChild(node: TreeNode<T>) {
    this.children = this.children.filter((c) => c !== node);
  }
}
