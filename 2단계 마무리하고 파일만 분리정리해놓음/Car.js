function Car () {
    var Car = new THREE.Group();

    // 뒷 바퀴
    var backWheel = new THREE.Mesh( 
        new THREE.BoxGeometry(12,33,12), new THREE.MeshLambertMaterial({color:0x333333}))

    backWheel.position.z = 6;
    backWheel.position.x = -18;
    Car.add(backWheel);

    // 앞 바퀴
    var frontWheel = new THREE.Mesh(
        new THREE.BoxGeometry(12,33,12), new THREE.MeshLambertMaterial({color:0x333333}))

    frontWheel.position.z = 6;
    frontWheel.position.x = 18;
    Car.add(frontWheel);

    // mainbody
    var mainbody = new THREE.Mesh(
        new THREE.BoxGeometry(60,30,15),
        new THREE.MeshLambertMaterial({color:0xa52523})
    )
    mainbody.position.z = 12;
    Car.add(mainbody)

    // cabin 꼭 굳이 THREE.Object3D로 만들어야 하는 이유가?
    var cabinMaterial = [
    new THREE.MeshLambertMaterial({ color: 0xffffff }),
    new THREE.MeshLambertMaterial({ color: 0xffffff }),
    new THREE.MeshLambertMaterial({ color: 0xffffff }),
    new THREE.MeshLambertMaterial({ color: 0xffffff }),
    new THREE.MeshLambertMaterial({ color: 0xffffff }), // top
    new THREE.MeshLambertMaterial({ color: 0xffffff }) // bottom
    ]

    const cabin = new THREE.SceneUtils.createMultiMaterialObject(new THREE.BoxGeometry(33, 24, 12),cabinMaterial );

    cabin.position.x = -6;
    cabin.position.z = 25.5;
    Car.add(cabin);

    // 이거 아래거 지울지말지 고민중.. 우회전 함수 구축한다고 하면 필요함. 2D Collision구현해야해서
    var centerVerticesMaterial = new THREE.SpriteMaterial({color:0xff0000});
    var centerVertices = new THREE.Sprite(centerVerticesMaterial);
    centerVertices.position.set(0,0,0);
    Car.add(centerVertices);

    var firstVerticesMaterial = new THREE.SpriteMaterial({color:0x0096ff}); //파란색!
    var firstVertices = new THREE.Sprite(firstVerticesMaterial);
    firstVertices.position.set(120,120,0);
    Car.add(firstVertices);

    var secondVerticesMaterial = new THREE.SpriteMaterial({color:0x66ff00}); //녹색!
    var secondVertices = new THREE.Sprite(secondVerticesMaterial);
    secondVertices.position.set(120,-120,0);
    Car.add(secondVertices);

    var thirdVerticesMaterial = new THREE.SpriteMaterial({color:0xff007f}); // 분홍색!
    var thirdVertices = new THREE.Sprite(thirdVerticesMaterial);
    thirdVertices.position.set(-120,120,0);
    Car.add(thirdVertices);

    var fourthVerticesMaterial = new THREE.SpriteMaterial({color:0xffaa1d}); // 노란색!
    var fourthVertices = new THREE.Sprite(fourthVerticesMaterial);
    fourthVertices.position.set(-120,-120,0);
    Car.add(fourthVertices);


    return Car;    
}
