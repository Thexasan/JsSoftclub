let form1 = document.querySelector('.form1')
let form2 = document.querySelector('.form2')
let userTableBody =  document.querySelector('.userTableBody')
let btnsTd = document.querySelector('.td')


// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

let data = [
    {
        id:1,
        img:'data:image/png;base64,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',
        name:'Halim',
        age:18,
        job:'Architector',
    },
    {
        id:2,
        img:'data:image/png;base64,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',
        name:'Hasan',
        age:18,
        job:'Programmer',
    },
]


//add
form1.onsubmit = (event)=>{
    event.preventDefault()
    let newUser = {
        id:new Date().getTime(),
        img:event.target['img'].value,
        name:event.target['name'].value,
        age:event.target['age'].value,
        job:event.target['job'].value,
    }
    data.push(newUser)
    get()
    form1.reset()
}

//delete
function deleteUser(id){
    data = data.filter((elem)=>elem.id!=id)
    get()
}
//edit
let idx=null
function  editUserModal(id){
    let user = data.find((elem)=>{
        return elem.id==id
    })
    form2['img'].value=user.img
    form2['name'].value=user.name
    form2['age'].value=user.age
    form2['job'].value=user.job
    modal.style.display='block'
    idx=id
}
//knopka edit
form2.onsubmit = (event)=>{
    event.preventDefault()
    data=data.map((elem)=>{
        if(elem.id==idx){
            elem.img=form2['img'].value
            elem.name=form2['name'].value
            elem.age=form2['age'].value
            elem.job=form2['job'].value

        }
        return elem
    })
    get()
    modal.style.display='none'
}



//get data
function get(){
    userTableBody.innerHTML=''
    data.forEach((elem,id )=>{
        let container = document.createElement('tr')
        container.classList.add('con')
        let imgAdd = document.createElement('img')
        imgAdd.src=elem.img
        let idAdd=document.createElement('td')
        idAdd.innerHTML=id+1;
        let nameAdd = document.createElement('td')
        nameAdd.innerHTML=elem.name
        let ageAdd=document.createElement('td')
        ageAdd.innerHTML=elem.age
        let jobAdd = document.createElement('td')
        jobAdd.innerHTML=elem.job
        let btnDel= document.createElement('button')
        btnDel.innerHTML='Delete'
        btnDel.classList.add('del')
        btnDel.onclick=()=>{
            deleteUser(elem.id)
        }
        let btnEdit = document.createElement('button')
        btnEdit.innerHTML = 'Edit'
        btnEdit.onclick=()=>{
            editUserModal(elem.id)
        }
        btnEdit.classList.add('edit')

        container.appendChild(idAdd)
        container.appendChild(imgAdd)
        container.appendChild(nameAdd)
        container.appendChild(ageAdd)
        container.appendChild(jobAdd)
        container.appendChild(btnEdit)
        container.appendChild(btnDel)
        userTableBody.appendChild(container)
    })
}
get()