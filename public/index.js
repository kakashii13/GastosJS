let typeAdd = document.getElementById("type__add");
let typeExpend = document.getElementById("type__expend");
let amountAdd = document.getElementById("amountAdd");
let amountExpend = document.getElementById("amountExpend");
const btnAdd = document.getElementById("btn__add");
const btnExpend = document.getElementById("btn__expend");
let totalDif = document.getElementById("total__dif");
let sumAdd = 0;
let sumExpend = 0;
let sumDif = 0;
let arrLocal = [];

class AddBox {
  constructor(type, amount) {
    this.type = type;
    this.amount = amount;
  }

  addIncoming() {
    btnAdd.addEventListener("click", (e) => {
      e.preventDefault();
      if (typeAdd.value == "" || amountAdd.value == "") {
        alert("los campos no pueden estar vacios");
      } else {
        let containerAdd = document.getElementById("container__add");
        let box = document.createElement("div");
        box.className = "add__box";

        let typeBox = document.createElement("div");
        let amountBox = document.createElement("div");
        typeBox.className = "box";
        amountBox.className = "box";
        typeBox.innerHTML = this.type.value;
        amountBox.innerHTML = `$ ${this.amount.value}`;

        box.appendChild(typeBox);
        box.appendChild(amountBox);
        containerAdd.appendChild(box);

        let total = document.getElementById("add__total");

        sumAdd += +this.amount.value;

        total.innerHTML = `$ ${sumAdd.toFixed(2)}`;

        // sumDif

        totalDif.innerHTML = `$ ${sumAdd.toFixed(2) - sumExpend.toFixed(2)}`;

        // add to local storage

        let obj = {
          type: this.type.value,
          amount: this.amount.value,
        };
        arrLocal.push(obj);

        localStorage.setItem("obj", JSON.stringify(arrLocal));
      }
    });
  }

  addExpend() {
    btnExpend.addEventListener("click", () => {
      if (typeExpend.value == "" || amountExpend.value == "") {
        alert("los campos no pueden estar vacios");
      } else {
        let containerExpend = document.getElementById("container__expend");
        let box = document.createElement("div");
        box.className = "add__box";

        let typeBox = document.createElement("div");
        let amountBox = document.createElement("div");
        typeBox.className = "box";
        amountBox.className = "box";
        typeBox.innerHTML = this.type.value;
        amountBox.innerHTML = `$ ${this.amount.value}`;

        box.appendChild(typeBox);
        box.appendChild(amountBox);
        containerExpend.appendChild(box);

        let total = document.getElementById("expend__total");

        sumExpend += +this.amount.value;

        total.innerHTML = `$ ${sumExpend.toFixed(2)}`;

        totalDif.innerHTML = `$ ${sumAdd.toFixed(2) - sumExpend.toFixed(2)}`;
      }
    });
  }
}

let add = new AddBox(typeAdd, amountAdd);

add.addIncoming();

let expend = new AddBox(typeExpend, amountExpend);

expend.addExpend();

let arr;

document.addEventListener("DOMContentLoaded", () => {
  function getLS() {
    // get to local storage

    arr = JSON.parse(localStorage.getItem("obj"));

    console.log(arr);
  }

  getLS();

  function showLS() {
    arr.forEach((obj) => {
      let type = obj.type;
      let amount = obj.amount;

      // crear lista

      let containerAdd = document.getElementById("container__add");
      let box = document.createElement("div");
      box.className = "add__box";

      let typeBox = document.createElement("div");
      let amountBox = document.createElement("div");
      typeBox.className = "box";
      amountBox.className = "box";
      typeBox.innerHTML = type;
      amountBox.innerHTML = `$ ${amount}`;

      box.appendChild(typeBox);
      box.appendChild(amountBox);
      containerAdd.appendChild(box);

      let total = document.getElementById("add__total");

      sumAdd += +amount;

      total.innerHTML = `$ ${sumAdd.toFixed(2)}`;

      // sumDif

      totalDif.innerHTML = `$ ${sumAdd.toFixed(2) - sumExpend.toFixed(2)}`;
    });
  }

  showLS();
});
