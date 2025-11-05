# etch-a-sketch
The Odin Project Javascript Project

I needed 7 hours for this project. It was very hard, but taught me a lot and had a lot of fun.

Main difficulties:
-Making the squares change size dynamically
-Drawing is only on when the mouse is held down
-Progressive function, the opacity logic was hard to figure out
-"Progressive doesnt work after clicking "reset" but does work after making a new grid"
-Which i fixed after like 3 hours by copying the makeGrid function to the reset function, 
 but keeping the lastGridSize like so:
-function reset(lastGridSize = size) {...}
-Forgetting that querySelectorAll returns a nodelist