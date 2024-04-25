//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import {
    OrbitControls
} from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { MeshStandardMaterial } from "../../../node_modules/three/build/three.module.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const model_one = new THREE.TextureLoader().load('Kirbo.png');

const Kirbo = new THREE.Mesh(
    new THREE.SphereGeometry(10, 50, 50),
    new MeshStandardMaterial({
        map: model_one
    })
)

scene.add(Kirbo)

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

    if (Kirbo) Kirbo.rotation.x = 0;
    if (Kirbo) Kirbo.rotation.y -= 0.005;
    if (Kirbo) Kirbo.rotation.z = 0;

    controls.update();

    renderer.render(scene, camera);
}

animate();