randomizer.js
=================

jQuery plugin that give you functions to get/set random values or call random functions.

## Demo
http://masquerade-circus.net/myPlugins/randomizer/

##How to use:
Call the plugin on the set of elements or call the helper functions to get a value.
				
##Functions:
```javascript
	$(selector).randomSize(min,max,unit);
	$(selector).randomSize(array,unit);
```
Set the font-size of the selector to a random number from min to max numbers or an array of numbers. Defaults to min = 10, max = 30, unit = 'px'.


```javascript
	$(selector).randomHeight(min,max,unit);
	$(selector).randomHeight(array,unit);
```
Set the height of the selector to a random size from min to max sizes or an array of sizes. Defaults to min = 10, max = 100, unit = 'px'.


```javascript
	$(selector).randomWidth(min,max,unit);
	$(selector).randomWidth(array,unit);
```
Set the width of the selector to a random size from min to max sizes or an array of sizes. Defaults to min = 10, max = 100, unit = 'px'.


```javascript
	$(selector).randomColor(array);
```
Set the font-color of the selector to a random color from an array of colors. 
Defaults to random color from the 16 million hex colors.


```javascript
	$(selector).randomBgColor(array);
```
Set the background-color of the selector to a random color from an array of colors. 
Defaults to random color from the 16 million hex colors.


```javascript
	$(selector).randomBgImage(array);
```
Set the background-image of the selector to a random image from an array of image sources. 


```javascript
	$(selector).randomContent(array, dominsertion);
```
Set the content of the selector to a random content from an array of contents. 
Dom insertion string could be: 'append', 'prepend','after','before','html' or 'replace'.
Defaults to 'append'.


```javascript
	$(selector).randomSource(array);
```
Set the source attribute of the selector to a random source from an array of sources.


```javascript
	$(selector).randomFunction(array);
```
Call a random function on the selector from an array of functions. 
You can access the original selector inside the random function by $(this).


```javascript
	$(selector).randomLoad(array, function);
```
Load a random content to the selector from an array of sources. 
You can pass a callback function as second argument.


```javascript
	$.randomizer.mRnd(min,max)
```
Helper function to get a random number between min and max.
Defaults to a random number between 0 and 100.


```javascript
	$.randomizer.Array(array)
```
Helper function to get a random value from an array.


```javascript
	$.randomizer.randomFunction(array,arguments)
```
Helper function to call a random function from an array of functions.
The second parameter could be an javascript object, array, dom object, jquery object or a single value.
If no arguments are passed, the window object will be passed as second parameter.


# Legal
Author & copyright (c) 2013: [Masquerade Circus](http://masquerade-circus.net)
Dual [MIT](http://opensource.org/licenses/MIT) & [GPLv2](http://opensource.org/licenses/GPL-2.0) license
