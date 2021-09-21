
function createMesh(geom, imageFile) {
    var texture = THREE.ImageUtils.loadTexture("../assets/textures/general/" + imageFile);
    var mat = new THREE.MeshPhongMaterial();
    mat.map = texture;
 
    var mesh = new THREE.Mesh(geom, mat);
    return mesh;
 }

function mapping(){
    // 원점 기준 북쪽 벽 설치 
    var northWallGeometry = new THREE.BoxGeometry(8324,1000,500)
    var northWallMaterial = new THREE.MeshBasicMaterial({color:0x519299});
    var northWall = new THREE.Mesh(northWallGeometry,northWallMaterial);
    northWall.rotation.x = -0.5 * Math.PI;
    northWall.position.x = 3472;
    northWall.position.z = 6734;
    northWall.position.y = 250;
    scene.add(northWall)
    // 원점 기준 남쪽 벽 설치 
    var southWallGeometry = new THREE.BoxGeometry(8324,1000,500)
    var southWallMaterial = new THREE.MeshBasicMaterial({color:0x519299});
    var southWall = new THREE.Mesh(southWallGeometry,southWallMaterial);
    southWall.rotation.x = -0.5 * Math.PI;
    southWall.position.x = 3472;
    southWall.position.z = -530;
    southWall.position.y = 250;
    scene.add(southWall)
    //원점 기준 서쪽 벽 설치
    var westWallGeometry = new THREE.BoxGeometry(500,6264,500)
    var westWallMaterial = new THREE.MeshBasicMaterial({color:0x519299});
    var westWall = new THREE.Mesh(westWallGeometry,westWallMaterial);
    westWall.rotation.x = -0.5 * Math.PI;
    westWall.position.z = 3102;
    westWall.position.y = 250;
    westWall.position.x = 7384;
    scene.add(westWall)
    //원점 기준 동쪽 벽 설치
    var eastWallGeometry = new THREE.BoxGeometry(500,6264,500)
    var eastWallMaterial = new THREE.MeshBasicMaterial({color:0x519299});
    var eastWall = new THREE.Mesh(eastWallGeometry,eastWallMaterial);
    eastWall.rotation.x = -0.5 * Math.PI;
    eastWall.position.z = 3102;
    eastWall.position.y = 250;
    eastWall.position.x = -440;
    scene.add(eastWall)
    //랩실랩실
    var LAB1Geometry = new THREE.BoxGeometry(6564,1650,500)
    var LAB1Material = new THREE.MeshPhongMaterial();
    LAB1Material.transparent = true;
    LAB1Material.opacity = 0.98;
    var LAB1 = new THREE.Mesh(LAB1Geometry,LAB1Material);
    LAB1.rotation.x = -0.5 * Math.PI;
    LAB1.position.z = 795;
    LAB1.position.y = 250;
    LAB1.position.x = 3472;
    scene.add(LAB1)
    var LAB2 = new THREE.Mesh(LAB1Geometry,LAB1Material);
    LAB2.rotation.x = -0.5 * Math.PI;
    LAB2.position.x = 3472;
    LAB2.position.y = 250;
    LAB2.position.z = 5409;
    scene.add(LAB2)
    //엘베엘베            
    var Elevator1Geometry = new THREE.BoxGeometry(3286,2204,500)
    var Elevator1 = new THREE.Mesh( Elevator1Geometry,LAB1Material);
    Elevator1.rotation.x = -0.5 * Math.PI;
    Elevator1.position.x = 1833;
    Elevator1.position.z = 3102;
    Elevator1.position.y = 250;
    scene.add(Elevator1)
    var Elevator2Geometry = new THREE.BoxGeometry(2516,2204,500)            
    var Elevator2 = new THREE.Mesh( Elevator2Geometry,LAB1Material);
    Elevator2.rotation.x = -0.5 * Math.PI;
    Elevator2.position.x = 5496;
    Elevator2.position.y = 250;
    Elevator2.position.z = 3102;
    scene.add(Elevator2)

    var doorLoaderOBJ1 = new THREE.OBJLoader();
    doorLoaderOBJ1.load('porta.obj',
    function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0XFFFFFF});
            child.material = material;
        });

        door = obj;
        obj.scale.set(24,20,24);
        obj.position.set(-250,247.5,408);
        obj.rotation.set(Math.PI*0.5, 0, Math.PI*1.5); 
        scene.add(obj);
    });

    var doorLoaderOBJ2 = new THREE.OBJLoader();
    doorLoaderOBJ2.load('porta.obj',
    function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0XFFFFFF});
            child.material = material;
        });

        door = obj;
        obj.scale.set(24,20,24);
        obj.position.set(-250,247.5,1125);
        obj.rotation.set(Math.PI*0.5, 0, Math.PI*1.5); 
        scene.add(obj);
    });

    var doorLoaderOBJ3 = new THREE.OBJLoader();
    doorLoaderOBJ3.load('porta.obj',
    function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0XFFFFFF});
            child.material = material;
        });

        door = obj;
        obj.scale.set(24,20,24);
        obj.position.set(-250,247.5,1825);
        obj.rotation.set(Math.PI*0.5, 0, Math.PI*1.5); 
        scene.add(obj);
    });

    var doorLoaderOBJ4 = new THREE.OBJLoader();
    doorLoaderOBJ4.load('porta.obj',
        function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0XFFFFFF});
            child.material = material;
        });

        door = obj;
        obj.scale.set(24,20,24);
        obj.position.set(7200,209,408);
        obj.rotation.set(Math.PI*0.5, Math.PI, Math.PI*1.5); 
        scene.add(obj);
    });

    var doorLoaderOBJ5 = new THREE.OBJLoader();
    doorLoaderOBJ5.load('porta.obj',
        function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0XFFFFFF});
            child.material = material;
        });

        door = obj;
        obj.scale.set(24,20,24);
        obj.position.set(7200,209,1125);
        obj.rotation.set(Math.PI*0.5, Math.PI, Math.PI*1.5); 
        scene.add(obj);
    });

    var doorLoaderOBJ6 = new THREE.OBJLoader();
    doorLoaderOBJ6.load('porta.obj',
        function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0XFFFFFF});
            child.material = material;
        });

        door = obj;
        obj.scale.set(24,20,24);
        obj.position.set(7200,209,1825);
        obj.rotation.set(Math.PI*0.5, Math.PI, Math.PI*1.5); 
        scene.add(obj);
    });
