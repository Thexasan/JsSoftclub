let box = document.querySelector('.box')
let btnAdd=document.querySelector('.btnAdd')
let inpAdd=document.querySelector('.inpAdd')


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



let data =[
    {
        id:1,
        title:'getUp',
        completed:false,
        
    },
    {
        id:2,
        title:'goHome',
        completed:false,

    },
    {
        id:3,
        title:'goSchool',
        completed:false,
    }
]


//add User
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

//delete user
function deleteUser(id){
    data = data.filter((elem)=>{
        return elem.id != id
    })
    get()
}

//complete
function completedUser(id){
    data = data.map((e)=>{
        if(e.id == id){
            e.completed = !e.completed
        }
        return e
    })
    get()
}

//opem modal
let idx=null
function editModalOpen(id){
    let user= data.find((e)=>e.id==id)
    inpEdit.value=user.title
    modal.style.display='block'
    idx=id
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
    modal.style.display = 'none'
}
btnEdit.onclick=editUser
//get Data
function get(){
    box.innerHTML=''
    data.forEach((elem)=>{
        let container = document.createElement('div')
        let titleTeg = document.createElement('h1')
        titleTeg.innerHTML=elem.title

        //toggle
        if(elem.completed==true){
            titleTeg.classList.toggle('com')
        }

        //delete
        let btnDelete = document.createElement('button')
        btnDelete.onclick=()=>{
            deleteUser(elem.id)
        }
        btnDelete.innerHTML = 'delete'

        //complete
        let bntCom = document.createElement('button')
        bntCom.innerHTML='complete'
        bntCom.onclick=()=>{
            completedUser(elem.id)
        }

        //edit
        let btnEdit = document.createElement('button')
        btnEdit.innerHTML='Edit'
        btnEdit.onclick=()=>{
            editModalOpen(elem.id)
        }

        container.appendChild(titleTeg)
        container.appendChild(btnDelete)
        container.appendChild(bntCom)
        container.appendChild(btnEdit)
        box.appendChild(container)
    })
}
get()