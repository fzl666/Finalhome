var panoImage = document.querySelector("#pano");
var Img = [new PANOLENS.ImagePanorama("img/entrance1.jpg"),new PANOLENS.ImagePanorama("img/entrance.jpg"),new PANOLENS.ImagePanorama("img/entrance3.jpg"),new PANOLENS.ImagePanorama("img/dinning1.jpg"),new PANOLENS.ImagePanorama("img/dinning2.jpg"),new PANOLENS.ImagePanorama("img/front5.jpg"),new PANOLENS.ImagePanorama("img/garage.jpg"),new PANOLENS.ImagePanorama("img/1stfloor.jpg"),new PANOLENS.ImagePanorama("img/livingroom.jpg"),new PANOLENS.ImagePanorama("img/livingroom2.jpg"),new PANOLENS.ImagePanorama("img/2ndfloor.jpg"),new PANOLENS.ImagePanorama("img/study.jpg"),new PANOLENS.ImagePanorama("img/bedroom.jpg"),new PANOLENS.ImagePanorama("img/bathroom.jpg")]
var viewer = new PANOLENS.Viewer({ output: 'console' });
var firstViews = [new THREE.Vector3(4993.24, -95.91, -57.16),new THREE.Vector3(4993.24, 196.69, 226.84),new THREE.Vector3(4993.24, -1851.21, 155.85),new THREE.Vector3(4993.24, -1489.91, 291.18),new THREE.Vector3(4993.24, 87.05, -30000),new THREE.Vector3(4093.24, -728.76, 2167.66),new THREE.Vector3(4093.24, 546.90, 4630.54),new THREE.Vector3(4607.14, -263.59, -1902.15),new THREE.Vector3(4631.77, 505.89, 1786.42),new THREE.Vector3(4943.96, -683.51, -117.58),new THREE.Vector3(4934.71, 55.19, -748.06),new THREE.Vector3(4859.42, 83.32, -1143.80),new THREE.Vector3(4863.52, 1021.00, -515.17),new THREE.Vector3(218.72, 799.49, -4923.53)]
var infospotPositions = [new THREE.Vector3(3877.12, -1788.91, -2583.93),new THREE.Vector3(2420.21, -3808.29, -2151.52),new THREE.Vector3(2900.74, -2625.62, -3107.69),new THREE.Vector3(2108.34, -3034.84, -3311.21),new THREE.Vector3(-4763.47, -1485.28, -165.66),new THREE.Vector3(-3001.20, -2266.50, -3292.79),new THREE.Vector3(2074.2, -2351.61, 3885.02),new THREE.Vector3(-2936.56, -461.82, 4016.62),new THREE.Vector3(3393.62, -611.24, 3609.39),new THREE.Vector3(4013.12, -1408.51, -2610.07),new THREE.Vector3(-4231.53, -571.92, -2584.58),new THREE.Vector3(4046.32, -2923.57, 172.21),new THREE.Vector3(-3589.10, -2469.72, 2436.72),new THREE.Vector3(1799.14, -395.36, 4640.89),new THREE.Vector3(3905.18, 183.94, -3100.23),new THREE.Vector3(-4113.25, 99.24, -2826.81),new THREE.Vector3(4896.95, 98.53, -975.64),new THREE.Vector3(1325.78, 164.78, -4807.35),new THREE.Vector3(181 -2535.27, 92.61, -4302.89),new THREE.Vector3(181 -4902.97, 218.70, 907.50)]
var infocard = document.getElementById("infocard")
init()
var jubaopenZ = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info);
jubaopenZ.position.set(4702.05, -1641.75, -335.35)
Img[2].add(jubaopenZ)

jubaopenZ.addEventListener("click", function(){
  var zoom = document.getElementById("zoom")
  zoom.setAttribute("src","../obj/jubaopen.glb") 
   zoom.style.display = "inline"
    zoom.ondblclick = function(){
        zoom.style.display = "none" 
    }
  });
//
var denglongZ = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info)
denglongZ.position.set(2906.34, 1729.96, 3669.37)
Img[2].add(denglongZ)

denglongZ.addEventListener("click", function(){
  var zoom = document.getElementById("zoom")
  zoom.setAttribute("src","../obj/DIAODENG.glb") 
   zoom.style.display = "inline"
    zoom.ondblclick = function(){
        zoom.style.display = "none" 
    }
  });
//
var huapingaZ = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info)
huapingaZ.position.set(-4637.22, -1129.53, -1481.60)
Img[2].add(huapingaZ)

huapingaZ.addEventListener("click", function(){
  var zoom = document.getElementById("zoom")
  zoom.setAttribute("src","../obj/vases.glb") 
   zoom.style.display = "inline"
    zoom.ondblclick = function(){
        zoom.style.display = "none" 
    }
  });
//
var huapingbZ = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info)
huapingbZ.position.set(4535.51, -965.67, -1844.37)
Img[2].add(huapingbZ)

huapingbZ.addEventListener("click", function(){
  var zoom = document.getElementById("zoom")
  zoom.setAttribute("src","../obj/vases2.glb") 
   zoom.style.display = "inline"
    zoom.ondblclick = function(){
        zoom.style.display = "none" 
    }
  });
//
var girl = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info)
girl.position.set(2776.63, -1123.91, -3996.24)
Img[1].add(girl)

