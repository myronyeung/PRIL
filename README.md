# PRIL
The Portable Responsive Image Loader. A copy/paste responsive image loader for non-developers, i.e. make something even my sister can figure out how to use. ;-)

This may be solution to a problem that doesn't exist, but here goes: how would someone unfamiliar with coding add alternate responsive images along with breakpoints? Furthermore, let's say this hypothetical person only has access to the HTML, does not know how to add a JS library, but knows the paths to the images and the breakpoint ranges in pixels. Yeah, this probably isn't a real problem :-)

My answer: immediately after each img, paste the self-executing code (see pril-minified.js), then PRIL.add() to supply the img path and min/max breakpoints. Or to be even more efficient, paste the self-executing code after the first img, and for the rest of the imgs, simply call PRIL.add().

PRIL works by inlining a media query for each responsive image and min/max breakpoint combo. It's messy, but simple.

Open example.html in your browser or take a look at my fiddle to see PRIL in action: https://jsfiddle.net/myronyeung/9km5zf4z/
