const block = document.querySelector('.block')
const btnPrev = document.querySelector('.btnPrev')
const btnNext = document.querySelector('.btnNext')

let count = 1;

const func = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            block.innerHTML =`
            <h2>${data.title}</h2>
            <span>${data.id}</span>
            <h3>${data.completed}</h3>`
        })
}
func()

btnNext.onclick = () => {
    count++
   func()
}

btnPrev.onclick = () => {
    count !== 1 && count--
    func()
}


////////////2
fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) =>  response.json())
    .then((data) => console.log(data));

