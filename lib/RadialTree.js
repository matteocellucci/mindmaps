var RadialTree = function(tree, zoom) {
	this._radiusincrement = 100;
	if(zoom) {
		this._radiusincrement = zoom;
	}
	this._canvaswide = tree._height * this._radiusincrement * 2;
	
	var coord = new Coordinate(this._canvaswide / 2, this._canvaswide / 2);
	
	this.archcanvas = document.getElementById("arch-context");
	this.archcanvas.width = this.archcanvas.height = this._canvaswide;
	this.archctx = new ArchContext(this.archcanvas.getContext("2d"), coord);
	
	this.nodecanvas = document.getElementById("node-context");
	this.nodecanvas.width = this.nodecanvas.height = this._canvaswide;
	this.nodectx = new NodeContext(this.nodecanvas.getContext("2d"), coord);

	this.labelcanvas = document.getElementById("label-context");
	this.labelcanvas.width = this.labelcanvas.height = this._canvaswide;
	this.labelctx = new LabelContext(this.labelcanvas.getContext("2d"), coord);

	this.tree = tree;
};

RadialTree.prototype.draw = function() {
	this._drawnode = function(label, polar, parentpolar) {
		this.nodectx.draw(polar, (polar[0] / this._radiusincrement) + 1);
		this.labelctx.draw(polar, label);
		if(parentpolar) {
			this.archctx.draw(parentpolar, polar);
		}
	};

	this._drawSubtree = function(tree, limit, parentpolar) {
		var angleincrement = (limit[1] - limit[0]) / tree.children.length;
		for(var i = 0; i < tree.children.length; i++) {
			var node = tree.children[i].root;
			var polar = [this._radiusincrement + parentpolar[0], limit[0] + angleincrement * i];
			this._drawnode(node.label, polar, parentpolar);
			if(tree.children[i].children.length > 0) {
				this._drawSubtree(tree.children[i], angleLimit(polar[1], node.level, angleincrement), polar);
			}
		}
	};

	this._drawnode(this.tree.root.label, [0,0]);
	this._drawSubtree(this.tree, [0, 2 * Math.PI], [0,0]);

	function bisectorLimit(angle, increment) {
		return [angle - increment / 2, angle + increment / 2];
	}

	function tangentLimit(angle, level) {
		var increment = 2 * Math.asin(level / (level + 1));
		return [angle - increment, angle + increment];
	}

	function angleLimit(angle, level, increment) {
		var limit = bisectorLimit(angle, increment);
		var tangent = tangentLimit(angle, level);
		if(limit[0] < tangent[0]) {
			limit[0] = tangent[0];
		}
		if(limit[1] > tangent[1]) {
			limit[1] = tangent[1];
		}
		return limit;
	}
};
