let box = document.querySelector('.box')
let form = document.querySelector('.form')
let form2 = document.querySelector('.form2')
let api = 'https://db-project.glitch.me/todos'

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


//add
async function addTodos(obj){
    try {
        let { data }= await axios.post(api,obj)
        getTodos()
    } catch (error) {
        console.log(error);
    }
}
form.onsubmit=(e)=>{
    e.preventDefault()
    let todo = {
        title:e.target['name'].value,
        complete:false
    }
    addTodos(todo)
    form.reset()
}

//delete
async function delTodos(id){
    try {
        let { data } = await axios.delete(`${api}/${id}`)
        getTodos()
    } catch (error) {
        console.log(error);
    }
}

//edit put
async function editUserModal(id,obj){
    try {
        let { data } = await axios.put(`${api}/${id}`,obj)
        getTodos()
    } catch (error) {
        console.log(error);
    }
}

// function editModal(e){
//     modal.style.display='block'
    
//     form2.onsubmit=(ee)=>{
//         ee.preventDefault()
//         let user= {
//             title:form2['name'].value,
//             complete:false
//         }
//         editUserModal(e.id,user)
//         modal.style.display='none'
//         form2.reset()
//     }
// }

//complete
async function completedUser(id,user){
    try {
        let {data}=await axios.put(`${api}/${id}`,user)
        getTodos()
    } catch (error) {
        console.log(error);
    }
}




//get()
async function getTodos(){
    try {
        let { data } = await axios.get(api)
        // console.log(data);
        getData(data)
    } catch (error) {
        console.log(error);
    }
}
getTodos()
function getData(data){
    box.innerHTML=''    
    data.forEach((e)=>{
        let div = document.createElement('div')
        let h1 = document.createElement('h1')
        h1.innerHTML=e.title
       

        let btnDel = document.createElement('button')
        btnDel.innerHTML='delete'
        btnDel.style.color='red'
        btnDel.onclick=()=>{
            delTodos(e.id)
        }

        let btnEdit = document.createElement('button')
        btnEdit.innerHTML = 'Edit'
        btnEdit.onclick=()=>{
          
            modal.style.display='block'
            form2['name'].value = e.title
            form2.onsubmit=(ee)=>{
                ee.preventDefault()
                let user= {
                    title:form2['name'].value,
                    complete:false
                }
                editUserModal(e.id,user)
                modal.style.display  = 'none'
        }
        form2.reset()
    }
    let bntCom = document.createElement('button')
    bntCom.innerHTML = 'complete'
    bntCom.onclick=()=>{
         if(e.title){
            h1.classList.toggle('com')
        }   
        
        let newObj = {
            title: e.title,
            complete: !e.complete
        }
        completedUser(e.id,newObj)
    }

        div.appendChild(h1)
        div.appendChild(btnDel)
        div.appendChild(btnEdit)
        div.appendChild(bntCom)

        box.appendChild(div)
    })
}