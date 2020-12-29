var panoImage = document.querySelector(".pano-image");
var Img = [new PANOLENS.ImagePanorama("https://cors-anywhere.herokuapp.com/https://github.com/fzl666/Finalhome/blob/main/img/entrance1.jpg?raw=true"),new PANOLENS.ImagePanorama("https://cors-anywhere.herokuapp.com/https://github.com/fzl666/Finalhome/blob/main/img/entrance.jpg?raw=true"),new PANOLENS.ImagePanorama("https://cors-anywhere.herokuapp.com/https://github.com/fzl666/Finalhome/blob/main/img/entrance3.jpg?raw=true"),new PANOLENS.ImagePanorama("https://cors-anywhere.herokuapp.com/https://github.com/fzl666/Finalhome/blob/main/img/dinning1.jpg?raw=true"),new PANOLENS.ImagePanorama("https://cors-anywhere.herokuapp.com/https://github.com/fzl666/Finalhome/blob/main/img/dinning2.jpg?raw=true"),new PANOLENS.ImagePanorama("https://cors-anywhere.herokuapp.com/https://github.com/fzl666/Finalhome/blob/main/img/front5.jpg?raw=true"),new PANOLENS.ImagePanorama("https://cors-anywhere.herokuapp.com/https://github.com/fzl666/Finalhome/blob/main/img/garage.jpg?raw=true"),new PANOLENS.ImagePanorama("https://cors-anywhere.herokuapp.com/https://github.com/fzl666/Finalhome/blob/main/img/1stfloor.jpg?raw=true"),new PANOLENS.ImagePanorama("https://cors-anywhere.herokuapp.com/https://github.com/fzl666/Finalhome/blob/main/img/livingroom.jpg?raw=true"),new PANOLENS.ImagePanorama("https://cors-anywhere.herokuapp.com/https://github.com/fzl666/Finalhome/blob/main/img/livingroom2.jpg?raw=true"),new PANOLENS.ImagePanorama("https://cors-anywhere.herokuapp.com/https://github.com/fzl666/Finalhome/blob/main/img/2ndfloor.jpg?raw=true"),new PANOLENS.ImagePanorama("https://cors-anywhere.herokuapp.com/https://github.com/fzl666/Finalhome/blob/main/img/study.jpg?raw=true"),new PANOLENS.ImagePanorama("https://cors-anywhere.herokuapp.com/https://github.com/fzl666/Finalhome/blob/main/img/bedroom.jpg?raw=true"),new PANOLENS.ImagePanorama("https://cors-anywhere.herokuapp.com/https://github.com/fzl666/Finalhome/blob/main/img/bathroom.jpg?raw=true")]
var viewer = new PANOLENS.Viewer({output: 'console'});
var firstViews = [new THREE.Vector3(4993.24, -95.91, -57.16),new THREE.Vector3(4993.24, 196.69, 226.84),new THREE.Vector3(4993.24, -1851.21, 155.85),new THREE.Vector3(4993.24, -1489.91, 291.18),new THREE.Vector3(4993.24, 87.05, -420000),new THREE.Vector3(4093.24, -728.76, 2167.66),new THREE.Vector3(4093.24, 546.90, 4630.54),new THREE.Vector3(4607.14, -263.59, -1902.15),new THREE.Vector3(4631.77, 505.89, 1786.42),new THREE.Vector3(4943.96, -683.51, -117.58),new THREE.Vector3(4934.71, 55.19, -748.06),new THREE.Vector3(4859.42, 83.32, -1143.80),new THREE.Vector3(4863.52, 1021.00, -515.17),new THREE.Vector3(218.72, 799.49, -4923.53)]
var infospotPositions = [new THREE.Vector3(3877.12, -1788.91, -2583.93),new THREE.Vector3(2420.21, -3808.29, -2151.52),new THREE.Vector3(2900.74, -2625.62, -3107.69),new THREE.Vector3(2108.34, -3034.84, -3311.21),new THREE.Vector3(-4763.47, -1485.28, -165.66),new THREE.Vector3(-3001.20, -2266.50, -3292.79),new THREE.Vector3(2074.2, -2351.61, 3885.02),new THREE.Vector3(-2936.56, -461.82, 4016.62),new THREE.Vector3(3393.62, -611.24, 3609.39),new THREE.Vector3(4013.12, -1408.51, -2610.07),new THREE.Vector3(-4231.53, -571.92, -2584.58),new THREE.Vector3(4046.32, -2923.57, 172.21),new THREE.Vector3(-3589.10, -2469.72, 2436.72),new THREE.Vector3(1799.14, -395.36, 4640.89),new THREE.Vector3(3905.18, 183.94, -3100.23),new THREE.Vector3(-4113.25, 99.24, -2826.81),new THREE.Vector3(4896.95, 98.53, -975.64),new THREE.Vector3(1325.78, 164.78, -4807.35),new THREE.Vector3(181 -2535.27, 92.61, -4302.89),new THREE.Vector3(181 -4902.97, 218.70, 907.50)]
console.log(Img.length-1)
console.log(firstViews.length-1)
console.log(infospotPositions.length-1)

for (i=0; i<14; i++){
    document.querySelector('#btn'+i).addEventListener('click', jumpTo.bind(this,Img[i]))
    function jumpTo(target){
        viewer.setPanorama(target)
    }
}

init();
for (i=1; i < Img.length; i++){
scene(i)
}
function init(){
    viewer.add(Img[0])
    Img[0].addEventListener('enter-fade-start', function(){
        viewer.tweenControlCenter(firstViews[0],0);
        viewer.getCamera().fov = 120;
        viewer.getCamera().updateProjectionMatrix();
    })
}

function scene(x){
    viewer.add(Img[x])
    Img[x].addEventListener('enter', function(){
        viewer.tweenControlCenter(firstViews[x],0);
        viewer.getCamera().fov = 120;
        viewer.getCamera().updateProjectionMatrix();
    })
}
Img[0].link(Img[1],infospotPositions[0])
Img[1].link(Img[0],infospotPositions[1])
Img[1].link(Img[2],infospotPositions[2])
Img[2].link(Img[3],infospotPositions[3])
Img[3].link(Img[4],infospotPositions[4])
Img[4].link(Img[1],infospotPositions[5])
Img[1].link(Img[5],infospotPositions[6])
Img[5].link(Img[6],infospotPositions[7])
Img[6].link(Img[7],infospotPositions[8])
Img[7].link(Img[8],infospotPositions[9])
Img[7].link(Img[6],infospotPositions[10])
Img[8].link(Img[9],infospotPositions[11])
Img[8].link(Img[10],infospotPositions[12])
Img[9].link(Img[10],infospotPositions[13])
Img[10].link(Img[11],infospotPositions[14])
Img[11].link(Img[10],infospotPositions[15])
Img[10].link(Img[12],infospotPositions[16])
Img[12].link(Img[10],infospotPositions[17])
Img[12].link(Img[13],infospotPositions[18])
Img[13].link(Img[12],infospotPositions[19])





