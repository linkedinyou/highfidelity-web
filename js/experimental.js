var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(500, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var geometry = new THREE.CubeGeometry(10, 10, 10, 10, 10, 10);
var material = new THREE.MeshBasicMaterial({
	color : 0x00ff00,
	wireframe: true
});

var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;

function render() {
	requestAnimationFrame(render);
	cube.rotation.x += 0.001;
	cube.rotation.y += 0.005;
	renderer.render(scene, camera);
} 

render(); 