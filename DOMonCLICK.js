let box =document.querySelector('.box')
let btnAdd = document.querySelector('.btnAdd')
let  inp = document.querySelector('.inp')

let data = [
    {
        id:1,
        title: 'Hasan'
    },
    {
        id:2,
        title: 'Hasanjon'
    },
    {
        id:3,
        title: 'Hasankhon'
    }
]

btnAdd.onclick=()=>{
    let newUser = {
        id:4,
        title:inp.value
    }
    data.push(newUser)
    get()
    inp.value=''
}

function deleteUser(id){
    data = data.filter((e)=>{
        return e.id!=id
    })
    get()
    console.log(data);

}



function get(){
    box.innerHTML=''
    console.log(data);
    data.forEach((elem)=>{
        let container = document.createElement('div')
        let title = document.createElement('h1')
        title.innerHTML = elem.title
        let btnDelete = document.createElement('button')
        btnDelete.innerHTML='Delete'
        btnDelete.onclick=()=>{
            deleteUser(elem.id)
            // let h2=document.createElement('h2')
            // h2.innerHTML = elem.id
            // container.appendChild(h2)
        }
        container.appendChild(title)
        container.appendChild(btnDelete)
        container.classList.add('cont')
        box.appendChild(container)
    })
}
get()



