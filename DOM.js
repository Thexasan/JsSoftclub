let box = document.querySelector('.box')

let arr = [
    {
        name:'Hasan',
        age: 18,
        course: 'React'
    },
    {
        name:'Lochin',
        age: 21,
        course: 'React'
    }
]

function getUsers(){
    arr.forEach((e)=>{
        let container = document.createElement('div')
        let h1Name = document.createElement('h1')
        h1Name.innerHTML = e.name
        let h1Age = document.createElement('h1')
        h1Age.innerHTML  = e.age
        h1Age.style.color='red'
        let h1Course = document.createElement('h1')
        h1Course.innerHTML = e.course
        h1Course.style.textAlign='center'
        h1Course.style.fontWeight = '200'
        h1Course.style.backgroundColor= 'green'
        h1Course.style.

        container.appendChild(h1Name)
        container.appendChild(h1Age)
        container.appendChild(h1Course)

    box.appendChild(container)

    })
}
getUsers()

