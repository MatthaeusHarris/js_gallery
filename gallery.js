var manifest = {
	"container_selector": "#gallery-container",
	"image_template": ".image-container",
	"pictures": {
 		"panzer": {
 			"prefix": "panzer",
 			"num_pictures": 5
 		},
 		"tiger": {
 			"prefix": "tiger",
 			"num_pictures": 3
 		}
 	}
};

var key;
var i;
var container;
var template;
var pic_info;
var obj;

$().ready(function() {
	key = document.location.hash.replace(/^#/gm,'');
	container = $(manifest.container_selector);
	if (container) {
		template = $(manifest.image_template);
		if (template) {
			pic_info = manifest.pictures[key];
			if (pic_info) {
				for (i = 1; i <= pic_info.num_pictures; i++) {
					img = document.createElement('img');
					img.src='' + pic_info.prefix + i + '.jpg';
					obj = template.clone();
					obj.find("img").replaceWith(img);
				    container.append(obj);
				}
				container.find(manifest.image_template).show();
			} else {
				alert("Error, no reference for " + key + " in manifest file.");
			}
		} else {
			alert("Could not find image template " + manifest.image_template + " in document.")
		}
	} else {
		alert("Could not find container " + manifest.container_selector + " in document.");
	}
});