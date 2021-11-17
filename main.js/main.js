(()=>{"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,i){if(e){if("string"==typeof e)return t(e,i);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,i):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}function r(t,e){return r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(t,e)}function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function a(t,e){if(e&&("object"===s(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}var l;var u=new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}(u,t);var n,s,l=(n=u,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=c(n);if(s){var i=c(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return a(this,t)});function u(t,e){var n;return i(this,u),(n=l.call(this,t,e)).bindControlsEvent(),n}return o(u,[{key:"addArrow",value:function(t,e){this.prevButton=document.querySelector(t),this.NextButton=document.querySelector(e),this.addArrowEvent()}},{key:"addArrowEvent",value:function(){this.prevButton.addEventListener("click",this.activePrevSlide),this.NextButton.addEventListener("click",this.activeNextSlide)}},{key:"CreateControls",value:function(){var t=document.createElement("ul");return t.classList.add("SlidePaginacao"),this.slideArray.forEach((function(e,i){t.innerHTML+="<li><a href='#slide".concat(i+1,"'></a></li>")})),this.wrapper.append(t),t}},{key:"activeControlItem",value:function(){var t=this;this.controlArray.forEach((function(e){return e.classList.remove(t.activeClass)})),this.controlArray[this.index.active].classList.add(this.activeClass)}},{key:"addControl",value:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.control=document.querySelector(i)||this.CreateControls(),this.controlArray=e(this.control.children),this.controlArray.forEach((function(e,i){t.EventControl(e,i)}))}},{key:"EventControl",value:function(t,e){var i=this;t.addEventListener("click",(function(t){t.preventDefault(),i.changeSlide(e)})),this.activeControlItem(),this.wrapper.addEventListener("changeSlide",this.activeControlItem)}},{key:"bindControlsEvent",value:function(){this.changeSlide=this.changeSlide.bind(this),this.activeControlItem=this.activeControlItem.bind(this)}}]),u}(function(){function t(e,n){i(this,t),this.slide=document.querySelector(e),this.wrapper=document.querySelector(n),this.dist={finalPosition:0,startX:0,movement:0},this.activeClass="ativo",this.changeEvent=new Event("changeSlide")}return o(t,[{key:"transition",value:function(t){this.slide.style.transition=t?"transform .3s":""}},{key:"moveSlide",value:function(t){this.dist.movePosition=t,this.slide.style.transform="translate3d(".concat(t,"px, 0, 0)")}},{key:"updatePosition",value:function(t){return this.dist.movement=1.6*(this.dist.startX-t),this.dist.finalPosition-this.dist.movement}},{key:"onStart",value:function(t){var e;"mousedown"===t.type?(t.preventDefault(),this.dist.startX=t.clientX,e="mousemove"):(this.dist.startX=t.changedTouches[0].clientX,e="touchmove"),this.wrapper.addEventListener(e,this.onMove),this.transition(!1)}},{key:"onMove",value:function(t){var e="mousemove"===t.type?t.clientX:t.changedTouches[0].clientX,i=this.updatePosition(e);this.moveSlide(i)}},{key:"onEnd",value:function(t){var e="mouseup"===t.type?"mousemove":"touchmove";this.wrapper.removeEventListener(e,this.onMove),this.dist.finalPosition=this.dist.movePosition,this.transition(!0),this.changeSlideOnEnd()}},{key:"changeSlideOnEnd",value:function(){this.dist.movement>120&&void 0!==this.index.next?this.activeNextSlide():this.dist.movement<-120&&void 0!==this.index.prev?this.activePrevSlide():this.changeSlide(this.index.active)}},{key:"addSlideEvents",value:function(){this.wrapper.addEventListener("mousedown",this.onStart),this.wrapper.addEventListener("touchstart",this.onStart),this.wrapper.addEventListener("mouseup",this.onEnd),this.wrapper.addEventListener("touchend",this.onEnd)}},{key:"slidePosition",value:function(t){var e=(this.wrapper.offsetWidth-t.offsetWidth)/2;return-(t.offsetLeft-e)}},{key:"slidesConfig",value:function(){var t=this;this.slideArray=e(this.slide.children).map((function(e){return{position:t.slidePosition(e),element:e}}))}},{key:"slidesIndexNav",value:function(t){var e=this.slideArray.length-1;this.index={prev:t?t-1:void 0,active:t,next:t===e?void 0:t+1}}},{key:"changeSlide",value:function(t){var e=this.slideArray[t];this.moveSlide(e.position),this.slidesIndexNav(t),this.dist.finalPosition=e.position,this.changeActiveClass(),this.wrapper.dispatchEvent(this.changeEvent)}},{key:"changeActiveClass",value:function(){var t=this;this.slideArray.forEach((function(e){return e.element.classList.remove(t.activeClass)})),this.slideArray[this.index.active].element.classList.add(this.activeClass)}},{key:"activePrevSlide",value:function(){void 0!==this.index.prev&&this.changeSlide(this.index.prev)}},{key:"activeNextSlide",value:function(){void 0!==this.index.next&&this.changeSlide(this.index.next)}},{key:"onResize",value:function(){var t=this;setTimeout((function(){t.slidesConfig(),t.changeSlide(t.index.active)}),1e3)}},{key:"addResizeEvent",value:function(){window.addEventListener("resize",this.onResize)}},{key:"bindEvents",value:function(){var t,e;this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this),this.onResize=(t=this.onResize.bind(this),e=200,function(){for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];l&&clearTimeout(l),l=setTimeout((function(){t.apply(void 0,n),l=null}),e)}),this.activePrevSlide=this.activePrevSlide.bind(this),this.activeNextSlide=this.activeNextSlide.bind(this)}},{key:"init",value:function(){this.bindEvents(),this.transition(!0),this.addSlideEvents(),this.slidesConfig(),this.addResizeEvent(),this.changeSlide(0)}}]),t}()))(".Slide",".Slide-Container");u.init(),u.addArrow(".arrow-prev",".arrow-next"),u.addControl()})();