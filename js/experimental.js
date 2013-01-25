var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var geometry = new THREE.CubeGeometry(2, 2, 2, 10, 10, 10);
var material = new THREE.MeshLambertMaterial({
	color : 0x00ff00,
	opacity: 0.5
});

var material2 = new THREE.MeshLambertMaterial({
	color: 0xCC0000,
	opacity: 0.5
});

// create a point light
var pointLight =
  new THREE.PointLight(0xFFFFFF);

// set its position
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

// add to the scene
scene.add(pointLight);

var cube = new THREE.Mesh(geometry, material);
var cube2 = new THREE.Mesh(geometry, material2);
cube.position.set(0.5,0.5,0.5);
cube2.position.set(-0.5,-0.5,-0.5);
scene.add(cube);
scene.add(cube2);
camera.position.z = 5;

function render() {
	requestAnimationFrame(render);
	cube.rotation.x += 0.001;
	cube.rotation.y += 0.005;
	cube2.rotation.x += -0.001;
	cube2.rotation.y += -0.005;
	renderer.render(scene, camera);
} 

render(); 