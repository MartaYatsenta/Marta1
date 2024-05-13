(function (global) {
  const getInfo = (what) => {
    fetch(`${what}.json`)
      .then((response) => response.json())
      .then((jsonObject) => {
        createInfo(jsonObject);
      })
      .catch((error) => console.error("Помилка:", error));
  };
  // K0D V1TALIA))))))))))))
  const getRadians = (degrees) => {
    return degrees * (Math.PI / 180);
  };

  const createInfo = ({ name, description, image_name }) => {
    let content = document.getElementById("content");
    content.innerHTML = "";

    let nameDiv = document.createElement("div");
    nameDiv.style.marginTop = 10 + "px";
    nameDiv.style.fontWeight = "bold";
    nameDiv.style.fontSize = 20 + "px";
    content.appendChild(nameDiv);
    nameDiv.textContent = `${name}`;

    let img = document.createElement("img");
    img.style.marginTop = 10 + "px";
    content.appendChild(img);
    img.setAttribute("src", `${image_name}`);

    let descriptionDiv = document.createElement("div");
    descriptionDiv.style.marginTop = 10 + "px";
    content.appendChild(descriptionDiv);
    descriptionDiv.textContent = `${description}`;
  };

  const buttons = (rofl) => {
    let oper1Value = parseFloat(oper1.value);
    let radians = getRadians(oper1Value);
    let result;
    switch (rofl) {
      case "sin":
        result = Math.sin(radians);
        break;
      case "log":
        if(oper1Value == 0 || oper1Value < 0){
          return alert("WARNING! ACHTUNG! ПЕРЕМОГА! Логарифм нуля, такого не може бути, а ну швидко виправляй!");
        }
        result = Math.log(oper1Value);
        break;
      case "tan":
        result = Math.tan(radians);
        break;
    }
    if (isNaN(oper1Value) || oper1.value.trim() === "") {
      document.getElementById("res").textContent = "Result: please enter a valid number.";
      document.getElementById("content").innerHTML = "";
      return;
    }
    document.getElementById("res").textContent = `Result: ${result}`;
    getInfo(rofl);
  };

  let oper1 = document.getElementById("op1");

  document.getElementById("log-button").addEventListener("click", () => {
    buttons("log");
  });

  document.getElementById("sin-button").addEventListener("click", () => {
    buttons("sin");
  });

  document.getElementById("tan-button").addEventListener("click", () => {
    buttons("tan");
  });
})(window);