/// 첫번째 복도 완성
    var doorLoaderOBJ1 = new THREE.OBJLoader();
    doorLoaderOBJ1.load('porta.obj',
    function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0XFFFFFF});
            child.material = material;
        });

        door = obj;
        obj.scale.set(24,20,24);
        obj.position.set(-263,247.5,2525);
        obj.rotation.set(Math.PI*0.5, 0, Math.PI*1.5); 
        scene.add(obj);
    });

    var doorLoaderOBJ2 = new THREE.OBJLoader();
    doorLoaderOBJ2.load('porta.obj',
    function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0XFFFFFF});
            child.material = material;
        });

        door = obj;
        obj.scale.set(24,20,24);
        obj.position.set(-263,247.5,3225);
        obj.rotation.set(Math.PI*0.5, 0, Math.PI*1.5); 
        scene.add(obj);
    });

    var doorLoaderOBJ3 = new THREE.OBJLoader();
    doorLoaderOBJ3.load('porta.obj',
    function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0XFFFFFF});
            child.material = material;
        });

        door = obj;
        obj.scale.set(24,20,24);
        obj.position.set(-263,247.5,3925);
        obj.rotation.set(Math.PI*0.5, 0, Math.PI*1.5); 
        scene.add(obj);
    });

    var doorLoaderOBJ4 = new THREE.OBJLoader();
    doorLoaderOBJ4.load('porta.obj',
    function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0XFFFFFF});
            child.material = material;
        });

        door = obj;
        obj.scale.set(24,20,24);
        obj.position.set(-263,247.5,4625);
        obj.rotation.set(Math.PI*0.5, 0, Math.PI*1.5); 
        scene.add(obj);
    });


    var doorLoaderOBJ5 = new THREE.OBJLoader();
    doorLoaderOBJ5.load('porta.obj',
        function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0XFFFFFF});
            child.material = material;
        });

        door = obj;
        obj.scale.set(24,20,24);
        obj.position.set(7200,209,2525);
        obj.rotation.set(Math.PI*0.5, Math.PI, Math.PI*1.5); 
        scene.add(obj);
    });

    var doorLoaderOBJ6 = new THREE.OBJLoader();
    doorLoaderOBJ6.load('porta.obj',
        function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0XFFFFFF});
            child.material = material;
        });

        door = obj;
        obj.scale.set(24,20,24);
        obj.position.set(7200,209,3225);
        obj.rotation.set(Math.PI*0.5, Math.PI, Math.PI*1.5); 
        scene.add(obj);
    });

    var doorLoaderOBJ7 = new THREE.OBJLoader();
    doorLoaderOBJ7.load('porta.obj',
        function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0XFFFFFF});
            child.material = material;
        });

        door = obj;
        obj.scale.set(24,20,24);
        obj.position.set(7200,209,3925);
        obj.rotation.set(Math.PI*0.5, Math.PI, Math.PI*1.5); 
        scene.add(obj);
    });

    var doorLoaderOBJ8 = new THREE.OBJLoader();
    doorLoaderOBJ8.load('porta.obj',
        function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0XFFFFFF});
            child.material = material;
        });

        door = obj;
        obj.scale.set(24,20,24);
        obj.position.set(7200,209,4625);
        obj.rotation.set(Math.PI*0.5, Math.PI, Math.PI*1.5); 
        scene.add(obj);
    });
