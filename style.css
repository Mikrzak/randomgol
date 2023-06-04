var end = false;
var drawLoopInterval;
var wait, origSeed;
var info = document.getElementById("info");
var codeText, bgColorInput, randomRinput, randomGinput, randomBinput, neighbourTypeInput;
var code, randomR, randomG, randomB, bgColor, bgR, bgG, bgB, rows, cols, size;
var arr = [];
var narr = [];
var neighbourCount = [];
var rules = [[],[]];

var colorMode, neighbourType;

//https://stackoverflow.com/questions/246801/how-can-you-encode-a-string-to-base64-in-javascript
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};

function setEnd(){
  end = true;
}

function copySeed(){
  navigator.clipboard.writeText(origSeed);
}

function copyCode(){
  navigator.clipboard.writeText(origCode);
}

function shuffleArr(){

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

function moveInfo(){
  if (info.classList.contains("animateIn")){
    info.classList.add("animateOut");
    info.classList.remove("animateIn");
  }
  else {
    info.classList.remove("animateOut");
    info.classList.add("animateIn");
  } 
}

function limitMaxLength(element, len, doLimit = false, maxv = 9999999999){
  if(!doLimit)
    element.value = parseInt(element.value) % Math.pow(10,len);
  else
  element.value = Math.min(maxv,parseInt(element.value) % Math.pow(10,len));
}

function generateCode(isEntered = false){

  if(!isEntered){
    var RuleStrBin = (alive0.checked * 1).toString(2) + (alive1.checked * 1).toString(2) + (alive2.checked * 1).toString(2) + (alive3.checked * 1).toString(2) + (alive4.checked * 1).toString(2) + (alive5.checked * 1).toString(2) + (alive6.checked * 1).toString(2) + (alive7.checked * 1).toString(2) + (alive8.checked * 1).toString(2) + (dead0.checked * 1).toString(2) + (dead1.checked * 1).toString(2) + (dead2.checked * 1).toString(2) + (dead3.checked * 1).toString(2) + (dead4.checked * 1).toString(2) + (dead5.checked * 1).toString(2) + (dead6.checked * 1).toString(2) + (dead7.checked * 1).toString(2) + (dead8.checked * 1).toString(2);
    var RuleStr64 = Base64.encode(parseInt(RuleStrBin,2).toString(10));
    //var BgStr64 = Base64.encode(parseInt(parseInt(bgColorInput.value.slice(1, 3).toUpperCase(), 16).toString(2) + parseInt(bgColorInput.value.slice(3, 5).toUpperCase(), 16).toString(2) + parseInt(bgColorInput.value.slice(3, 7).toUpperCase(), 16).toString(2), 2).toString());
    var BgStr64 = Base64.encode(parseInt(bgColorInput.value.slice(1, 3).toUpperCase(), 16).toString()) + "@" + Base64.encode(parseInt(bgColorInput.value.slice(3, 5).toUpperCase(), 16).toString()) + "@" + Base64.encode(parseInt(bgColorInput.value.slice(5, 7).toUpperCase(), 16).toString());
    var randomColorStr64 = Base64.encode(randomRinput.value) + "@" + Base64.encode(randomGinput.value) + "@" + Base64.encode(randomBinput.value);
    //var randomColorStr64 = Base64.encode(parseInt(parseInt(randomRinput.value).toString(2) + parseInt(randomGinput.value).toString(2) + parseInt(randomBinput.value).toString(2), 2).toString())
    //console.log(parseInt(randomR.toString(2) + randomG.toString(2) + randomB.toString(2), 2));
    //console.log(RuleStr64 + '@' + BgStr64 + '@' + randomColorStr64);
    code = RuleStr64 + '@' + BgStr64 + '@' + randomColorStr64 + "@" + (colorModeInput.checked * 1).toString(2) + "@" + (neighbourTypeInput.checked * 1).toString(2);
  }
  else
    code = codeInput.value;
  origCode = code;
  codeText.innerText = "generation code: " + code;
  readCode();
}

function readCode(){
  var RuleStrBin = parseInt(Base64.decode(code.slice(0,code.indexOf('@')))).toString(2);
  var s;
  while(RuleStrBin.length <= 17){
    s = RuleStrBin;
    RuleStrBin = '0' + s;
  }
  console.log(RuleStrBin);

  rules = [[],[]];

  if(RuleStrBin.charAt(0) == '1') rules[0].push(0);
  if(RuleStrBin.charAt(1) == '1') rules[0].push(1);
  if(RuleStrBin.charAt(2) == '1') rules[0].push(2);
  if(RuleStrBin.charAt(3) == '1') rules[0].push(3);
  if(RuleStrBin.charAt(4) == '1') rules[0].push(4);
  if(RuleStrBin.charAt(5) == '1') rules[0].push(5);
  if(RuleStrBin.charAt(6) == '1') rules[0].push(6);
  if(RuleStrBin.charAt(7) == '1') rules[0].push(7);
  if(RuleStrBin.charAt(8) == '1') rules[0].push(8);

  if(RuleStrBin.charAt(9 ) == '1') rules[1].push(0);
  if(RuleStrBin.charAt(10) == '1') rules[1].push(1);
  if(RuleStrBin.charAt(11) == '1') rules[1].push(2);
  if(RuleStrBin.charAt(12) == '1') rules[1].push(3);
  if(RuleStrBin.charAt(13) == '1') rules[1].push(4);
  if(RuleStrBin.charAt(14) == '1') rules[1].push(5);
  if(RuleStrBin.charAt(15) == '1') rules[1].push(6);
  if(RuleStrBin.charAt(16) == '1') rules[1].push(7);
  if(RuleStrBin.charAt(17) == '1') rules[1].push(8);

  code = code.slice(code.indexOf('@') + 1, code.length);
  var BgStr64R = code.slice(0,code.indexOf('@'));
  code = code.slice(code.indexOf('@') + 1, code.length);
  var BgStr64G = code.slice(0,code.indexOf('@'));
  code = code.slice(code.indexOf('@') + 1, code.length);
  var BgStr64B = code.slice(0,code.indexOf('@'));
  code = code.slice(code.indexOf('@') + 1, code.length);
  //console.log(BgStr64R,BgStr64G,BgStr64B);

  bgColor = `rgb(
    ${Base64.decode(BgStr64R)},
    ${Base64.decode(BgStr64G)},
    ${Base64.decode(BgStr64B)}
    )`;
  
  var randomR64 = code.slice(0,code.indexOf('@'));
  code = code.slice(code.indexOf('@') + 1, code.length);
  var randomG64 = code.slice(0,code.indexOf('@'));
  code = code.slice(code.indexOf('@') + 1, code.length);
  var randomB64 = code.slice(0,code.indexOf('@'));
  code = code.slice(code.indexOf('@') + 1, code.length);

  randomR = parseInt(Base64.decode(randomR64));
  randomG = parseInt(Base64.decode(randomG64));
  randomB = parseInt(Base64.decode(randomB64));
  
  colorMode = (!!parseInt(code.slice(0,code.indexOf('@'))));
  code = code.slice(code.indexOf('@') + 1, code.length);
  neighbourType = !!parseInt(code);

  if(rules[0].includes(0)) alive0.checked = true;   if(!rules[0].includes(0)) alive0.checked = false;
  if(rules[0].includes(1)) alive1.checked = true;   if(!rules[0].includes(1)) alive1.checked = false;
  if(rules[0].includes(2)) alive2.checked = true;   if(!rules[0].includes(2)) alive2.checked = false;
  if(rules[0].includes(3)) alive3.checked = true;   if(!rules[0].includes(3)) alive3.checked = false;
  if(rules[0].includes(4)) alive4.checked = true;   if(!rules[0].includes(4)) alive4.checked = false;
  if(rules[0].includes(5)) alive5.checked = true;   if(!rules[0].includes(5)) alive5.checked = false;
  if(rules[0].includes(6)) alive6.checked = true;   if(!rules[0].includes(6)) alive6.checked = false;
  if(rules[0].includes(7)) alive7.checked = true;   if(!rules[0].includes(7)) alive7.checked = false;
  if(rules[0].includes(8)) alive8.checked = true;   if(!rules[0].includes(8)) alive8.checked = false;

  if(rules[1].includes(0)) dead0.checked = true; if(!rules[1].includes(0)) dead0.checked = false;
  if(rules[1].includes(1)) dead1.checked = true; if(!rules[1].includes(1)) dead1.checked = false;
  if(rules[1].includes(2)) dead2.checked = true; if(!rules[1].includes(2)) dead2.checked = false;
  if(rules[1].includes(3)) dead3.checked = true; if(!rules[1].includes(3)) dead3.checked = false;
  if(rules[1].includes(4)) dead4.checked = true; if(!rules[1].includes(4)) dead4.checked = false;
  if(rules[1].includes(5)) dead5.checked = true; if(!rules[1].includes(5)) dead5.checked = false;
  if(rules[1].includes(6)) dead6.checked = true; if(!rules[1].includes(6)) dead6.checked = false;
  if(rules[1].includes(7)) dead7.checked = true; if(!rules[1].includes(7)) dead7.checked = false;
  if(rules[1].includes(8)) dead8.checked = true; if(!rules[1].includes(8)) dead8.checked = false;

  var bgR16 = parseInt(Base64.decode(BgStr64R)).toString(16).toUpperCase();
  if(bgR16.length < 2) bgR16 += '0';

  var bgG16 = parseInt(Base64.decode(BgStr64G)).toString(16).toUpperCase();
  if(bgG16.length < 2) bgG16 += '0';

  var bgB16 = parseInt(Base64.decode(BgStr64B)).toString(16).toUpperCase();
  if(bgB16.length < 2) bgB16 += '0';

  bgColorInput.value = "#" + bgR16 + bgG16 + bgB16;

  randomRinput.value = randomR;
  randomGinput.value = randomG;
  randomBinput.value = randomB;

  neighbourTypeInput.checked = neighbourType;
  colorModeInput.checked = colorMode;
}

document.addEventListener('DOMContentLoaded', function() {
  wait = 100;
  main();
}, false);

function main(){

clearInterval(drawLoopInterval);
console.clear();

var canvas = document.getElementById('myCanvas');
var seedText = document.getElementById('seedText');
var infoText = document.getElementById('infoText');
var ctx = canvas.getContext('2d');
var seedInput = document.getElementById('seedInput');

codeText = document.getElementById('code');

bgColorInput = document.getElementById('bgColorInput');
randomRinput = document.getElementById('randomRinput');
randomGinput = document.getElementById('randomGinput');
randomBinput = document.getElementById('randomBinput');

var alive0 = document.getElementById('alive0');
var alive1 = document.getElementById('alive1');
var alive2 = document.getElementById('alive2');
var alive3 = document.getElementById('alive3');
var alive4 = document.getElementById('alive4');
var alive5 = document.getElementById('alive5');
var alive6 = document.getElementById('alive6');
var alive7 = document.getElementById('alive7');
var alive8 = document.getElementById('alive8');

var dead0 = document.getElementById('dead0');
var dead1 = document.getElementById('dead1');
var dead2 = document.getElementById('dead2');
var dead3 = document.getElementById('dead3');
var dead4 = document.getElementById('dead4');
var dead5 = document.getElementById('dead5');
var dead6 = document.getElementById('dead6');
var dead7 = document.getElementById('dead7');
var dead8 = document.getElementById('dead8');

var colorModeInput = document.getElementById('colorMode');
neighbourTypeInput = document.getElementById('neighbourTypeInput');
var codeInput = document.getElementById('codeInput');

canvas.setAttribute('width', window.innerWidth);
canvas.setAttribute('height', window.innerHeight);

size = parseInt(Math.ceil(Math.max(window.innerWidth, window.innerHeight) / 350));

var type; //neighbourhood type: 0 - Moore (8), 1 - von Neumann (4)

//var cellsToCheck = [];

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
    if(!neighbourType){
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

if(seedInput.value == "")
  seed = parseInt(seededRandom(Math.random() * 10000) * 10000000000);
else
  seed = parseInt(seedInput.value);

origSeed = seed;

// 9631523180
// 1173597190
// -5325325235
// 4533361035

//console.log("seed: ", seed);
seedText.innerHTML = "Seed: " + seed;

var rules0len = seed % 9;
seed = parseInt(seededRandom(seed) * 10000000000);
var rules1len = seed % 9;

for(var i = 0; i <= rules0len; i++){
  if(seed % 2 == 1)
    rules[0].push(i);
  seed = parseInt(seededRandom(seed) * 10000000000);
}

for(var i = 0; i <= rules1len; i++){
  if(seed % 2 == 1)
    rules[1].push(i);
  seed = parseInt(seededRandom(seed) * 10000000000);
}

randomR = seed % 10;
seed = parseInt(seededRandom(seed) * 10000000000);
randomG = seed % 10;
seed = parseInt(seededRandom(seed) * 10000000000);
randomB = seed % 10;
seed = parseInt(seededRandom(seed) * 10000000000);
//var bgR = parseInt(randomR * 28.33), bgG = parseInt(randomG * 28.33), bgB = parseInt(randomB * 28.33);
bgR = seed % 255;
seed = parseInt(seededRandom(seed) * 10000000000);
bgG = seed % 255;
seed = parseInt(seededRandom(seed) * 10000000000);
bgB = seed % 255;
seed = parseInt(seededRandom(seed) * 10000000000);
bgColor = `rgb(
  ${bgR},
  ${bgG},
  ${bgB}
  )`;

type = seed % 2;
seed = parseInt(seededRandom(seed) * 10000000000);

// rules = [[2,3],[3]];
// bgR = 255;
// bgG = 255;
// bgB = 255;
// randomR = 0;
// randomG = 0;
// randomB = 0;

// infoText.innerHTML = "seed: " + origSeed + "\n";
// infoText.innerHTML += "rules for alive cells to stay alive: [" + rules[0] + "]\n";
// infoText.textContent += "rules for dead cells to become alive: [" + rules[1] + "]\n";
// infoText.textContent += "background color: [" + bgR + "," + bgG + "," + bgB + "]\n";
// infoText.textContent += "cell color changing values (R,G,B) for the formula \n{255 / (Math.abs(previousNeighbourCount[i][j] - value))}: " + "[" + randomR + "," + randomG + "," + randomB + "]\n";
// infoText.textContent += "neighbourhood type: 0 - Moore (8), 1 - von Neumann (4): " + type;

// console.log("rules for alive cells to stay alive: ", rules[0]);
// console.log("rules for dead cells to become alive: ", rules[1]);
// console.log("background color: ", bgR, bgG, bgB);
// console.log("cell color changing values (R,G,B) for the formula \n{255 / (Math.abs(previousNeighbourCount[i][j] - value))}: ", randomR, randomG, randomB);
// console.log("neighbourhood type: 0 - Moore (8), 1 - von Neumann (4): ", type);

if(rules[0].includes(0)) alive0.checked = true;
if(rules[0].includes(1)) alive1.checked = true;
if(rules[0].includes(2)) alive2.checked = true;
if(rules[0].includes(3)) alive3.checked = true;
if(rules[0].includes(4)) alive4.checked = true;
if(rules[0].includes(5)) alive5.checked = true;
if(rules[0].includes(6)) alive6.checked = true;
if(rules[0].includes(7)) alive7.checked = true;
if(rules[0].includes(8)) alive8.checked = true;

if(rules[1].includes(0)) dead0.checked = true;
if(rules[1].includes(1)) dead1.checked = true;
if(rules[1].includes(2)) dead2.checked = true;
if(rules[1].includes(3)) dead3.checked = true;
if(rules[1].includes(4)) dead4.checked = true;
if(rules[1].includes(5)) dead5.checked = true;
if(rules[1].includes(6)) dead6.checked = true;
if(rules[1].includes(7)) dead7.checked = true;
if(rules[1].includes(8)) dead8.checked = true;

var bgR16 = bgR.toString(16).toUpperCase();
if(bgR16.length < 2) bgR16 += '0';

var bgG16 = bgG.toString(16).toUpperCase();
if(bgG16.length < 2) bgG16 += '0';

var bgB16 = bgB.toString(16).toUpperCase();
if(bgB16.length < 2) bgB16 += '0';

bgColorInput.value = "#" + bgR16 + bgG16 + bgB16;

randomRinput.value = randomR;
randomGinput.value = randomG;
randomBinput.value = randomB;

neighbourTypeInput.checked = !!type;

generateCode();

function clickFunction (){
    if(wait == 50){
      wait = 100;
      clearInterval(drawLoopInterval);
      drawLoopInterval = setInterval(draw, wait);
      return;
    }
    if(wait == 100){
      wait = 200;
      clearInterval(drawLoopInterval);
      drawLoopInterval = setInterval(draw, wait);
      return;
    }
    if(wait == 200){
      wait = 300;
      clearInterval(drawLoopInterval);
      drawLoopInterval = setInterval(draw, wait);
      return;
    }
    if(wait == 300){
      wait = 50;
      clearInterval(drawLoopInterval);
      drawLoopInterval = setInterval(draw, wait);
      return;
    }
}

function draw(){

    if(end){
      clearInterval(drawLoopInterval);
      end = false;
      arr = null;
      narr = null;
      neighbourCount = null;
      canvas.removeEventListener('click',clickFunction);
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
        if(arr[i][j] == 1){
          if(!colorMode)
          ctx.fillStyle = `rgb(
            ${255 / (Math.abs(neighbourCount[i][j] - randomR))},
            ${255 / (Math.abs(neighbourCount[i][j] - randomG))},
            ${255 / (Math.abs(neighbourCount[i][j] - randomB))}
            )`;
          else if(colorMode)
            ctx.fillStyle = `rgb(0,0,0)`;
        }
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

canvas.addEventListener('click', clickFunction);

}
