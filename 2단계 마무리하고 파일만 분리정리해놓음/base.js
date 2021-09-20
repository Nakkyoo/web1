// once everything is loaded, we run our Three.js stuff.
function init() {

    // create a scene, that will hold all our elements such as objects, cameras and lights.
    var scene = new THREE.Scene();

    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100000);
    camera.position.x = 12000;
    camera.position.y = 6000;
    camera.position.z = 18000;

    // create a render and set the size
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // create the ground plane
    var planeGeometry = new THREE.PlaneGeometry(10000, 17000);
    var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);


    // rotate and position the plane
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 0;
    plane.position.y = 0;
    plane.position.z = 0;

    // add the plane to the scene
    scene.add(plane);

    // 이제부터 쭉 맵핑
    var northWallGeometry = new THREE.BoxGeometry(10000,1000,1000)
    var northWallMaterial = new THREE.MeshBasicMaterial({color:0xff0110});
    var northWall = new THREE.Mesh(northWallGeometry,northWallMaterial);
    northWall.rotation.x = -0.5 * Math.PI;
    northWall.position.z = 9000;
    northWall.position.y = 500;

    scene.add(northWall)

    var southWallGeometry = new THREE.BoxGeometry(10000,1000,1000)
    var southWallMaterial = new THREE.MeshBasicMaterial({color:0x960ff});
    var southWall = new THREE.Mesh(southWallGeometry,southWallMaterial);
    southWall.rotation.x = -0.5 * Math.PI;
    southWall.position.z = -9000;
    southWall.position.y = 500;

    scene.add(southWall)

    var westWallGeometry = new THREE.BoxGeometry(1000,19000,1000)
    var westWallMaterial = new THREE.MeshBasicMaterial({color:0x00000});
    var westWall = new THREE.Mesh(westWallGeometry,westWallMaterial);
    westWall.rotation.x = -0.5 * Math.PI;
    westWall.position.z = 0;
    westWall.position.y = 500;
    westWall.position.x = 5500;

    scene.add(westWall)

    var eastWallGeometry = new THREE.BoxGeometry(1000,19000,1000)
    var eastWallMaterial = new THREE.MeshBasicMaterial({color:0x66ff00});
    var eastWall = new THREE.Mesh(eastWallGeometry,eastWallMaterial);
    eastWall.rotation.x = -0.5 * Math.PI;
    eastWall.position.z = 0;
    eastWall.position.y = 500;
    eastWall.position.x = -5500;

    scene.add(eastWall)


    var LAB1Geometry = new THREE.BoxGeometry(6000,4000,1000)
    var LAB1Material = new THREE.MeshLambertMaterial();
    var LAB1 = new THREE.Mesh(LAB1Geometry,LAB1Material);
    LAB1.rotation.x = -0.5 * Math.PI;
    LAB1.position.z = 6500;
    LAB1.position.y = 500;

    scene.add(LAB1)

    var LAB2 = new THREE.Mesh(LAB1Geometry,LAB1Material);
    LAB2.rotation.x = -0.5 * Math.PI;
    LAB2.position.z = -6500;
    LAB2.position.y = 500;
    scene.add(LAB2)

    var Elevator1Geometry = new THREE.BoxGeometry(1500,5000,1000)
    var Elevator1 = new THREE.Mesh( Elevator1Geometry,LAB1Material);
    Elevator1.rotation.x = -0.5 * Math.PI;
    Elevator1.position.x = -2200;
    Elevator1.position.y = 500;
    scene.add(Elevator1)

    var Elevator2 = new THREE.Mesh( Elevator1Geometry,LAB1Material);
    Elevator2.rotation.x = -0.5 * Math.PI;
    Elevator2.position.x = 2200;
    Elevator2.position.y = 500;
    scene.add(Elevator2)

    // 직선광 하나 깔아주고 
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(-20, 40, 60);
    scene.add(directionalLight);


    // add subtle ambient lighting
    var ambientLight = new THREE.AmbientLight(0x292929);
    scene.add(ambientLight);
    // add the output of the renderer to the html element
    document.getElementById("WebGL-output").appendChild(renderer.domElement);

    // call the render function

    var controls = new function () {
        this.perspective = "Perspective";
        this.switchCamera = function () {
            if (camera instanceof THREE.PerspectiveCamera) {
                camera = new THREE.OrthographicCamera(window.innerWidth / -16, window.innerWidth / 16, window.innerHeight / 16, window.innerHeight / -16, -200, 50000);
                camera.position.x = 120;
                camera.position.y = 60;
                camera.position.z = 180;
                camera.lookAt(rcCar);
                orbit = new THREE.OrbitControls(camera, renderer.domElement);
                this.perspective = "Orthographic";
            } else {
                camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100000);
                camera.position.x = 120;
                camera.position.y = 60;
                camera.position.z = 180;

                camera.lookAt(rcCar);
                this.perspective = "Perspective";
                orbit = new THREE.OrbitControls(camera, renderer.domElement);
            }
        };
    };

    var gui = new dat.GUI();
    gui.add(controls, 'switchCamera');
    gui.add(controls, 'perspective').listen();

    camera.lookAt(scene.position);
    orbit = new THREE.OrbitControls(camera, renderer.domElement);

    Container = new THREE.Object3D();
    rcCar = Car();
    rcCar.rotation.x = -0.5 * Math.PI;

    Container.add(rcCar);
    scene.add(Container);

    render();

     function render() {
        
         orbit.update();
         if (positionX){
             console.log('1')
             if(positionX > Container.position.x){
                 Container.position.x += velocityX;
             }
             else if(positionX < Container.position.x){
                 Container.position.x -= velocityX;
             }
         }
             if (positionZ){
             console.log('0')
             if(positionZ > Container.position.z){
                 Container.position.z += velocityZ;
             }
             else if(positionZ < Container.position.z){
                 Container.position.z -= velocityZ;
             }
         }
         if(rotationSpeed){
         Container.rotation.y += rotationSpeed;
         }
         requestAnimationFrame(render);
         renderer.render(scene, camera);
        
     }
}
