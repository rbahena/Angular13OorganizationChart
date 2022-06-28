export interface TreeNode {
    // Node
    children: TreeNode[];
    hideChildren?: boolean;
    onClick?: () => void;
    // CSS (used for custom styling of individual nodes)
    cssClass?: string;
    css?: string;
}

// make your own interface that extends TreeNode
export interface MyTreeNode extends TreeNode {
    name: string;
    description?: string;
    image?: string;
    children: MyTreeNode[];
}