var Coordinate = function(X,Y) {
	this.X = X;
	this.Y = Y;
};

Coordinate.prototype.cartesian = function(x, y) {
	return [this.X + x, this.Y + y];
};

Coordinate.prototype.polar = function(d, r) {
	var x = d * Math.cos(r) + this.X;
	var y = d * Math.sin(r) + this.Y;
	return [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
};

Coordinate.prototype.polarToCartesian = function(d, r, absolute) {
	if(absolute) {
		return [d * Math.cos(r) + this.X, d * Math.sin(r) + this.Y];
	}
	else {
		return [d * Math.cos(r), d * Math.sin(r)];
	}
};

Coordinate.prototype.cartesianToPolar = function(x, y, absolute) {
	if(absolute) {
		x += this.X;
		y += this.Y;
	}	
	return [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
};
