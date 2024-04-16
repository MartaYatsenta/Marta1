let arr1 = [
    1,
    5,
    9,
    4,
    {
        name: 'Yatsenta Marta',
        mark: 91, 
        subject: 'JS'
    },
    function(num) {
        return num ** 4;
    },
    function(obj) {
        console.log(obj.name);
    },
    -6,
    14
];

console.log("1.2.4");
arr1.forEach(item => console.log(item));

console.log("1.2.5");
arr1.splice(arr1.indexOf(5), 1, 8);
console.log(arr1);

console.log("1.2.6");
arr1.splice(arr1.indexOf(4), 0, "Hello");
console.log(arr1);

console.log("1.2.7");
let arr2 = arr1.slice().filter(item => typeof item === 'function');
console.log(arr2);

console.log("1.2.8");
arr2.forEach(func => console.log(func));

console.log("1.2.9");
let arr3 = arr1.slice().filter(item => typeof item === 'number' && ![5, 4].includes(item));
console.log(arr3);

console.log("1.2.10");
arr3.forEach(item => console.log(item));

console.log("1.2.11");
let arr3Reversed = arr3.slice().reverse();
console.log(arr3Reversed);

console.log("1.2.12");
arr3Reversed.forEach(item => console.log(item));

console.log("1.2.13");
console.log(arr1.indexOf(-6));

console.log("1.2.14");
console.log(arr1.filter(item => typeof item === 'number' && item > 4));

console.log("1.2.15");
arr1.find(item => typeof item === 'function')(arr1.find(item => typeof item === 'object'));

console.log("1.2.16");
console.log(arr1.find(item => typeof item === 'function')(arr1[arr1.indexOf(-6)]));

console.log("1.2.17");
for (let index in arr1) {
    console.log(arr1[index]);
}

console.log("1.2.18");
for (let index in arr1) {
    if (typeof arr1[index] === 'object') {
        for (let prop in arr1[index]) {
            console.log(prop);
        }
    }
}

console.log("1.2.19");
for (let item of arr1) {
    console.log(item);
}

console.log("1.2.20");
arr1.version = "1.0.0";

console.log("1.2.21");
for (let index in arr1) {
    console.log(arr1[index]);
}

console.log("1.2.22");
for (let item of arr1) {
    console.log(item);
}

let Petryk = {
    name: "Petryk",
    skill: "JS",
    level: "junior"
};

let Mychajlyk = {
    name: "Mychajlyk",
    skill: "HTML/CSS",
    level: "middle"
};

let Volodyk = {
    name: "Volodyk",
    skill: "TS",
    level: "trainee"
};

let map1 = new Map();
map1.set(Petryk.name, Petryk);
map1.set(Mychajlyk.name, Mychajlyk);
map1.set(Volodyk.name, Volodyk);

console.log("1.2.25");
console.log(map1.has("Ivanko"));

console.log("1.2.26");
console.log(map1.has("Volodyk"));

console.log("1.2.27");
for (let key of map1.keys()) {
    console.log(key);
}

console.log("1.2.28");
map1.delete("Mychajlyk");

console.log("1.2.29");
for (let [key, value] of map1.entries()) {
    console.log(`${value.name} is ${value.level} in ${value.skill}`);
}

let set1 = new Set();
set1.add(Petryk);
set1.add(Mychajlyk);
set1.add(Volodyk);

let Antypko = {
    name: "Antypko",
    skill: "PHP",
    level: "senior"
};

console.log("1.2.32");
console.log(set1.has(Antypko));

console.log("1.2.33");
console.log(set1.has(Mychajlyk));

console.log("1.2.34");
for (let item of set1) {
    console.log(`${item.name} is ${item.level} in ${item.skill}`);
}

console.log("1.2.35");
set1.delete(Volodyk);

console.log("1.2.36");
for (let item of set1) {
    console.log(`${item.name} is ${item.level} in ${item.skill}`);
}
