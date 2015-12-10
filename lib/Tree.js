var Tree = function(root, children) {
	this.root = root;
	this.children = [];
	if(children) {
		this.children = children;
	}
	this._height = -1;
};

Tree.prototype.build = function(data) {	
	var hcounter = 0;
	for(var label in data) {
		this.root = new Node(label, 0);
		this.children = buildSubtree(data[label], 1);
		break;
	}
	this._height = hcounter + 1;

	function buildSubtree(data, level) {
		var children = [];
		for(var label in data) {
			var node = new Node(label, level);
			if(data[label] == null) {
				children.push(new Tree(node));
			}
			else {
				children.push(new Tree(node, buildSubtree(data[label], level + 1)));
			}
		}
		if(level > hcounter) {
			hcounter = level;
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
