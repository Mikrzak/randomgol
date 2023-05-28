var end = false;
var drawLoopInterval;

function setEnd(){
  end = true;
}

function main(){

clearInterval(drawLoopInterval);

var canvas = document.getElementById('myCanvas');
var seedText = document.getElementById('seedText');
var ctx = canvas.getContext('2d');
var seedInput = document.getElementById('seedInput');

console.clear();

canvas.setAttribute('width', window.innerWidth);
canvas.setAttribute('height', window.innerHeight);

var rows, cols, wait = 100, size = parseInt(Math.max(window.innerWidth, window.innerHeight) / 300), seed;
var arr = [];
var narr = [];
var neighbourCount = [];
var type; //neighbourhood type: 0 - Moore (8), 1 - von Neumann (4)

rows = parseInt(window.innerWidth / size);
cols = parseInt(window.innerHeight / size);

for(let i = 0; i < rows; i++){
    arr.push([]);
    narr.push([]);
    neighbourCount.push([]);
    for(let j = 0; j < cols; j++){
        arr[0].push(0);
        narr[0].push(0);
        neighbourCount[0].push(0);
    }

}

function seededRandom (s) { //https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
  var mask = 0xffffffff;
  var m_w  = (123456789 + s) & mask;
  var m_z  = (987654321 - s) & mask;

    m_z = (36969 * (m_z & 65535) + (m_z >>> 16)) & mask;
    m_w = (18000 * (m_w & 65535) + (m_w >>> 16)) & mask;

    var result = ((m_z << 16) + (m_w & 65535)) >>> 0;
    result /= 4294967296;
    return result;
}

function count(row, col, arr){
    var counter = 0;
    
    if(row < rows - 1){
      if(arr[row + 1][col] == 1)
        counter++;
    }
    if(row > 0){
      if(arr[row - 1][col] == 1)
        counter++;
    }
    if(col < cols - 1){
      if(arr[row][col + 1] == 1)
        counter++;
    }
    if(col > 0){
      if(arr[row][col - 1] == 1)
        counter++;
    }
    if(type == 0){
      if(row < rows - 1 && col < cols - 1){
        if(arr[row + 1][col + 1] == 1)
          counter++;
      }
      if(row > 0 && col > 0){
        if(arr[row - 1][col - 1] == 1)
          counter++;
      }
      if(row < rows - 1 && col > 0){
        if(arr[row + 1][col - 1] == 1)
          counter++;
      }
      if(row > 0 && col < cols - 1){
        if(arr[row - 1][col + 1] == 1)
          counter++;
      }
    }
    return counter;
  }

function setup(){
  
  for(let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++){
      if(Math.floor(Math.random() * 2) > 0)        //1
        arr[i][j] = 1;        //1
      else              //1
        arr[i][j] = 0;        //1
    narr[i][j] = arr[i][j];
    }
  }

}

var rules = [[],[]];

if(seedInput.value == "")
  seed = parseInt(seededRandom(Math.random() * 10000) * 10000000000);
else
  seed = parseInt(seedInput.value) % 10000000000;

//9631523180
//1173597190
//-5325325235
//4533361035

console.log("seed: ", seed);
seedText.innerHTML = "Seed: " + seed;

var rules0len = seed % 9;
seed = parseInt(seededRandom(seed) * 10000000000);
var rules1len = seed % 9;

for(var i = 0; i < rules0len; i++){
  if(seed % 2 == 1)
    rules[0].push(i);
  seed = parseInt(seededRandom(seed) * 10000000000);
}

for(var i = 0; i < rules1len; i++){
  if(seed % 2 == 1)
    rules[1].push(i);
  seed = parseInt(seededRandom(seed) * 10000000000);
}

var randomR = seed % 10;
seed = parseInt(seededRandom(seed) * 10000000000);
var randomG = seed % 10;
seed = parseInt(seededRandom(seed) * 10000000000);
var randomB = seed % 10;
seed = parseInt(seededRandom(seed) * 10000000000);
var bgR, bgG, bgB;
//var bgR = parseInt(randomR * 28.33), bgG = parseInt(randomG * 28.33), bgB = parseInt(randomB * 28.33);
var bgR = seed % 255;
seed = parseInt(seededRandom(seed) * 10000000000);
var bgG = seed % 255;
seed = parseInt(seededRandom(seed) * 10000000000);
var bgB = seed % 255;
seed = parseInt(seededRandom(seed) * 10000000000);
var bgColor = `rgb(
  ${bgR},
  ${bgG},
  ${bgB}
  )`;

type = seed % 2;
seed = parseInt(seededRandom(seed) * 10000000000);

console.log("rules for alive cells to stay alive: ", rules[0]);
console.log("rules for dead cells to become alive: ", rules[1]);
console.log("background color: ", bgR, bgG, bgB);
console.log("cell color changing values (R,G,B) for the formula \n{255 / (Math.abs(previousNeighbourCount[i][j] - value))}: ", randomR, randomG, randomB);
console.log("neighbourhood type: 0 - Moore (8), 1 - von Neumann (4): ", type);

function draw(){

    if(end){
      clearInterval(drawLoopInterval);
      end = false;
      arr = null;
      narr = null;
      neighbourCount = null;
      main();
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(let i = 0; i < rows; i++){
      for(let j = 0; j < cols; j++){
        var score = count(i,j,arr);
        neighbourCount[i][j] = score;
        narr[i][j] = 0;
        if(arr[i][j] == 1){
          for(let x = 0; x < rules0len; x++)
            if(score == rules[0][x])
              narr[i][j] = 1;
        }
        else{
          for(let x = 0; x < rules1len; x++)
            if(score == rules[1][x])
              narr[i][j] = 1;
        }
      }
    } 
        
    for(let i = 0; i < rows; i++){
      //console.log((seed % neighbourCount[i][0]))
      for(let j = 0; j < cols; j++){
        if(arr[i][j] == 1)
          ctx.fillStyle = `rgb(
            ${255 / (Math.abs(neighbourCount[i][j] - randomR))},
            ${255 / (Math.abs(neighbourCount[i][j] - randomG))},
            ${255 / (Math.abs(neighbourCount[i][j] - randomB))}
            )`;
        else
          ctx.fillStyle = bgColor;
        ctx.fillRect(i * size, j * size, size, size);
        arr[i][j] = narr[i][j];
      }

    }
  
}

//https://stackoverflow.com/questions/27116221/prevent-zoom-cross-browser

window.addEventListener('keydown', function (e) {
  if ((e.ctrlKey || e.metaKey) && (e.which === 61 || e.which === 107 || e.which === 173 || e.which === 109 || e.which === 187 || e.which === 189)) {
      e.preventDefault();
  }
}, false);

document.addEventListener(
  "wheel",
  function touchHandler(e) {
    if (e.ctrlKey) {
      e.preventDefault();
    }
  }, { passive: false } );

setup();
drawLoopInterval = setInterval(draw, wait);

canvas.addEventListener('click', function (){

  switch(wait){
    case 50:
      wait = 100;
      break;
    case 100:
      wait = 200;
      break;
    case 200:
      wait = 300;
      break;
    default:
      wait = 50;
  }

  clearInterval(drawLoopInterval);
  drawLoopInterval = setInterval(draw, wait);
});

}
