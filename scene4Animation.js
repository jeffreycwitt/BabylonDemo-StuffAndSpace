function animation1(){

}

var createScene = function () {
     const scene = new BABYLON.Scene(engine);

  const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 25, new BABYLON.Vector3(0, 0, 0));
  camera.attachControl(canvas, true);

  const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));

    // Our built-in 'sphere' shape.
    var newColor = new BABYLON.Color4(1, 0, 0, 0.5);
    var mainBox = BABYLON.MeshBuilder.CreateBox("box", {size: 1, faceColors: [newColor, newColor, newColor, newColor, newColor, newColor] });
    mainBox.position.x = - 7;
    const boxes = []
    for (let i = 0; i < 10; i++) {
    boxes.push(BABYLON.MeshBuilder.CreateSphere("sphere" + i, {diameter: 1}));
    boxes[i].position.x = (1.1 + (1.1*i)) - 7;
    }

    const frameRate = 10;

    const xSlide = new BABYLON.Animation("xSlide", "position.x", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

    const keyFrames = []; 

    keyFrames.push({
        frame: 0,
        value: -7
    });

    keyFrames.push({
        frame: frameRate,
        value: 5
    });
    keyFrames.push({
        frame: 2* frameRate,
        value: -7
    });
    

    

    xSlide.setKeys(keyFrames);

    mainBox.animations.push(xSlide);

    scene.beginAnimation(mainBox, 0, 2 * frameRate, true);


// Our built-in 'sphere' shape.
    var newColor2 = new BABYLON.Color4(1, 0, 0, 0.5);
    var mainBox2 = BABYLON.MeshBuilder.CreateBox("box", {size: 1, faceColors: [newColor, newColor, newColor, newColor, newColor, newColor] });
    mainBox2.position.x = - 7;
    mainBox2.position.y = 2;
    const boxes2 = []
    for (let i = 0; i < 10; i++) {
    boxes2.push(BABYLON.MeshBuilder.CreateBox("box-" + i, {size: .75}));
    boxes2[i].position.x = (1.1 + (1.1*i)) - 7;
    boxes2[i].position.y = 2
    }

    const frameRate2 = 20;

    const xSlide2 = new BABYLON.Animation("xSlide", "position.x", frameRate2/2, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

    const keyFrames2 = []; 

    keyFrames2.push({
        frame: 0,
        value: -7
    });

    keyFrames2.push({
        frame: frameRate2,
        value: 5
    });
    keyFrames2.push({
        frame: 2* frameRate2,
        value: -7
    });
    

    

    xSlide2.setKeys(keyFrames2);

    mainBox2.animations.push(xSlide2);

    scene.beginAnimation(mainBox2, 0, 2 * frameRate2, true);
    


    return scene;
};