//// 2번째 복도 완성

    var doorLoaderOBJ1 = new THREE.OBJLoader();
    doorLoaderOBJ1.load('porta.obj',
    function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0XFFFFFF});
            child.material = material;
        });

        door = obj;
        obj.scale.set(24,20,24);
        obj.position.set(-260,247.5,5129);
        obj.rotation.set(Math.PI*0.5, 0, Math.PI*1.5); 
        scene.add(obj);
    });

    var doorLoaderOBJ2 = new THREE.OBJLoader();
    doorLoaderOBJ2.load('porta.obj',
    function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0XFFFFFF});
            child.material = material;
        });

        door = obj;
        obj.scale.set(24,20,24);
        obj.position.set(-260,247.5,5462.2);
        obj.rotation.set(Math.PI*0.5, 0, Math.PI*1.5); 
        scene.add(obj);
    });

    var doorLoaderOBJ3 = new THREE.OBJLoader();
    doorLoaderOBJ3.load('porta.obj',
        function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0XFFFFFF});
            child.material = material;
        });

        door = obj;
        obj.scale.set(24,20,24);
        obj.position.set(7200,209,5129);
        obj.rotation.set(Math.PI*0.5, Math.PI, Math.PI*1.5); 
        scene.add(obj);
    });

    var doorLoaderOBJ4 = new THREE.OBJLoader();
    doorLoaderOBJ4.load('porta.obj',
        function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0XFFFFFF});
            child.material = material;
        });

        door = obj;
        obj.scale.set(24,20,24);
        obj.position.set(7200,209,5462.2);
        obj.rotation.set(Math.PI*0.5, Math.PI, Math.PI*1.5); 
        scene.add(obj);
    });
