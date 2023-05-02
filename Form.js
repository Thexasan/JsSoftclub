let form1 = document.querySelector('.form1')
let form2 = document.querySelector('.form2')
let box = document.querySelector('.box')

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
        img:"https://www.w3schools.com/howto/img_avatar2.png",
        fullname:'Hasan Husenov',
        job:'Programmer',
    },
    {
        id:2,
        img:"https://www.w3schools.com/howto/img_avatar2.png",
        fullname:'Husen Husenov',
        job:'medik',
    },
]

//form1 add
form1.onsubmit=(event)=>{
    event.preventDefault()
    let newUser = {
        id:new Date().getTime(),
        img:event.target["img"].value,
        fullname:event.target["fullname"].value,
        job:event.target["job"].value,
    }
    data.push(newUser)
    get()
    form1.reset()
}

//delete
function deleteUser(id){
    data = data.filter((el)=>{
        return el.id!=id
    })
    get()
}

//edit
let idx = null
function editUserModal(id){
    let user = data.find((elem)=>{
        return elem.id==id
    })
    form2['img'].value=user.img
    form2['fullname'].value=user.fullname
    form2['job'].value=user.job
    modal.style.display='block'
    idx=id
}
//knopka edit
form2.onsubmit=(event)=>{
    event.preventDefault()
    data=data.map((elem)=>{
        if(elem.id==idx){
            elem.img=form2['img'].value
            elem.fullname=form2['fullname'].value
            elem.job=form2['job'].value
        }
        return elem
    })
    get()
    modal.style.display='none'
}


//get data
function get(){
    box.innerHTML=''

    data.forEach((elem)=>{
        let card = document.createElement('div')
        card.classList.add('card')

        let img = document.createElement('img')
        img.src=elem.img

        let container = document.createElement('div')
        container.classList.add('container')

    
        let fullname=document.createElement('h1')
        fullname.innerHTML=elem.fullname

        let job = document.createElement('h1')
        job.innerHTML=elem.job

        let btnDel = document.createElement('button')
        btnDel.onclick=()=>{
            deleteUser(elem.id)
        }
        btnDel.innerHTML='delete'

        let btnEdit = document.createElement('button')
        btnEdit.innerHTML = 'Edit'
        btnEdit.onclick=()=>{
            editUserModal(elem.id)
        }

        container.appendChild(fullname)
        container.appendChild(job)
        card.appendChild(img)
        card.appendChild(container)
        card.appendChild(btnDel)
        card.appendChild(btnEdit)
        box.appendChild(card)
    })
}
get()