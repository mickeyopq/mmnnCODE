/*	Since script loading is dynamic, we take
	a callback function with our loadScript call
	that executes once the script is done downloading/parsing
	on the page.
*/
var loadScript = function(src, callbackfn) {
	var newScript = document.createElement("script");
	newScript.type = "text/javascript";
	newScript.setAttribute("async", "true");
	newScript.setAttribute("src", src);
	
	if(newScript.readyState) {
		newScript.onreadystatechange = function() {
			if(/loaded|complete/.test(newScript.readyState)) callbackfn();
		}
	} else {
		newScript.addEventListener("load", callbackfn, false);
	}
	
	document.documentElement.firstChild.appendChild(newScript);
}
/*
if(a) {
	loadScript("lulz.js", function() { ... });
} else {
	loadScript("other_lulz.js", function() { ... });
}
*/
var gggg=1234;
