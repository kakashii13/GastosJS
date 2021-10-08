let typeAdd = document.getElementById("type__add");
let typeExpend = document.getElementById("type__expend");
let amountAdd = document.getElementById("amountAdd");
let amountExpend = document.getElementById("amountExpend");
const btnAdd = document.getElementById("btn__add");
const btnExpend = document.getElementById("btn__expend");
let sum = 0;

class AddBox {
  constructor(type, amount) {
    this.type = type;
    this.amount = amount;
  }

  addInfo() {
    btnAdd.addEventListener("click", () => {
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

        sum += +this.amount.value;

        total.innerHTML = `$ ${sum}`;
      }
    });
  }
}

let add = new AddBox(typeAdd, amountAdd);

add.addInfo();
