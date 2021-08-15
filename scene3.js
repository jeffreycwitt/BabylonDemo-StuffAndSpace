const createScene =  () => {
  const scene = new BABYLON.Scene(engine);

  const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 50, new BABYLON.Vector3(0, 0, 0));
  camera.attachControl(canvas, true);

  const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));

const boxes = []
for (let i = 0; i < 10; i++) {
boxes.push(BABYLON.MeshBuilder.CreateBox("box" + i, {size: .5, width: .5, height: .5}));
boxes[i].position.y = (2 + i) - 7

}

const spheres = []
for (let i = 0; i < 10; i++) {
spheres.push(BABYLON.MeshBuilder.CreateSphere("sphere" + i, {diameter: .5}));
spheres[i].position.y = (1.5 + i) - 6
}
const spheres1 = []
for (let i = 0; i < 10; i++) {
spheres1.push(BABYLON.MeshBuilder.CreateSphere("sphere" + i, {diameter: .5}));
spheres1[i].position.y = (1.5 + i) - 6
spheres1[i].position.x = -.5
}
const spheres2 = []
for (let i = 0; i < 10; i++) {
spheres2.push(BABYLON.MeshBuilder.CreateSphere("sphere" + i, {diameter: .5}));
spheres2[i].position.y = (1.5 + i) - 6
spheres2[i].position.x = .5
}
const spheres3 = []
for (let i = 0; i < 10; i++) {
spheres3.push(BABYLON.MeshBuilder.CreateSphere("sphere" + i, {diameter: .5}));
spheres3[i].position.y = (.5 + i) - 6
spheres3[i].position.x = .5
}
const spheres4 = []
for (let i = 0; i < 10; i++) {
spheres4.push(BABYLON.MeshBuilder.CreateSphere("sphere" + i, {diameter: .5}));
spheres4[i].position.y = (.5 + i) - 6
spheres4[i].position.x = -.5
}
const spheres5 = []
for (let i = 0; i < 10; i++) {
spheres5.push(BABYLON.MeshBuilder.CreateSphere("sphere" + i, {diameter: .5}));
spheres5[i].position.y = (1 + i) - 6
spheres5[i].position.x = -.5
}
const spheres6 = []
for (let i = 0; i < 10; i++) {
spheres6.push(BABYLON.MeshBuilder.CreateSphere("sphere" + i, {diameter: .5}));
spheres6[i].position.y = (1 + i) - 6
spheres6[i].position.x = .5
}
const spheres7 = []
for (let i = 0; i < 20; i++) {
spheres7.push(BABYLON.MeshBuilder.CreateSphere("sphere" + i, {diameter: .5}));
spheres7[i].position.y = (1 + .5*i) - 6
spheres7[i].position.x = 0
spheres7[i].position.z = .5
}
const spheres8 = []
for (let i = 0; i < 20; i++) {
spheres8.push(BABYLON.MeshBuilder.CreateSphere("sphere" + i, {diameter: .5}));
spheres8[i].position.y = (1 + .5*i) - 6
spheres8[i].position.x = 0
spheres8[i].position.z = -.5
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
for (let i = 0; i < 10; i++) {
boxes4.push(BABYLON.MeshBuilder.CreateBox("box4" + i, {size: .5, width: .5, height: .5}));
boxes4[i].position.y = (2 + 3*(i)) - 15
boxes4[i].position.x = 5

}

const boxes5 = []
for (let i = 0; i < 10; i++) {
boxes5.push(BABYLON.MeshBuilder.CreateBox("box5" + i, {size: .5, width: .5, height: .5}));
boxes5[i].position.y = (3 + 3*(i)) - 15
boxes5[i].position.x = 6
boxes5[i].position.z = 1

}

const boxes6 = []
for (let i = 0; i < 10; i++) {
boxes6.push(BABYLON.MeshBuilder.CreateBox("box6" + i, {size: .5, width: .5, height: .5}));
boxes6[i].position.y = (4 + 3*(i)) - 15
boxes6[i].position.x = 7
boxes6[i].position.z = -1

}

const boxes7 = []
for (let i = 0; i < 10; i++) {
boxes7.push(BABYLON.MeshBuilder.CreateBox("box4" + i, {size: .5, width: .5, height: .5}));
boxes7[i].position.y = (2 + 0.7*(i)) - 4
boxes7[i].position.x = -6
boxes7[i].position.z = 1
}

const boxes8 = []
for (let i = 0; i < 10; i++) {
boxes8.push(BABYLON.MeshBuilder.CreateBox("box8" + i, {size: .5, width: .5, height: .5}));
boxes8[i].position.y = (3 + 0.7*(i)) - 4
boxes8[i].position.x = -7
boxes8[i].position.z = 1

}

const boxes9 = []
for (let i = 0; i < 10; i++) {
boxes9.push(BABYLON.MeshBuilder.CreateBox("box9" + i, {size: .5, width: .5, height: .5}));
boxes9[i].position.y = (4 + 0.7*(i)) - 4
boxes9[i].position.x = -8
boxes9[i].position.z = -1

}

// var f = new BABYLON.Vector4(0.5,0, 1, 1); // front image = half the whole image along the width 
// var b = new BABYLON.Vector4(0,0, 0.5, 1); // back image = second half along the width

// const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 50, 
// sideOrientation: BABYLON.Mesh.DOUBLESIDE, frontUVs: f, backUVs: b});


  return scene;
}