//////////// ㄴ 3번째 복도 끝
///////////// 랩실복도 ㄱㄱ

    var labDoor1 = new THREE.OBJLoader();
    labDoor1.load('Door.obj',
    function ( obj ){
    obj.children.forEach(function (child) {
        var material = new THREE.MeshPhongMaterial({color: 0X82490b});
        child.material = material;
    });

    door = obj;
    obj.scale.set(0.1,0.1,0.1);
    obj.position.set(911,248,1610);
    obj.rotation.set(Math.PI, Math.PI*1.5, 0); 
    scene.add(obj);
    });

    var labDoor2 = new THREE.OBJLoader();
    labDoor2.load('Door.obj',
        function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0X82490b});
            child.material = material;
        });


    door = obj;
    obj.scale.set(0.1,0.1,0.1);
    obj.position.set(1721,248,1610);
    obj.rotation.set(Math.PI, Math.PI*1.5, 0); 
    scene.add(obj);
    });
    var labDoor3 = new THREE.OBJLoader();
    labDoor3.load('Door.obj',
        function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0X82490b});
            child.material = material;
        });

    door = obj;
    obj.scale.set(0.1,0.1,0.1);
    obj.position.set(2531,248,1610);
    obj.rotation.set(Math.PI, Math.PI*1.5, 0); 
    scene.add(obj);
    });

    var labDoor4 = new THREE.OBJLoader();
    labDoor4.load('Door.obj',
        function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0X82490b});
            child.material = material;
        });

    door = obj;
    obj.scale.set(0.1,0.1,0.1);
    obj.position.set(3241,248,1610);
    obj.rotation.set(Math.PI, Math.PI*1.5, 0); 
    scene.add(obj);
    });


    var labDoor5 = new THREE.OBJLoader();
    labDoor5.load('Door.obj',
        function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0X82490b});
            child.material = material;
        });

    door = obj;
    obj.scale.set(0.1,0.1,0.1);
    obj.position.set(4151,248,1610);
    obj.rotation.set(Math.PI, Math.PI*1.5, 0); 
    scene.add(obj);
    });

    var labDoor6 = new THREE.OBJLoader();
    labDoor6.load('Door.obj',
        function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0X82490b});
            child.material = material;
        });

    door = obj;
    obj.scale.set(0.1,0.1,0.1);
    obj.position.set(4961,248,1610);
    obj.rotation.set(Math.PI, Math.PI*1.5, 0); 
    scene.add(obj);
    });

    var labDoor7 = new THREE.OBJLoader();
    labDoor7.load('Door.obj',
        function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0X82490b});
            child.material = material;
        });

    door = obj;
    obj.scale.set(0.1,0.1,0.1);
    obj.position.set(5771,248,1610);
    obj.rotation.set(Math.PI, Math.PI*1.5, 0); 
    scene.add(obj);
    });

    
    var labDoor8 = new THREE.OBJLoader();
    labDoor8.load('Door.obj',
        function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0X82490b});
            child.material = material;
        });

    door = obj;
    obj.scale.set(0.1,0.1,0.1);
    obj.position.set(6301,248,1610);
    obj.rotation.set(Math.PI, Math.PI*1.5, 0); 
    scene.add(obj);
    });

