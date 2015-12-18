# MindMap
MindMap is a software to build them. Mind maps are usally useful for students but you can apply to all kind of stuffs. This application is browser-based so it can ben used from everywhere and everyone. There are some of mine maps inside `src/` folder.

## How to use it
* **1# Add data:** Create your data for the map: data is fromatted using JSON and stored in 'src/filedataname.json'. JSON is an open format to transmit data object consisting of attribute-values pairs. It is pretty easy to learn, here a [link from tutsplus.com](http://code.tutsplus.com/tutorials/understanding-json--active-8817). Structure follows these simple rules:
	- Leafs have `null` value;
	- Children should be encapsulated in another deeper level;

Example from [Color - Wikipedia](https://en.wikipedia.org/wiki/Color):
```
{
	"Color": {
		"Physics of color": {
			"Spectral colors": null,
			"Color of objects": null
		},
		"Perception": {
			"Development of theories of color vision": null,
			"Color in the eye": null,
			"Color in the brain": null,
			"Nonstandard color perception": {
				"Color deficiency": null,
				"Tetrachromacy": null,
				"Synesthesia": null
			},
			"Afterimages": null,
			"Color constancy": null,
			"Color naming": null
		}
		"Associations": null,
		"Spectral colors and color reproduction": null,
		"Additive coloring": null,
		"Subtractive coloring": null,
		"Structural color": null,
		"Mentions of color in social media": null,
		"Additional terms": null
	}
}
```
* **2# Visualize map:** open with your browser `print-mindmap.html`, for a printable version, or `desktop-mindmap.html`, for a visual version. In your url bar append to the address `?f=filename` as GET parameter.

Example:
```
file:///your/path/to/print-mindmap.html?f=filedataname
```
In case of desktop version, it is possible to use another parameter to set a properly zoom (suggested max 250) like `z=100`.
Example:
```
file:///your/path/to/print-mindmap.html?f=filedataname&z=200
```

## Next features
- [x] Printable viewer
- [ ] Printable viewer personalization
- [x] Graphic viewer
- [ ] Graphic viewer personalization
- [ ] Data archive manager
- [ ] Interactive data input
- [ ] Documentation

## Troubleshooting
* Set zoom up to 250 could bring a browser crash
* Some browsers don't support cross-scripting

## Changelog
* **v1.3.0:**
	- Add traverse tree functionality
	- Fix printable version issue
	- Refine printable version style
	- Fix some minor issue
* **v1.2.1:**
	- Fix README.md
* **v1.2.0:**
	- Add a radial graphic viewer
	- Improve Tree data structure builder
	- Rename printable-mindmap.html in print-mindmap.html
* **v1.1.0:**
	- Improve tree data structure
	- Fix printable style
	- Fix some minor issue
* **v1.0.2:**
	- Add AJAX loading data support
	- Fix printable style
* **v1.0.1:**
	- Add fixes to printable viewer style
	- Fix some minor issue
* **v1.0.0:**
	- MindMap release

## License
This project is released under [The MIT License (MIT)](https://github.com/matteocellucci/mindmaps/blob/master/license).
