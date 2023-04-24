function perform() {
  let newString = "";
  const input = document.querySelector("#input").value;
  const result = document.querySelector("#result");

  for (let i = input.length - 1; i >= 0; i--) {
    newString += input[i];
  }
  result.value = newString;
}

function perform1() {
  const input = document.querySelector("#input1").value;
  const result = document.querySelector("#result1");
  let input1 = input.split(" ");

  input1.forEach((item, index) => {
    input1[index] =
      input1[index].charAt(0).toUpperCase() + input1[index].slice(1);
  });
  string = input1.join(" ");
  result.value = string;
}

function perform2() {
  const input = document.querySelector("#input2").value;
  const result = document.querySelector("#result2");

  let input1 = input.split(",");

  for (let i = 0; i < input1.length; i++) {
    for (let j = i + 1; j < input1.length; j++) {
      if (input1[i] == input1[j]) {
        input1.splice(j, 1);
      }
    }
  }
  result.value = input1;
}

function perform3() {
  const input = document.querySelector("#input3").value;
  const result = document.querySelector("#result3");
}
