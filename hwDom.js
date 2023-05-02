const box = document.querySelector("#userTableBody");
const addUserForm = document.getElementById("addUserForm");
const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const imageInput = document.getElementById("image");
const phoneInput = document.getElementById("phone");
const userTableBody = document.getElementById("userTableBody");
const editModal = document.getElementById("editModal");
const sumbit = document.querySelector("#addUserBtn");


let btnEdit = document.querySelector('.btnEdit')
let inpEdit = document.querySelector('.inpEdit')

var modal = document.getElementById('myModal')

//get the <span></span> elemet that closes te modal
var span = document.getElementsByClassName('close')[0]

//when the user click on span(x),close the modal
span.onclick=function(){
    modal.style.display = 'none'
}

// when the user clicks anywhere outside of the modal , close it 
window.onclick = function(event){
    if(event.target ==modal){
        modal.style.display='none'
    }
}




let data = [
  {
    id: 1,
    img: "",
    name: "Hasan",
    surname: "Husenov",
    email: "husenovhasan@gmail.com",
    age: 18,
    phone: '003557773',
  },
];

//add
sumbit.onclick = () => {
  let newUser = {
    id: new Date().getTime(),
    img: imageInput.value,
    name: nameInput.value,
    surname: surnameInput.value,
    email: emailInput.value,
    age: ageInput.value,
    phone: phone.value,
  };
  data.push(newUser);
  get();
  imageInput.value = "";
  nameInput.value = "";
  surnameInput.value = "";
  emailInput.value = "";
  ageInput.value = "";
  phone.value = "";
};

//delete
function deleteUser(id){
  data = data.filter((elem)=>{
    return elem.id !=id
  })
  get()
}

//edit
let idx = id
function editModalOpen(id){
  let user = data.find((e)=>e.id==id)
  nameInput.value=user.name
  surnameInput.value=user.surname
  emailInput.value=user.email
  ageInput.value=user.age
  phoneInput.value=user.phone
  imageInput.value=user.img
  idx=id
}
//edit user
function editUser(){
  data = data.map((e)=>{
    if(e.id==idx){
      e.name=nameInput.value
      e.surname=surnameInput.value
      e.email=emailInput.value
      e.age=ageInput.value
      e.phone=phoneInput.value
      e.img=imageInput.value
    }
    return e
  })
  get()
  editModal.style.display='none'
}
btnEdit.onclick=editUser


function get() {
  box.innerHTML = "";
  data.forEach((elem) => {
    let container = document.createElement('tr')

    let idAdd=document.createElement('td')
    idAdd.innerHTML=elem.id

    let nameAdd = document.createElement('td')
    nameAdd.innerHTML=elem.name

    let surnameAdd=document.createElement('td')
    surnameAdd.innerHTML=elem.surname

    let emailAdd=document.createElement('td')
    emailAdd.innerHTML=elem.email

    let ageAdd=document.createElement('td')
    ageAdd.innerHTML=elem.age

    let tdimg = document.createElement('td')
    let imgAdd= document.createElement('img')
    imgAdd.src=elem.img
    tdimg.appendChild(imgAdd)

    let phoneAdd = document.createElement('td')
    phoneAdd.innerHTML=elem.phone

    let btnDel=document.createElement('button')
    btnDel.onclick=()=>{
      deleteUser(elem.id)
    }
    btnDel.innerHTML = 'Delete'

    let btnEdit = document.createElement('button')
    btnEdit.innerHTML = 'Edit'
    btnEdit.onclick=()=>{
      editModalOpen(elem.id)
    }


   container.appendChild(idAdd)
   container.appendChild(nameAdd)
   container.appendChild(surnameAdd)
   container.appendChild(emailAdd)
   container.appendChild(ageAdd)
   container.appendChild(tdimg)
   container.appendChild(phoneAdd)
   container.appendChild(btnDel)
   container.appendChild(btnEdit)

   box.appendChild(container)
  });
}
get();
