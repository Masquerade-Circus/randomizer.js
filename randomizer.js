(function ($) {
	"use strict";
	var mRnd, toHex, randomHex, rArr, rVal, rInt;
	$.randomizer = {};
	$.randomizer.mRnd = mRnd = function (a, b, c) {a != []._ ? c = a : c = 100; b != []._ ? c = b - a : a = 0; return (Math.floor(Math.random() * c) + a); };
	$.randomizer.toHex = toHex = function (a) {a = a.toString(16); a.length < 2 ? a = "0" + a : null; return a; };
	$.randomizer.randomHex = randomHex = function () {return '#' + toHex(mRnd(256)) + toHex(mRnd(256)) + toHex(mRnd(256)); };
	$.randomizer.Array = rArr = function(a) { return a[mRnd(a.length)];};
	$.randomizer.randomFunction = function (a,b) {if(b == []._)b == window; rArr(a).call(b);};
	$.randomizer.Val = rVal = function(a, b) { return a == []._ ? b : rArr(a);};
	$.randomizer.Int = rInt = function(a,b,c,d,e,f,n) {
		
		/*
		if (c == []._){c = 'px';}
		if (a !== []._){
			if (b !== []._) {
				if (typeof b == 'string') {
					f = rArr(a) + b;
				} else {
					f = mRnd(a, b + 1) + c;
				}
			} else {
				f = rArr(a);
			}
		} else {
			f = mRnd(d, e);
		}
		*/	
		
		c == []._ ? c = 'px' : null; 
		a != []._ ? b != []._ ? b.big ? f = rArr(a) + b : f = mRnd(a, b + 1) + c : f = rArr(a) : f = mRnd(d, e);
		
		return f;
	};
	
    $.extend($.fn, {
		randomSize: function (a, b, c) {
			return this.each(function () {
				$(this).css('font-size', rInt(a,b,c,10,30));
			});
		},
		randomHeight: function (a, b, c) {
			return this.each(function () {
				$(this).height(rInt(a,b,c,10,100));
			});
		},
		randomWidth: function (a, b, c) {
			return this.each(function () {
				$(this).width(rInt(a,b,c,10,100));
			});
		},
		randomColor: function (a) {
			return this.each(function () {
				$(this).css('color', rVal(a, randomHex()));
			});
		},
		randomBgColor: function (a) {
			return this.each(function () {
				$(this).css('background-color', rVal(a, randomHex()));
			});
		},
		randomBgImage: function (a) {
			return this.each(function () {
				$(this).css('background-image', rArr(a));
			});
		},
		randomContent: function (a, b) {
			var b = b || 'append';
			b === 'replace' ? b = 'html' : null;
			return this.each(function () {
				$(this)[b](rArr(a));
			});
		},
		randomSource: function (a) {
			return this.each(function () {
				$(this).attr('src', rArr(a));
			});
		},
		randomFunction: function (a) {
			return this.each(function () {
				rArr(a).call(this);
			});
		},
		randomLoad: function (a, b) {
			return this.each(function () {
				$(this).load(rArr(a), b.call(this));
			});
		}
	});
})(jQuery);