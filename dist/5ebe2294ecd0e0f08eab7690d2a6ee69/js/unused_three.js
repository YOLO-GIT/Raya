//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import {
    OrbitControls
} from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import {
    MeshStandardMaterial
} from "../../../node_modules/three/build/three.module.js";

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

console.log("01010101 00100000 01110011 01101000 01101111 01110101 01101100 01100100 00100000 01100011 01101100 01101001 01100011 01101011 00100000 01110100 01101000 01100101 00100000 01100010 01110101 01110100 01110100 01101111 01101110 00100000 01100001 01110100 00100000 01110100 01101000 01100101 00100000 01010010 01100001 01111001 01100001 00100000 01100001 01110101 01100100 01101001 01101111 00100000 00110001 00110101 00100000 01110100 01101001 01101101 01100101 01110011 00100000 01110100 01101111 00100000 01100111 01100101 00100000 01100001 00100000 01100111 01101001 01100110 01110100 00100000 01100110 01110010 01101111 01101101 00100000 01101101 01100101 00100000 00111010 00101001");