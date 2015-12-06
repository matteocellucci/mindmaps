/*
 * Each instance of Tree can be the entire or just a section of the mind map
 */
var Tree = function(root, children) {
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
			this.children = subtreeParser(subtreeData, 1);
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
				children.push(new Tree(node));
			}
			else { // node is a root of this subtree
				children.push(new Tree(node, subtreeParser(subtree, level + 1)));
			}
		}
		return children;
	}
};

Tree.prototype.traverse = function(callback) {
	callback(this.root);
	for(var i = 0; i < this.children.length; i++) {
		this.children[i].traverse(callback);
	}
};

Tree.prototype.subtree = function(node) {
	var label = node,
	    callback = function(root) {
		if(root.label == label) {
			return this;
		}
	    };
	if(node instanceof Node) {
		label = node.label;
	}
	return this.traverse(callback); 
};
