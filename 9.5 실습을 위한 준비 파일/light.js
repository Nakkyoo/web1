function setLight(){
    // 직선광 하나 정도
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(6000, 4000, 6000);
    scene.add(directionalLight);

    var littleParticle = new THREE.Object3D();
    littleParticle.position.x = 6000;
    littleParticle.position.y = 0;
    littleParticle.position.z = 6000;

    scene.add(littleParticle);
    
    var directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight2.position.set(0, 4000, 0);
    directionalLight2.target = littleParticle;
    scene.add(directionalLight2);

    // add subtle ambient lighting
    var ambientLight = new THREE.AmbientLight(0x383838);
    scene.add(ambientLight);
};