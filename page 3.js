
function page_1() {
  window.location = "page 2.html";
}


document.getElementById('history').addEventListener("click", function () {
  document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.bg-modal').addEventListener("click", function () {
  document.querySelector('.bg-modal').style.display = "none";
});

document.getElementById('it').addEventListener("click", function () {
  document.querySelector('.model-it').style.display = "flex";
});

document.querySelector('.model-it').addEventListener("click", function () {
  document.querySelector('.model-it').style.display = "none";
});


function mouseoverhis() {
  document.getElementById("history").style.opacity = "0.7";
}

function mouseouthis() {
  document.getElementById("history").style.opacity = "1";
}

function mouseoverit() {
  document.getElementById("it").style.opacity = "0.7";
}

function mouseoutit() {
  document.getElementById("it").style.opacity = "1";
}
