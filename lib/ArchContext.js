var ArchContext = function(context, coordinate) {
	this.ctx = context;
	this.coordinate = coordinate;
};

ArchContext.prototype.draw = function(polar1, polar2) {
	var from = this.coordinate.polarToCartesian(polar1[0], polar1[1], true),
	    to = this.coordinate.polarToCartesian(polar2[0], polar2[1], true);
	this.ctx.lineWidth = 1;
	this.ctx.strokeStyle = "#F2805A";
	this.ctx.beginPath();
	this.ctx.moveTo(from[0], from[1]);
	this.ctx.lineTo(to[0], to[1]);
	this.ctx.closePath();
	this.ctx.stroke();
};
