import * as THREE from 'three'

//1 .create a scene
const scene = new THREE.Scene()
scene.background = new THREE.Color('black')

//2. add the camera
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
camera.position.z = 5

//3. create and add a cube object
const geometry = new THREE.IcosahedronGeometry()
const material = new THREE.MeshLambertMaterial({color:'white', emissive : 'yellow'})

const cube = new THREE.Mesh(geometry,material)
scene.add(cube)

//4. add lighting
const light = new THREE.DirectionalLight(0x9CDBA6, 10)
light.position.set(1,1,1)
scene.add(light)

//5. set up the renderer
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

//6. animate the scene
function animate(){
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    cube.rotation.z += 0.01
    renderer.render(scene,camera)
}

animate()