var NodeContext = function(context, coordinate) {
	this.ctx = context;
	this.coordinate = coordinate;
};

NodeContext.prototype.draw = function(polar, level) {
	var radius = 20;
	if(level) {
		radius /= level;
	}
	var center = this.coordinate.polarToCartesian(polar[0], polar[1], true);
	this.ctx.fillStyle = "#F2805A";
	this.ctx.beginPath();
	this.ctx.arc(center[0], center[1], radius, 0, 2 * Math.PI, true);
	this.ctx.closePath();
	this.ctx.fill();
};
