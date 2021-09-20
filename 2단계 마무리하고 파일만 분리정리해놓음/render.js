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
