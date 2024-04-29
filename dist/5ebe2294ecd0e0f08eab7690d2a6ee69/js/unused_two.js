//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import {
    OrbitControls
} from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import {
    GLTFLoader
} from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

let object;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(5, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const model_one = new THREE.TextureLoader().load('');

//Instantiate a loader for the .gltf file
const loader = new GLTFLoader();

//Load the file
loader.load(
    `../../models/ketupat/scene.gltf`,
    function (gltf) {
        //If the file is loaded, add it to the scene
        object = gltf.scene;
        scene.add(object);
    },
    function (xhr) {
        //While it is loading, log the progress
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        console.log("Oh no! I am being compromised :(");
    },
    function (error) {
        //If there is an error, log it
        console.error(error);
    }
);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight, ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);

scene.add(lightHelper, gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
    requestAnimationFrame(animate);

    if (object) object.rotation.x = 0;
    if (object) object.rotation.y -= 0.005;
    if (object) object.rotation.z = 0;

    controls.update();

    renderer.render(scene, camera);
}

animate();