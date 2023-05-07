let api = 'https://63d14a1e3f08e4a8ff94b1a5.mockapi.io/department'
let box = document.querySelector('.box')
let form1 = document.querySelector('.form1')


// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


//add 
form1.onsubmit=(event)=>{
    event.preventDefault()
    let user = {
        title:form1['text'].value,
        isCompleted:false,
    }
    post(user)
    form1.reset()
}
//function to Add
let post = async (user) => {
     try { 
        const { data }= await axios.post(api, user) 
        getData()
        // console.log(data);
    } catch (error) {
        console.log(error);
}
}

//function to edit 
let putEdit = async (id, user) => {
    try { 
       const { data }= await axios.post(`${api}/${id}`, user) 
       getData()
       // console.log(data);
   } catch (error) {
       console.log(error);
   }
}

//function to delete
async function deleteUser(id){
   try {
       const {data}= await axios.delete(`${api}/${id}`)
       getData()
       // console.log(data);
   } catch (error) {
       console.log(error);
   }
}


//function to get data
async function getData(){
    try {
        let res = await axios.get(api)
        getUser(res.data)
    } catch (error) {
        console.log(error);
    }
}
function getUser(data){
    // console.log(data);
    box.innerHTML=''
    data.forEach((e)=>{
        let h1 = document.createElement('h1')
        h1.innerHTML=e.title


        //edit*
        let btnEdit = document.createElement('button')
        btnEdit.innerHTML='Edit'
        btnEdit.onclick=()=>{
            const editUser={
                title:h1.innerHTML,
                
            }
            putEdit(e.id,editUser)
        }
        //delete
        let btnDel = document.createElement('button')
        btnDel.innerHTML='delete'
        btnDel.onclick=()=>{
            deleteUser(e.id)
        }
        //complete
        // let btnCom = document.createElement('button')
        // btnCom.innerHTML = 'complete'
        // btnCom.onclick=()=>{
        //     com
        // }

        box.appendChild(h1)
        box.appendChild(btnEdit)
        box.appendChild(btnDel)
    })    
}
getData()