var TreeTextViewer = function(data) {
	var conteiner = document.createElement("pre");
	this.separator = "   |";
	this.connector = "-> ";

	var tree = new Tree();
			
	tree.build(data);
	tree.traverse(function(node) {
	this.separator = "   |";
	this.connector = "-> ";


		var tabbing = "";
		if(node.level > 0) {
			tabbing = separator;
			for(var i = 1; i < node.level; i++) {
				tabbing += separator;
			}
			tabbing += connector;
		}
		var txt = document.createTextNode(tabbing + node.label +"\n");
		conteiner.appendChild(txt);
	});
};

TreeTextViewer.prototype.view = function(conteiner) {
	if(conteiner) {
		conteiner.appendChild(this.conteiner);
	}
	else {
		document.body.appendChild(this.conteiner);
	}
};
