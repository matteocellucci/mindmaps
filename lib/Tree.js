var Tree = function(root, children, parent) {
	this.root = root;
	this.parent = null;
	if(parent) {
		this.parent = parent;
	}
	this.children = [];
	if(children) {
		this.children = children;
	}
	this._height = -1;
	this._hasprev = true;
	this._hasnext = true;
};

Tree.prototype.build = function(data) {	
	var hcounter = 0;
	for(var label in data) {
		this.root = new Node(label, 0);
		this.children = buildSubtree(data[label], 1, this);
		this._hasprev = false;
		this._hasnext = false;
		break;
	}
	this._height = hcounter + 1;

	function buildSubtree(data, level, parent) {
		var children = [];
		for(var label in data) {
			var node = new Node(label, level);
			if(data[label] == null) {
				children.push(new Tree(node, [], parent));
			}
			else {
				var child = new Tree(node, [], parent);
				child.children = buildSubtree(data[label], level + 1, child);
				children.push(child);
			}
		}
		if(level > hcounter) {
			hcounter = level;
		}
		if(children.length >= 1) {
			children[0]._hasprev = false;
			children[children.length - 1]._hasnext = false;
		}
		return children;
	}
};

Tree.prototype.traverse = function(callback, first_callback, last_callback) {
	if(first_callback && this.isFirstChild()) {
		first_callback(this.root, this.parent);
	}
	else if(last_callback && this.isLastChild()) {
		last_callback(this.root, this.parent);
	}
	else {
		callback(this.root, this.parent);
	}
	for(var i = 0; i < this.children.length; i++) {
		this.children[i].traverse(callback, first_callback, last_callback);
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

Tree.prototype.isFirstChild = function() {
	return !(this._hasprev);	
};

Tree.prototype.isLastChild = function() {
	return !(this._hasnext);
};
