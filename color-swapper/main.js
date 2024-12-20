const body = document.getElementsByTagName("body")[0];

function setColor(name) {
  body.style.backgroundColor = name;
}

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomColorValue = `rgb(${red}, ${green}, ${blue})`;
  body.style.backgroundColor = randomColorValue;
}

document.getElementById("apiButton").addEventListener("click", async () => {
  let inputText = document.getElementById("inputText").value;

  try {
    let apiCall = "https://pokeapi.co/api/v2/pokemon/" + inputText;
    console.log(apiCall);
    let res = await fetch(apiCall);
    let data = await res.json();
    message.textContent = "valid pokemon.";
    console.log(" your pokemon is " + data.name);
  } catch (error) {
    console.error(error, (message.textContent = "invalid pokemon."));
  }
});

function fizzbuzzy(num) {
  for (let i = 0; i < num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else console.log(i);
  }
}

document.getElementById("fizzbutton").addEventListener("click", () => {
  num = document.getElementById("fizztext").value;
  let fizzres = fizzbuzzy(num);
  document.getElementById("fizzbuzz").innerHTML = fizzres;
});
