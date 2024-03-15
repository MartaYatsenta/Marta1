function TriangleArea(base, height) {
    return 0.5 * base * height;
}

const base1 = 7;
const height1 = 3;
const area1 = TriangleArea(base1, height1);
console.log(`Площа трикутника з основою ${base1} та висотою ${height1} дорівнює ${area1}`);

const area2 = TriangleArea(3, 6);
console.log(`Площа трикутника з основою 3 та висотою 6 дорівнює ${area2}`);

function Boat(color, maxSpeed, maxTonnage, brand, countryOfRegistration) {
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.maxTonnage = maxTonnage;
    this.brand = brand;
    this.countryOfRegistration = countryOfRegistration;
}

Boat.prototype.AssignCaptain = function(captainName, yearsOfExperience, hasFamily) {
    this.captain = {
        name: captainName,
        yearsOfExperience: yearsOfExperience,
        hasFamily: hasFamily
    };
};

const myBoat = new Boat('blue', 30, 500, 'Brek', 'Ukraine');
myBoat.AssignCaptain('Marta Yatsenta', 10, true);


console.log(myBoat);
//5
class SimpleCircle {
    constructor(majorRadius) {
        this._majorRadius = majorRadius;
    }

    get majorRadius() {
        return this._majorRadius;
    }

    set majorRadius(value) {
        if (typeof value !== 'number' || value < 0) {
            throw new Error('Major radius must be a non-negative number');
        }
        this._majorRadius = value;
    }
}


const circle = new SimpleCircle(5);
console.log(circle.majorRadius); // 5
circle.majorRadius = 10;
console.log(circle.majorRadius); // 10
//
class SimpleEllipse {
  constructor(majorRadius, minorRadius) {
    this.majorRadius = majorRadius;
    this.minorRadius = minorRadius;
  }
}

class Ellipse extends SimpleEllipse {
  constructor(majorRadius, minorRadius) {
    super(majorRadius, minorRadius);
  }

  static calculateArea(majorRadius, minorRadius) {
    return Math.PI * majorRadius * minorRadius;
  }
}

const ellipse = new Ellipse(5, 3); 
console.log("Ellipse object:");
console.log(ellipse);

console.log("Area of the ellipse:");
console.log(Ellipse.calculateArea(ellipse.majorRadius, ellipse.minorRadius)); 

