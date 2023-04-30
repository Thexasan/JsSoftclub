let box = document.querySelector('.box')

let data =[
    {
        id:1,
        title:'getUp'
        
    },
    {
        id:2,
        title:'goHome'
    },
    {
        id:3,
        title:'goSchool'
    }
]


//get Data
function get(){
    data.forEach((elem)=>{
        let container = document.createElement('div')
        let titleTeg = document.createElement('h1')
        titleTeg.innerHTML=elem.title
        container.appendChild(titleTeg)
        box.appendChild(container)
    })
}
get()