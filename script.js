'use strict'

init();
render();
animate();

//create scene
function init(){

   var scene = new THREE.Scene();
   var camera = new THREE.PerspectiveCamera(75, window.innerWidth / 
         Window.innerHeight, 0.1, 1000);
   
   camera.position.z = 5;
   
}

//create renderer
function render(){

   var renderer = new THREE.WebGLRenderer();

}

//animate object
function animate(){

}


