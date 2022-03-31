let form = document.getElementById("form");

let from = document.getElementById("from");
let to = document.getElementById("to");
// console.log(from, to);

let fromDegrees = document.getElementById("fromDegrees");
let toDegrees = document.getElementById("toDegrees");
// console.log(fromDegrees, toDegrees);
form.addEventListener("change", (e) => {
  e.preventDefault();

  // console.log("element is changed...");

  let target = e.target;
  // console.log(target);

  function typeToggle(target, toggle_element) {
    let value = target.value;
    switch (value) {
      case "Celsius":
        toggle_element.value = "Fahrenheit";
        break;
      case "Fahrenheit":
        toggle_element.value = "Celsius";
        break;
    }
  }
  function calculateTemp(from, degreeValue) {
    // this from argument is the element that the user has selected from the two of dropdown. meaning it can be either of id "from" or "to".

    let fromType = from.value;
    switch (fromType) {
      case "Celsius":
        return `${(degreeValue * 9) / 5 + 32}`;
      case "Fahrenheit":
        return `${((degreeValue - 32) * 5) / 9}`;
    }
  }

  let result;
  let target_id = target.id;
  switch (target_id) {
    case "from":
      typeToggle(target, to);
      break;
    case "to":
      typeToggle(target, from);
      break;
    case "fromDegrees":
      toDegrees.value = calculateTemp(from, fromDegrees.value);
      break;
    case "toDegrees":
      fromDegrees.value = calculateTemp(to, toDegrees.value);
      break;
  }
  // console.log(result);
  // console.log("script is running till here....");
});

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

// console.log("Btn is clicked...");

//   if (fromDegrees.value === "" || toDegrees.value === "") {
//   }

//   let result = "";
//   if (type === "Celsius") {
//     result = `${(degrees * 9) / 5 + 32}`;
//   }
//   if (type === "Fahrenheit") {
//     result = `${((degrees - 32) * 5) / 9}`;
//   }

// console.log(result);

//   document.getElementById("result").value = result;
// });
// console.log("");
