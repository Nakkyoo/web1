function leftTurn (){
    rotationSpeed = 0.0175;
    Container.rotation.y =Container.rotation.y + rotationSpeed

    setTimeout(function(){rotationSpeed = 0;},1480) //1480에서 더 세밀하게 조율 들어가면 좋겠당..
}


function rightTurn (){
    rotationSpeed = -0.0175;
    Container.rotation.y =Container.rotation.y + rotationSpeed

    setTimeout(function(){rotationSpeed = 0;},1480)
}
