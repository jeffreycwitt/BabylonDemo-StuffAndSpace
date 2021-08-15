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

const boxes2 = []
for (let i = 0; i < 10; i++) {
 boxes2.push(BABYLON.MeshBuilder.CreateBox("box2" + i, {size: .5, width: .5, height: .5}));
 boxes2[i].position.y = (2 + i) - 7
 boxes2[i].position.x = - 1
 
}

const boxes3 = []
for (let i = 0; i < 10; i++) {
 boxes3.push(BABYLON.MeshBuilder.CreateBox("box3" + i, {size: .5, width: .5, height: .5}));
 boxes3[i].position.y = (2 + i) - 7
 boxes3[i].position.x = 1
 
}

const boxes4 = []
for (let i = 0; i < 5; i++) {
 boxes4.push(BABYLON.MeshBuilder.CreateBox("box4" + i, {size: .5, width: .5, height: .5}));
 boxes4[i].position.y = (2 + 3*(i)) - 7
 boxes4[i].position.x = 5
 
}

const boxes5 = []
for (let i = 0; i < 5; i++) {
 boxes5.push(BABYLON.MeshBuilder.CreateBox("box5" + i, {size: .5, width: .5, height: .5}));
 boxes5[i].position.y = (3 + 3*(i)) - 7
 boxes5[i].position.x = 6
 boxes5[i].position.z = 1
 
}

const boxes6 = []
for (let i = 0; i < 5; i++) {
 boxes6.push(BABYLON.MeshBuilder.CreateBox("box6" + i, {size: .5, width: .5, height: .5}));
 boxes6[i].position.y = (4 + 3*(i)) - 7
 boxes6[i].position.x = 7
 boxes6[i].position.z = -1
 
}


  return scene;
}