//// 두번째 랩실 복도 만들자


    var labDoor1 = new THREE.OBJLoader();
    labDoor1.load('Door.obj',
    function ( obj ){
    obj.children.forEach(function (child) {
        var material = new THREE.MeshPhongMaterial({color: 0X82490b});
        child.material = material;
    });

    door = obj;
    obj.scale.set(0.1,0.1,0.1);
    obj.position.set(911,248,4589);
    obj.rotation.set(Math.PI, Math.PI*0.5, 0); 
    scene.add(obj);
    });

    var labDoor2 = new THREE.OBJLoader();
    labDoor2.load('Door.obj',
        function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0X82490b});
            child.material = material;
        });


    door = obj;
    obj.scale.set(0.1,0.1,0.1);
    obj.position.set(1721,248,4558);
    obj.rotation.set(Math.PI, Math.PI*1.5, 0); 
    scene.add(obj);
    });

    var labDoor3 = new THREE.OBJLoader();
    labDoor3.load('Door.obj',
        function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0X82490b});
            child.material = material;
        });

    door = obj;
    obj.scale.set(0.1,0.1,0.1);
    obj.position.set(2531,248,4558);
    obj.rotation.set(Math.PI, Math.PI*1.5, 0); 
    scene.add(obj);
    });

    var labDoor4 = new THREE.OBJLoader();
    labDoor4.load('Door.obj',
        function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0X82490b});
            child.material = material;
        });

    door = obj;
    obj.scale.set(0.1,0.1,0.1);
    obj.position.set(3341,248,4558);
    obj.rotation.set(Math.PI, Math.PI*1.5, 0); 
    scene.add(obj);
    });


    var labDoor5 = new THREE.OBJLoader();
    labDoor5.load('Door.obj',
        function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0X82490b});
            child.material = material;
        });

    door = obj;
    obj.scale.set(0.1,0.1,0.1);
    obj.position.set(4151,248,4558);
    obj.rotation.set(Math.PI, Math.PI*1.5, 0); 
    scene.add(obj);
    });

    var labDoor6 = new THREE.OBJLoader();
    labDoor6.load('Door.obj',
        function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0X82490b});
            child.material = material;
        });

    door = obj;
    obj.scale.set(0.1,0.1,0.1);
    obj.position.set(4961,248,4558);
    obj.rotation.set(Math.PI, Math.PI*1.5, 0); 
    scene.add(obj);
    });

    var labDoor7 = new THREE.OBJLoader();
    labDoor7.load('Door.obj',
        function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0X82490b});
            child.material = material;
        });

    door = obj;
    obj.scale.set(0.1,0.1,0.1);
    obj.position.set(5771,248,4558);
    obj.rotation.set(Math.PI, Math.PI*1.5, 0); 
    scene.add(obj);
    });

    var labDoor8 = new THREE.OBJLoader();
    labDoor8.load('Door.obj',
        function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0X82490b});
            child.material = material;
        });

    door = obj;
    obj.scale.set(0.1,0.1,0.1);
    obj.position.set(6301,248,4558);
    obj.rotation.set(Math.PI, Math.PI*1.5, 0); 
    scene.add(obj);
    });

// 두번째 랩실 복도 완성
// 골인지점 깃발 플래그

    var goalFlag = new THREE.OBJLoader();
    goalFlag.load('USMC flag.obj',
        function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0Xe8301c});
            child.material = material;
        });
    obj.scale.set(1,1,1);
    obj.position.set(3854,0,2492);
    obj.rotation.set(0,Math.PI,0); 
    scene.add(obj);
    });
    //쓰레기통 3 개 정도만 깔자


    var trashContainer = new THREE.OBJLoader();
    trashContainer.load('10896_Trash_can_v3_LOD3.obj',
        function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0X3d56f5});
            child.material = material;
        });
    obj.scale.set(800,800,800);
    obj.position.set(2548,48,1952);
    obj.rotation.set(Math.PI*0.5,Math.PI,Math.PI); 
    scene.add(obj);
    });

    var trashContainer = new THREE.OBJLoader();
    trashContainer.load('10896_Trash_can_v3_LOD3.obj',
        function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0X3d56f5});
            child.material = material;
        });
    obj.scale.set(800,800,800);
    obj.position.set(2708,48,1952);
    obj.rotation.set(Math.PI*0.5,Math.PI,Math.PI); 
    scene.add(obj);
    });

    var trashContainer = new THREE.OBJLoader();
    trashContainer.load('10896_Trash_can_v3_LOD3.obj',
        function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0X3d56f5});
            child.material = material;
        });
    obj.scale.set(800,800,800);
    obj.position.set(2868,48,1952);
    obj.rotation.set(Math.PI*0.5,Math.PI,Math.PI); 
    scene.add(obj);
    });

//

