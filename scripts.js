const imgs = document.getElementsByTagName('img');
const tableImgs =  document.getElementsByClassName("table");
const tableImgsData = tableImgs[0].children;
const bagley = imgs[tableImgsData.length + 1];
const diego = imgs[tableImgsData.length + 2];
const milltown = imgs[tableImgsData.length + 3];
const beam = imgs[11];
const cloud = imgs[12];
const rainbow = imgs[13];

function showBagleyBeam(){
  //bagley-tag
  bagley.style.opacity = "1";
  bagley.style.transition = "all 0ms";

  //beam
  beam.style.opacity = "1";
  beam.style.transition = "all 0ms";

}
function hideBagleyBeam(){
  //bagley-tag
  bagley.style.opacity = "0";
  bagley.style.transition = "all 0ms";

  //beam
  beam.style.opacity = "0";
  beam.style.transition = "all 0ms";
}

function showDiegoCloud(){
  diego.style.opacity = "1";
  diego.style.transition = "all 0ms";

  cloud.style.opacity = "1";
  cloud.style.transition = "all 0ms";
}
function hideDiegoCloud(){
  diego.style.opacity = "0";
  diego.style.transition = "all 0ms";

  cloud.style.opacity = "0";
  cloud.style.transition = "all 0ms";
}

function showMilltownRainbow(){
  milltown.style.opacity = "1";
  milltown.style.transition = "all 0ms";

  rainbow.style.opacity = "1";
  rainbow.style.transition = "all 0ms";
}
function hideMilltownRainbow(){
  milltown.style.opacity = "0";
  milltown.style.transition = "all 0ms";

  rainbow.style.opacity = "0";
  rainbow.style.transition = "all 0ms";
}
