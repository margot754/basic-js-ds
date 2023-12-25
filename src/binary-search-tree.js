const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class NodeTree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    if (!this.rootTree) {
      return null;
    } else {
      return this.rootTree;
    }
  }

  add(data) {
    this.rootTree = addWithin(this.rootTree, data);

    function addWithin(nodeTree, data) {
      if (!nodeTree) {
        return new NodeTree(data);
      }

      if (nodeTree.data === data) {
        return nodeTree;
      }

      if (data < nodeTree.data) {
        nodeTree.left = addWithin(nodeTree.left, data);
      } else {
        nodeTree.right = addWithin(nodeTree.right, data);
      }

      return nodeTree;
    }
  }

  has(data) {
    return searchPresense(this.rootTree, data);

    function searchPresense(nodeTree, data) {
      if (!nodeTree) {
        return false;
      }
      if (nodeTree.data === data) {
        return true;
      }
      if (data < nodeTree.data) {
        return searchPresense(nodeTree.left, data);
      } else {
        return searchPresense(nodeTree.right, data);
      }
    }
  }

  find(data) {
    return searchData(this.rootTree, data);

    function searchData(nodeTree, data) {
      if (!nodeTree) {
        return null;
      }
      if (nodeTree.data === data) {
        return nodeTree;
      }
      if (data < nodeTree.data) {
        return searchData(nodeTree.left, data);
      } else {
        return searchData(nodeTree.right, data);
      }
    }
  }

  remove(data) {
    this.root = removeNode(this.rootTree, data);

    function removeNode(nodeTree, data) {
      if (!nodeTree) {
        return null;
      }

      if (data < nodeTree.data) {
        nodeTree.left = removeNode(nodeTree.left, data);
        return nodeTree;
      } else if (nodeTree.data < data) {
        nodeTree.right = removeNode(nodeTree.right, data);
        return nodeTree;
      } else {
      
        if (!nodeTree.left && !nodeTree.right) {
         
          return null;
        }

        if (!nodeTree.left) {
         
          nodeTree = nodeTree.right;
          return nodeTree;
        }

        if (!nodeTree.right) {
         
          nodeTree = nodeTree.left;
          return nodeTree;
        }

       
        let minRight = nodeTree.right;                                                    
        while (minRight.left) {
          minRight = minRight.left;
        }
        nodeTree.data = minRight.data;

        nodeTree.right = removeNode(nodeTree.right, minRight.data);

        return nodeTree;
      }
    }
  }
  min() {
    if (!this.rootTree) {
      return;
    }
    let nodeTree = this.rootTree;
    while (nodeTree.left) {
      nodeTree = nodeTree.left;
    }
    return nodeTree.data;
  }

  max() {
    if (!this.rootTree) {
      return;
    }
    let nodeTree = this.rootTree;
    while (nodeTree.right) {
      nodeTree = nodeTree.right;
    }
    return nodeTree.data;
  }

}


module.exports = {
  BinarySearchTree
};