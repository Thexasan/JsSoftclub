let tbody=document.querySelector(".tbody")
let box=document.querySelector(".box")
let modal = document.querySelector('.modal')
let api="https://63d14a1e3f08e4a8ff94b1a5.mockapi.io/documents"
let form1=document.querySelector(".form1")
let form2=document.querySelector(".form2")


//delete

async function deleteUser(id){
    try {
        let {data}= await axios.delete(`${api}/${id}`)
        console.log(data);
        getTodos()
    } catch (error) {
        console.log(error)
    }
}

//edit put
async function editUsere(id,obj){
    try {
        let {data} = await axios.put(`${api}/${id},${obj}`)
        getTodos()
    } catch (error) {
        
    }
}
getTodos()

//get()
async function getTodos(){
    try {
        let {data}=await axios.get(api)
        getData(data)
    } catch (error) {
        console.log(error)
    }
}

function getData(data){
    data.forEach((e)=>{
        let tr=document.createElement("tr")
        tr.classList.add("tr")
        let td1 = document.createElement("td")
        td1.classList.add("td1")
        let td2 = document.createElement("td")
        td2.classList.add("td2")
        let td3 = document.createElement("td")
        td3.classList.add("td3")
        let td4 = document.createElement("td")
        td4.classList.add("td4")
        let td5 = document.createElement("td")
        td5.classList.add("td5")
        let td6 = document.createElement("td")
        td6.classList.add("td6")
        let td7 = document.createElement("td")
        td7.classList.add("td7")
        let img =document.createElement("img")
        img.src=e.img
        
        let fullName=document.createElement("h3")
        fullName.innerHTML=e.fullName
        let job=document.createElement("h3")
        job.innerHTML=e.job
        let phone=document.createElement("h3")
        phone.innerHTML=e.phone

        // edit

        let editTd =  document.createElement('td')
        let editBtn =  document.createElement('button')
        editBtn.innerHTML = 'edit'
        editTd.appendChild(editBtn)
        editBtn.onclick =()=>{
            modal.style.display = 'block'
            form2['title'].value = e.fullName
            form2.onsubmit =(elem)=>{
                elem.preventDefault()
                console.log(form2);
                console.log(form2['title'].value);
                let user = {
                    fullName:form2['title'].value
                }
                editUsere(e.id,user)
                modal.style.display = 'none'
            }

        }

        let btnDelete=document.createElement("button")
        btnDelete.innerHTML="Delete"
        btnDelete.onclick=()=>{
            deleteUser(e.id)
            console.log(e.id);
        }


        td1.style.width = '120px'
        img.style.width = '100%'
        td1.appendChild(img)
        td2.appendChild(fullName)
        td3.appendChild(job)
        td4.appendChild(phone)
        td5.appendChild(btnDelete)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)
        tr.appendChild(td7)
        tr.appendChild(editTd)
        tbody.appendChild(tr)
    })
}


//add
async function addTable(obj){
    try {
        let{data}=await axios.post(api,obj)
        getTodos()
    } catch (error) {
        console.log(error)
    }
}

form1.onsubmit=(e)=>{
    e.preventDefault()
    let table={
        img:e.target["img"].value,
        fullName:e.target["fullName"].value,
        job:e.target["job"].value,
        phone:e.target["phone"].value
    }
    addTable(table)
    form1.reset()
}