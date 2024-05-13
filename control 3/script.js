import "./jsons.js";

(function (global) {
  let oper1 = document.getElementById("op1");
  let oper2 = document.getElementById("op2");

  const getFunc = (AAA) => {
    let oper1Value = parseFloat(oper1.value);
    let oper2Value = parseFloat(oper2.value);
    let result;
    if (isNaN(oper1Value) || isNaN(oper2Value) || oper1.value.trim() === "") {
      document.getElementById("res").textContent = "Result: please enter a valid number.";
      document.getElementById("content").innerHTML = "";
      return;
    }
    switch (AAA) {
      case "add":
        result = oper1Value + oper2Value;
        break;
      case "mul":
        result = oper1Value * oper2Value;
        break;
      case "sub":
        result = oper1Value - oper2Value;
        break;
      case "div":
        result = oper1Value / oper2Value;
        if (oper2Value === 0) {
          result = "operand 2 is equal to 0";
        }
        break;
    }

    document.getElementById("res").textContent = `Result: ${result}`;
  };
  document.getElementById("add-button").addEventListener("click", () => {
    getFunc("add");
  });

  document.getElementById("sub-button").addEventListener("click", () => {
    getFunc("sub");
  });

  document.getElementById("mul-button").addEventListener("click", () => {
    getFunc("mul");
  });

  document.getElementById("div-button").addEventListener("click", () => {
    getFunc("div");
  });
})(window);
