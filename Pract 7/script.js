function Triangular(a = 3, b = 4, c = 5) {
  return { a, b, c };
}

const defaultTriangular = Triangular();
const customTriangular1 = Triangular(4, 6, 8);
const customTriangular2 = Triangular(10, 15, 18);

console.log(defaultTriangular);
console.log(customTriangular1);
console.log(customTriangular2);


function PiMultiplier(number) {
  return function() {
    return Math.PI * number;
  };
}

const multiplyPiBy2 = PiMultiplier(2)();
const multiplyPiBy2Over3 = PiMultiplier(2 / 3)();
const dividePiBy2 = PiMultiplier(1 / 2)();

console.log(multiplyPiBy2);
console.log(multiplyPiBy2Over3);
console.log(dividePiBy2);

function Painter(color) {
  return function(obj) {
    const type = obj.type ? obj.type : "No 'type' property occurred!";
    console.log(`${color}, type: ${type}`);
  };
}

const PaintBlue = Painter("blue");
const PaintRed = Painter("red");
const PaintYellow = Painter("yellow");

const object1 = { maxSpeed: 280, type: "Sportcar", color: "magenta" };
const object2 = { type: "Truck", "avg speed": 90, "load capacity": 2400 };
const object3 = { maxSpeed: 180, color: "purple", isCar: true, loadCapacity: 2400 };

PaintBlue(object1);
PaintRed(object1);
PaintYellow(object1);

PaintBlue(object2);
PaintRed(object2);
PaintYellow(object2);

PaintBlue(object3);
PaintRed(object3);
PaintYellow(object3);
