# jounce
Bounce HTML elements using JavaScript
# How to use
* Install jounce
```npm install --save-dev jounce```
* Add three HTML elemnets to your markup
  * jounceContainer // *Area for element to bounce.*
  * jounceMainDiv // *Element used for applying animaion.*
  * jounceSubDiv // *Content inside this element will be bounced.*</br>
  ```
  <div id="container" class="container">
      <div id="mainDiv" class="main-div">
          <div id="subDiv" class="sub-div">
              <!-- content you want to bounce -->
          </div>
      </div>
  </div>
  ```
* Add styles
```
.container {
    position: relative;
}
.main-div {
    position: absolute;
}

.sub-div {
    position: absolute;
}
```
* Import and initialize jounce
```
 import * as jounce from 'jounce';

 options = {
   noOfBounces: 3; // number of bounces for element default 2.
   time: 2; // duration of the animation. default 3.
 }
 jounce.init({ options })
```
* Bounce the element
```
jounce.animate();
```