//남자 화장실 만들자.
    var plane = createMesh(new THREE.PlaneGeometry(380,500),"glassdoor.jpg")
    plane.rotation.y = 0;
    plane.position.x = 1920;
    plane.position.y = 250;
    plane.position.z = 4214;
    scene.add(plane);

    var plane = createMesh(new THREE.PlaneGeometry(50,85),"man.png")
    plane.rotation.y = 0;
    plane.position.x = 2200;
    plane.position.y = 430;
    plane.position.z = 4217;
    scene.add(plane);

    // 여자 화장실 만들자
    var plane = createMesh(new THREE.PlaneGeometry(380,500),"glassdoor.jpg")
    plane.rotation.y = Math.PI;
    plane.position.x = 2058;
    plane.position.y = 250;
    plane.position.z = 1990;
    scene.add(plane);

    
    var plane = createMesh(new THREE.PlaneGeometry(50,85),"lady.jpg")
    plane.rotation.y = Math.PI;
    plane.position.x = 1778;
    plane.position.y = 430;
    plane.position.z = 1987;
    scene.add(plane);

}
// 엘레베이터 텍스쳐 깔자

 function elevatorMap(){

    var plane = createMesh(new THREE.PlaneGeometry(360,500),"steelDoor.jpg")
    plane.rotation.y = Math.PI*0.5;
    plane.position.x = 3486;
    plane.position.y = 250;
    plane.position.z = 2543;
    scene.add(plane);

    var plane = createMesh(new THREE.PlaneGeometry(234,500),"elevatorTexture.jpg")
    plane.rotation.y = Math.PI*0.5;
    plane.position.x = 3486;
    plane.position.y = 250;
    plane.position.z = 2889;
    scene.add(plane);

    var plane = createMesh(new THREE.PlaneGeometry(234,500),"elevatorTexture.jpg")
    plane.rotation.y = Math.PI*0.5;
    plane.position.x = 3486;
    plane.position.y = 250;
    plane.position.z = 3407;
    scene.add(plane);
    var plane = createMesh(new THREE.PlaneGeometry(234,500),"elevatorTexture.jpg")
    plane.rotation.y = Math.PI*0.5;
    plane.position.x = 3486;
    plane.position.y = 250;
    plane.position.z = 3925;
    scene.add(plane);

    var plane = createMesh(new THREE.PlaneGeometry(234,500),"elevatorTexture.jpg")
    plane.rotation.y = Math.PI*1.5;
    plane.position.x = 4233;
    plane.position.y = 250;
    plane.position.z = 2259;
    scene.add(plane);

    var plane = createMesh(new THREE.PlaneGeometry(234,500),"elevatorTexture.jpg")
    plane.rotation.y = Math.PI*1.5;
    plane.position.x = 4233;
    plane.position.y = 250;
    plane.position.z = 2777;
    scene.add(plane);
    var plane = createMesh(new THREE.PlaneGeometry(234,500),"elevatorTexture.jpg")
    plane.rotation.y = Math.PI*1.5;
    plane.position.x = 4233;
    plane.position.y = 250;
    plane.position.z = 3295;
    scene.add(plane);

    var plane = createMesh(new THREE.PlaneGeometry(360,500),"steelDoor.jpg")
    plane.rotation.y = Math.PI*1.5;
    plane.position.x = 4233;
    plane.position.y = 250;
    plane.position.z = 3675;
    scene.add(plane);

    //식수대, drinking fountain 설치 //
    
    var drinkingFountain = new THREE.OBJLoader();
    drinkingFountain.load('drinkingFountain2.obj',
        function ( obj ){
        obj.children.forEach(function (child) {
            var material = new THREE.MeshPhongMaterial({color: 0X808080});
            child.material = material;
        });
    obj.scale.set(200,200,200);
    obj.position.set(1015,0,1937);
    obj.rotation.set(0,Math.PI,0); 
    scene.add(obj);
    });

    // //소화기 설치 //
    
    // var fireExtinguisher = new THREE.OBJLoader();
    // fireExtinguisher.load('fire extinguisher.obj',
    //     function ( obj ){
    //     obj.children.forEach(function (child) {
    //         var material = new THREE.MeshPhongMaterial({color: 0xd60000});
    //         child.material = material;
    //     });
    // obj.scale.set(300,300,300);
    // obj.position.set(3520.5,0,1650);
    // obj.rotation.set(0,Math.PI,0); 
    // scene.add(obj);
    // });
}