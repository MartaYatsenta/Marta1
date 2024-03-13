function MyMathPower(b, n) {
    let r = 1;
    for (let i = 0; i < n; i++) {
        r *= b;
    }
    console.log(`The ${n}th power of ${b} equals ${r}`);
}

function MyMathPowerDefault1(b, n) {
    MyMathPower(b, n === undefined ? 4 : n);
}

function MyMathPowerDefault2(b = 2, n = 4) {
    MyMathPower(b, n);
}

function TestAllFunctions() {
    console.log("Testing MyMathPowerDefault1 with both parameters provided:");
    MyMathPowerDefault1(2, 4);

    console.log("Testing MyMathPowerDefault1 with only base provided:");
    MyMathPowerDefault1(4);

    console.log("Testing MyMathPowerDefault1 with only exponent provided:");
    MyMathPowerDefault1(undefined, 2);

    console.log("Testing MyMathPowerDefault1 with neither parameter provided:");
    MyMathPowerDefault1();

    console.log("\n\n\n");

    console.log("Testing MyMathPowerDefault2 with both parameters provided:");
    MyMathPowerDefault2(2, 4);

    console.log("Testing MyMathPowerDefault2 with only base provided:");
    MyMathPowerDefault2(4);

    console.log("Testing MyMathPowerDefault2 with only exponent provided:");
    MyMathPowerDefault2(undefined, 2);

    console.log("Testing MyMathPowerDefault2 with neither parameter provided:");
    MyMathPowerDefault2();
}

TestAllFunctions();
