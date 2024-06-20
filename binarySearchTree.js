class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(data) {
    const newNode = new Node(data)

    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode
      } else this.insertNode(node.left, newNode)
    } else {
      if (node.right === null) {
        node.right = newNode
      } else this.insertNode(node.right, newNode)
    }
  }
}

let tree = new BinarySearchTree()

tree.insert(12)
tree.insert(2)
tree.insert(14)
tree.insert(23)
tree.insert(25)

console.log(tree)
