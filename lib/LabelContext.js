var LabelContext = function(context, coordinate) {
	this.ctx = context;
	this.coordinate = coordinate;
};

LabelContext.prototype.draw = function(polar, label) {
	var position = this.coordinate.polarToCartesian(polar[0], polar[1], true);
	this.ctx.font = "10px sans-serif";
	this.ctx.textAlign = "center";
	this.ctx.textBaseline = "middle";
	this.ctx.fillStyle = "#261E1B";
	this.ctx.fillText(label, position[0], position[1]);
};
