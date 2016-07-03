#Coding rule

##Directory

```
+-pc/
 |-fonts ... web font
 |-images ... images
  |-sample/ ... dummy images
 |-js
  |-module/ ... JS components by us
  |-app.js ... This requires module scripts
  |-vendor.js ... This requires lib scripts
 |-lib ... plugins & libraries by someone
 |-sass
  |-1-setting ... variables
  |-2-mixin ... mixins
  |-3-base ... reset, normalise, sanitize / default styles
  |-4-layout ... layout
  |-5-module ... module, object, component
  |-6-utility ... helper
 |-sprites ... sprite images
 |-test
 |-view
  |-layout ... layout ejs
  |-metadata ... head & scripts ejs
  |-module ... module ejs
  |-svg ... svg
  index.ejs
  single.ejs
  about.ejs
   ...etc
+-sp/
```

##Basic

###Write code with SMACSS
https://smacss.com/

### Avoid many nest

NG
```
.list {
	.list-item {
		.list-link {
		    > time {
			    > img {
			    }
			}
		}
	}
}
```

OK
```
.list {
	.list-item {}
	.list-link {
		> img {}
	}
}
```

##Class

###Use chain case only, and Don't use uppercase

NG
```
<div class="listItem"></div>
<div class="slider-item"></div>
<div class="post_item"></div>
```

OK
```
<div class="list-item"></div>
<div class="slider-item"></div>
<div class="post-item"></div>
```

###Don't use id for style

NG
```
<header id="header"></header>
```

OK
```
<header classs="l-header"></header>
```

###But you can use id for a hook of JavaScript

OK
```
<header classs="l-header" id="js-sticky"></header>

<header classs="l-header js-sticky"></header>
```

###Don't feel free to omit a name of class

NG
```
<a href="" class="btn btn-er">...</a>
```

OK
```
<a href="" class="button btn-error">...</a>
```

###But you can omit a name of class if you tell us & create lists in advance

Ex)
```
sm - small
md - middle
lg - large
```

###Add prefix all class except modules

+ layout = "l-"
+ utility = "u-"
+ Hooks of JavaScript = "js-"
+ State = "is-"

###extend
We ban using `@extend' in Sass for avoiding a spaghetti code

##Value

+ px & % as possible as.
+ recommend　relative value as possible as,
+ use px on font-size
+ don't use em, vm, rem without a reason.

###px or %
width, height, padding, margin, top, left, right, bottom, transform

###px only
font-size 

###point( ex)1.5 )
line-height, opacity

##Color

Use hexadecimal & lowercase only 

NG
```
.foo {
	background-color: black;
	color: #FFF;
}
```

OK
```
.foo {
	background-color: #000;
	color: #fff;
}
```

##git
We use git in accordance with git-flow.  
https://www.atlassian.com/en/git/workflows#!workflow-gitflow  
https://www.atlassian.com/ja/git/workflows#!workflow-gitflow  

master, develop, feature, release, hotfix  
