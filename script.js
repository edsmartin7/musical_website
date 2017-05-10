'use strict'

//create scene
//function init(){

   //values for PerspectiveCamera params
   var view_angle = 75;
   var aspect = window.innerWidth/window.innerHeight;
   var near = 0.1;
   var far = 1000;

   var scene = new THREE.Scene();
   var camera = new THREE.PerspectiveCamera(view_angle,
                                            aspect,
                                            near, 
                                            far);
  
   scene.add(camera); //
 
   //camera.position.z = 5;
   
//}

//create renderer
//function render(){

   var renderer = new THREE.WebGLRenderer();  
   renderer.setSize(window.innerWidth / Window.innerHeight);
   
   document.body.appendChild(renderer.domElement);
   var geometry = new THREE.BoxGeometry(1, 1, 1);
   var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
   var cube = new THREE.Mesh(geometry, material);
   scene.add(cube);
   
   camera.position.z = 5;//

   var render = function(){
      requestAnimationFrame(render);
      cube.rotation.x += 0.1;
      cube.rotation.y += 0.1;
      renderer.render(scene,camera);
   };
   render();


//}

//animate object
//function animate(){

//}


