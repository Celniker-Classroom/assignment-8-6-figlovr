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
    const numMax = parseInt(max);
    if (isNaN(numMax) || numMax < 1) return 0;
    return Math.floor(Math.random() * numMax) + 1;
  }
  const val = getRandomNum(max);
  setText('outRandom', val);
}

function onAdderClick() {
  const x = $('addX').value;
  const y = $('addY').value;
    function myAdder(x, y) {
  return Number(x) + Number(y);
    }
  const sum = myAdder(x, y);
  setText('outAdder', sum);
}

function onDistanceClick() {
  const x1 = $('x1').value, y1 = $('y1').value;
  const x2 = $('x2').value, y2 = $('y2').value;
    function distance(x1, y1, x2, y2) {
      return Math.hypot(x2 - x1, y2 - y1);
    }
  const d = distance(x1, y1, x2, y2);
  setText('outDistance', d);
}

function onQuadraticClick() {
  const a = $('qa').value, b = $('qb').value, c = $('qc').value;
  function quadratic(a, b, c) {
    let disc = b * b - 4 * a * c;
    if (disc > 0) {
        let r1 = (-b + Math.sqrt(disc)) / (2 * a);
        let r2 = (-b - Math.sqrt(disc)) / (2 * a);
        return [r1, r2];
    } else if (disc === 0) {
        return [-b / (2 * a)];
    } else {
        let real = (-b / (2 * a));
        let imag = (Math.sqrt(-disc) / (2 * a));
        return [real + "+" + imag + "i", real + "-" + imag + "i"];
    }
  }
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