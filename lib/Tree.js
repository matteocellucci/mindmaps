/*
 * Each instance of Tree can be the entire or just a section of the mind map
 */
var Tree = function(root, children) {
	// Should I check instances type of the args?
	this.root = root;
	this.children = [];
	if(children) {
		this.children = children;
	}
};

Tree.prototype.build = function(data) {
	for(var label in data) {
		this.root = new Node(label);
		this.root.level = 0;
		var subtreeData = data[label];
		if(subtreeData != null) {
			this.children.push(new Tree(this.root, subtreeParser(subtreeData, 1)));
		}
		break;
	}

	function subtreeParser(subtreeData, level) {
		var children = [];
		for(var nodeLabel in subtreeData) {
			var node = new Node(nodeLabel), // Build a node and set his level
			    subtree = subtreeData[nodeLabel];
			node.level = level;
			if(subtree == null) { // node is a leaf
				children.push(node);
			}
			else { // node is a root of this subtree
				children.push(new Tree(node, subtreeParser(subtree, level + 1)));
			}
		}
		return children;
	}
};

Tree.prototype.traverse = function(callback) {
	for(var i = 0; i < this.children.length; i++) {
		if(this.children[i] instanceof Tree) {
			callback(this.children[i].root);
			this.children[i].traverse(callback);
		}
		else {
			callback(this.children[i]);
		}
	}
};
