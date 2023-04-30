let table = document.querySelector("#table");
const changeName = document.querySelector('#changeName')
const changeCource = document.querySelector('#changeCouce')
const form = document.querySelector("#form1");
const nameForm = document.querySelector("#Name");
const formCource = document.querySelector("#cource");
const tdNode = document.querySelectorAll("td");
const form2 = document.querySelector("#form2");
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let data = [
  {
    id: 1,
    name: "Hasan",
    kourse: "reakt",
  },
  {
    id: 2,
    name: "Akbar",
    kourse: "react",
    name1: "delate",
  },
];

function getObj() {
  table.innerHTML = "";
  data.forEach((el, ind) => {
    let tr = document.createElement("tr");
    let tdiND = document.createElement("td");
    let tdName = document.createElement("td");
    let tdCource = document.createElement("td");
    let btn = document.createElement("button");
    let btn2 = document.createElement("button");
    let tdBtn = document.createElement("td");
    let editBtn = document.createElement("td");
    tdiND.innerHTML = ind;
    tdCource.innerHTML = el.kourse;
    tdName.innerHTML = el.name;
    btn.innerHTML = "delete";
    btn.classList.add("btn");

    btn2.innerHTML = "edit";
    btn2.classList.add("edit");
    btn.onclick = () => {
      delData(el.id);
    };
//    
    tdBtn.appendChild(btn);
    editBtn.appendChild(btn2);
    tr.appendChild(tdiND);
    tr.appendChild(tdName);
    tr.appendChild(tdCource);
    tr.appendChild(tdBtn);
    tr.appendChild(editBtn);
    table.appendChild(tr);
    btn2.onclick =() => {
     openModal(el)
    
    };
    
  });
}

getObj();
function openModal(elem){
    modal.style.display = "block"
    changeName.value = elem.name;
    changeCource.value = elem.kourse;
    form2.onsubmit=(elem)=>{
       preventDefault()
        elem.name = changeName.value
        elem.kourse =changeCource.value;
        modal.style.display = "none";
        getObj()
    }
}

span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function delData(id) {
  data = data.filter((el) => {
      return el.id != id;
  });
  getObj();
}


form.onsubmit = (e) => {
  e.preventDefault();
  if (nameForm.value == "" || formCource.value == "") {
    console.log("lkm");
  } else {
    let newUser = {
      id: new Date().getTime(),
      name: nameForm.value,
      kourse: formCource.value,
    };

    data.push(newUser);
    nameForm.value = "";
    formCource.value = "";

    getObj();
  }
};