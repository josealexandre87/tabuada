// Lógica da Tabuada
document.getElementById("button-limpar").addEventListener("click", function () {
  document.getElementById("txtn").value = "";
  document.getElementById("seltab").innerHTML =
    "<option>Digite um número acima</option>";
});

function tabuada() {
  let num = document.getElementById("txtn").value;
  let seltab = document.getElementById("seltab");

  if (num === "") {
    alert("Por favor, digite um número!");
    return;
  }

  num = Number(num);
  seltab.innerHTML = ""; // Limpar a tabuada anterior

  for (let i = 1; i <= 10; i++) {
    let item = document.createElement("option");
    item.text = `${num} x ${i} = ${num * i}`;
    item.value = `tab${i}`;
    seltab.appendChild(item);
  }
}
