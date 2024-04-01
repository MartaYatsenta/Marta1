class Square {
  constructor(a) {
    this._a = a;
  }

  static help() {
    console.log("Квадрат – це чотирикутник із чотирма рівними сторонами.");
  }

  get a() {
    return this._a;
  }

  set a(value) {
    this._a = value;
  }

  length() {
    console.log("Периметр квадрата:", 4 * this._a);
  }

  square() {
    console.log("Площа квадрата:", this._a * this._a);
  }

  info() {
    console.log("Інформація про квадрат:");
    console.log("Довжина сторони a :", this._a);
    console.log("Периметр:", 4 * this._a);
    console.log("Площа:", this._a * this._a);
  }
}

class Rectangle extends Square {
  constructor(a, b) {
    super(a);
    this._b = b;
  }

  static help() {
    console.log("Прямокутник – це чотирикутник, у якого протилежні сторони паралельні та рівні між собою.");
  }

  get b() {
    return this._b;
  }

  set b(value) {
    this._b = value;
  }

  length() {
    console.log("Периметр прямокутника:", 2 * (this._a + this._b));
  }

  square() {
    console.log("Площа прямокутника:", this._a * this._b);
  }

  info() {
    console.log("Інформація про прямокутник:");
    console.log("Довжина:", this._a);
    console.log("Ширина:", this._b);
    console.log("Периметр:", 2 * (this._a + this._b));
    console.log("Площа:", this._a * this._b);
  }
}

class Rhombus extends Square {
  constructor(a, alpha, beta) {
    super(a);
    this._alpha = alpha;
    this._beta = beta;
  }

  static help() {
    console.log("Ромб — це паралелограм, який має рівні сторони..");
  }

  get alpha() {
    return this._alpha;
  }

  set alpha(value) {
    this._alpha = value;
  }

  get beta() {
    return this._beta;
  }

  set beta(value) {
    this._beta = value;
  }

  length() {
    console.log("Периметр ромба:", 4 * this._a);
  }

  square() {
    console.log("Площа ромба:", (this._a * this._a * Math.sin(this._alpha * Math.PI / 180)).toFixed(2));
  }

  info() {
    console.log("Інформація про ромб:");
    console.log("Довжина сторони:", this._a);
    console.log("Тупий кут  у градусах:", this._alpha);
    console.log("Гострий кут  у градусах:", this._beta);
    console.log("Периметр:", 4 * this._a);
    console.log("Площа:", (this._a * this._a * Math.sin(this._alpha * Math.PI / 180)).toFixed(2));
  }
}

class Parallelogram extends Rectangle {
  constructor(a, b, alpha, beta) {
    super(a, b);
    this._alpha = alpha;
    this._beta = beta;
  }

  static help() {
    console.log("Паралелограм - це чотирикутник з двома парами паралельних сторін.");
  }

  get alpha() {
    return this._alpha;
  }

  set alpha(value) {
    this._alpha = value;
  }

  get beta() {
    return this._beta;
  }

  set beta(value) {
    this._beta = value;
  }

  length() {
    console.log("Периметр паралелограма:", 2 * (this._a + this._b));
  }

  square() {
    console.log("Площа паралелограма:", this._a * this._b * Math.sin(this._alpha * Math.PI / 180));
  }

  info() {
    console.log("Інформація про паралелограм:");
    console.log("Довжина:", this._a);
    console.log("Ширина:", this._b);
    console.log("Тупий кут  у градусах:", this._alpha);
    console.log("Гострий кут  у градусах:", this._beta);
    console.log("Периметр:", 2 * (this._a + this._b));
    console.log("Площа:", this._a * this._b * Math.sin(this._alpha * Math.PI / 180));
  }
}

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

const square = new Square(9);
const rectangle = new Rectangle(7, 9);
const rhombus = new Rhombus(8, 12, 94);
const parallelogram = new Parallelogram(1, 3, 28, 135);

square.info();
rectangle.info();
rhombus.info();
parallelogram.info();
