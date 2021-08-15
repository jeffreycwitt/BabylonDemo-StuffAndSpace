const createScene =  () => {
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));

const boxes = []
for (let i = 0; i < 10; i++) {
   boxes.push(BABYLON.MeshBuilder.CreateBox("box" + i, {size: .5, width: .5, height: .5}));
   boxes[i].position.y = (2 + i) - 7
   
}



    return scene;
}