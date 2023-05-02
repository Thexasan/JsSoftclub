let form1 = document.querySelector('.form1')
let box = document.querySelector('.box')
let userTableBody= document.querySelector('.userTableBody')

let data = [
    {
        id:1,
        name:'welcome to website',
    },
]

//add
form1.onsubmit=(event)=>{
    event.preventDefault()
    let newUser = {
        name:event.target['name'].value
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



function get(){
    userTableBody.innerHTML=''
    data.forEach((elem,ind)=>{
        let container = document.createElement('tr')
        let idAdd = document.createElement('td')
        idAdd.innerHTML = ind+1
        let nameAdd = document.createElement('td')
        nameAdd.innerHTML=elem.name
        let buttAdd = document.createElement('td')
        
        let btnEdit = document.createElement('button')
        btnEdit.innerHTML = 'edit'
        let btnDel = document.createElement('button')
        btnDel.innerHTML='Delete'
        btnDel.onclick=()=>{
            deleteUser(elem.id)
        }



        buttAdd.appendChild(btnEdit)
        buttAdd.appendChild(btnDel)
        container.appendChild(idAdd)
        container.appendChild(nameAdd)
        container.appendChild(buttAdd)
        userTableBody.appendChild(container)
    })
}
get()