let box = document.querySelector('.box')
let btnAdd = document.querySelector('.btnAdd')
let inpAdd = document.querySelector('.inpAdd')

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
        id:1,
        title:'getUp',
        completed:false,
        img:'image_2023-04-18_18-26-26.png'
    },
    {
        id:2,
        title:'goHome',
        completed:false,
        img:''
    }
]



//add uSer
btnAdd.onclick=()=>{
    let newUser = {
        id:new Date().getTime(),
        title:inpAdd.value,
        completed:false,
    }
    data.push(newUser)
    get()
    inpAdd.value=''
}

// delete user
function deleteUser(id){
    data = data.filter((elem)=>{
        return elem.id!=id
    })
    get()
}

let idx = null
//open the modal user 
function editModalOpen(id){
    let user = data.find((e)=>e.id ==id)
    inpEdit.value=user.title
    modal.style.display='block';
    idx=id
}
/// complete
function  completedUser(id){
    data = data.map((e)=>{
        if(e.id==id){
            e.completed=!e.completed
        }
        return e
    })
    get()
}

//edit user
function editUser(){
    data = data.map((e)=>{
        if(e.id==idx){
            e.title=inpEdit.value
        }
        return e
    })
    get()
    modal.style.display='none'
}

btnEdit.onclick=editUser

//get data
function get(){
    box.innerHTML=''
    data.forEach((elem)=>{
        //добавление img
        let img = document.createElement('img')
        img.src = elem.img
        //create element
        let container = document.createElement('div') //<div>...</div>
        let titleTeg=document.createElement('h1') //<div><h1>...</h1></div>
        titleTeg.innerHTML = elem.title
        //toggle complete
        if(elem.completed==true){
            titleTeg.classList.toggle('com')
        }
        //delete
        let btnDelete = document.createElement('button')
        btnDelete.onclick=()=>{
            deleteUser(elem.id)
        }
        btnDelete.innerHTML='Delete'
        //complete
        let btnCom = document.createElement('button')
        btnCom.innerHTML='complete'
        btnCom.onclick=()=>{
            completedUser(elem.id)
        }
        //add edit
        let btnEdit = document.createElement('button')
        btnEdit.innerHTML='Edit'
        btnEdit.onclick=()=>{
            editModalOpen(elem.id)
        }
        //add container
        container.appendChild(img)
        container.appendChild(titleTeg)
        container.appendChild(btnDelete)
        container.appendChild(btnCom)
        container.appendChild(btnEdit)
        //add to box
        box.appendChild(container)
    })
}
get()