girl.addEventListener("click", function(){
  var zoom = document.getElementById("zoom")
  zoom.setAttribute("src","../obj/girl.glb") 
   zoom.style.display = "inline"
    zoom.ondblclick = function(){
        zoom.style.display = "none" 
    }
  });
//
var boy = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info)
boy.position.set(4430.98, -1316.40, 1887.70)
Img[1].add(boy)

boy.addEventListener("click", function(){
  var zoom = document.getElementById("zoom")
  zoom.setAttribute("src","../obj/boy.glb") 
   zoom.style.display = "inline"
    zoom.ondblclick = function(){
        zoom.style.display = "none" 
    }
  });
  //
var fridge = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info)
fridge.position.set(3131.65, -1453.58, -3607.72)
Img[3].add(fridge)
  
fridge.addEventListener("click", function(){
    var zoom = document.getElementById("zoom")
    zoom.setAttribute("src","../obj/fridge.glb") 
     zoom.style.display = "inline"
      zoom.ondblclick = function(){
          zoom.style.display = "none" 
      }
    });
    //
var acl= new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info)
acl.position.set(4279.77, -1588.74, -2025.10)
Img[5].add(acl)
  
acl.addEventListener("click", function(){
    var zoom = document.getElementById("zoom")
    zoom.setAttribute("src","../obj/acl.glb") 
     zoom.style.display = "inline"
      zoom.ondblclick = function(){
          zoom.style.display = "none" 
      } 
    });
//
var car= new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info)
car.position.set(4444.81, -2256.06, 317.21)
Img[6].add(car)
  
car.addEventListener("click", function(){
    var zoom = document.getElementById("zoom")
    zoom.setAttribute("src","../obj/car.glb") 
     zoom.style.display = "inline"
      zoom.ondblclick = function(){
          zoom.style.display = "none" 
      } 
    });
//
var xiyiji= new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info)
xiyiji.position.set(-352.05, -3204.88, 3816.97)
Img[6].add(xiyiji)
  
xiyiji.addEventListener("click", function(){
    var zoom = document.getElementById("zoom")
    zoom.setAttribute("src","../obj/xiyiji.glb") 
     zoom.style.display = "inline"
      zoom.ondblclick = function(){
          zoom.style.display = "none" 
      } 
    });
//
var tv= new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info)
tv.position.set(4832.35, -1195.65, -409.90)
Img[9].add(tv)
  
tv.addEventListener("click", function(){
    var zoom = document.getElementById("zoom")
    zoom.setAttribute("src","../obj/tv.glb") 
     zoom.style.display = "inline"
      zoom.ondblclick = function(){
          zoom.style.display = "none" 
      } 
    });
//
var acl2= new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info)
acl2.position.set(137.49, 84.15, 4989.49)
Img[8].add(acl2)
  
acl2.addEventListener("click", function(){
    var zoom = document.getElementById("zoom")
    zoom.setAttribute("src","../obj/acl.glb") 
     zoom.style.display = "inline"
      zoom.ondblclick = function(){
          zoom.style.display = "none" 
      } 
    });
//
var laptop= new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info)
laptop.position.set(4842.82, -802.99, -922.70)
Img[11].add(laptop)
  
laptop.addEventListener("click", function(){
    var zoom = document.getElementById("zoom")
    zoom.setAttribute("src","../obj/laptop.glb") 
     zoom.style.display = "inline"
      zoom.ondblclick = function(){
          zoom.style.display = "none" 
      } 
    });
//

var ac= new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info)
ac.position.set(3242.48, 2687.54, -2681.31)
Img[11].add(ac)
  
ac.addEventListener("click", function(){
    var zoom = document.getElementById("zoom")
    zoom.setAttribute("src","../obj/AC.glb") 
     zoom.style.display = "inline"
      zoom.ondblclick = function(){
          zoom.style.display = "none" 
      } 
    });
//
var nightstand= new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info)
nightstand.position.set(4398.02, -1348.74, 1948.16)
Img[12].add(nightstand)
  
nightstand.addEventListener("click", function(){
    var zoom = document.getElementById("zoom")
    zoom.setAttribute("src","../obj/nightstand.glb") 
     zoom.style.display = "inline"
      zoom.ondblclick = function(){
          zoom.style.display = "none" 
      } 
    });
//
var beauty= new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info)
beauty.position.set(-4022.79, 684.97, -2881.48)
Img[13].add(beauty)
  
beauty.addEventListener("click", function(){
    var zoom = document.getElementById("zoom")
    zoom.setAttribute("src","../obj/beauty.glb") 
     zoom.style.display = "inline"
      zoom.ondblclick = function(){
          zoom.style.display = "none" 
      } 
    });

//shortrcuts
function myFunction() {
    var x = document.getElementById("shortcuts");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

for (i=0; i<14; i++){
    document.querySelector('#btn'+i).addEventListener('click', jumpTo.bind(this,Img[i]))
    function jumpTo(target){
        viewer.setPanorama(target)
    }
 
}
//walktrough;
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
  var zoom = document.getElementById("zoom")
  zoom.setAttribute("src","../obj/about.glb") 
   zoom.style.display = "inline"
    zoom.ondblclick = function(){
        zoom.style.display = "none" 
    }
    
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





