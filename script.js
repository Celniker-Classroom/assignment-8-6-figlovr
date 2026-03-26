// ----- Functions to implement -----

// 1) myFunc(): persistent counter

// 2) getRandomNum(max): 1..max int or 0 if invalid

// 3) myAdder(x, y): numeric sum

// 4) distance(x1, y1, x2, y2): Euclidean distance

// 5) quadratic(a, b, c): roots of ax^2 + bx + c = 0


// ----- Helpers -----
function $(id) { return document.getElementById(id); }
function setText(id, value) { $(id).textContent = String(value); }

// ----- Click Handlers (wire UI -> functions -> DOM) -----

let count = 0;

function myFunc() {
    count++;
    return count;
}


function onMyFuncClick() {
  const val = myFunc();
  setText('outMyFunc', val);
}

function onRandomClick() {
  const max = $('maxRand').value;
  function getRandomNum(max) {
    return Math.floor(Math.random() * (max - 0 + 1)) + 0;
  }
  const val = getRandomNum(max);
  setText('outRandom', val);
}

function onAdderClick() {
  const x = $('addX').value;
  const y = $('addY').value;
  const sum = myAdder(x, y);
  setText('outAdder', sum);
}

function onDistanceClick() {
  const x1 = $('x1').value, y1 = $('y1').value;
  const x2 = $('x2').value, y2 = $('y2').value;
  const d = distance(x1, y1, x2, y2);
  setText('outDistance', d);
}

function onQuadraticClick() {
  const a = $('qa').value, b = $('qb').value, c = $('qc').value;
  const roots = quadratic(a, b, c);
  setText('outQuadratic', Array.isArray(roots) ? roots.join(', ') : roots);
}


//code
let counter = 0;

const numFunc = document.getElementById("btnMyFunc");
const numRandom = document.getElementById("maxRand");
const numAdder_x = document.getElementById("addX");
const numAdder_y = document.getElementById("addY");
const numDistance_x1 = document.getElementById("x1");
const numDistance_x2 = document.getElementById("x2");
const numDistance_y1 = document.getElementById("y1");
const numDistance_y2 = document.getElementById("y2");
const numQuadratic_a = document.getElementById("qa");
const numQuadratic_b = document.getElementById("qb");
const numQuadratic_c = document.getElementById("qc");