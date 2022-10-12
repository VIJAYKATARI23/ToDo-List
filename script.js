const input = document.querySelector('.search')
const btn = document.querySelector("#add")
const list = document.querySelector('#list_item')

// console.log(input, btn, list)

input.addEventListener('keydown', e => {
    const key = e.key
    if(key === 'Enter') {
        console.log('Enter Key');
        handleAdd()
    }
})
const handleAdd = (e) => {
    // console.log('Adding an event')
    const textToAdd = input.value
    if(textToAdd.length>0) {
        const ele = document.createElement('li')
        const text_node = document.createTextNode(textToAdd)
        ele.appendChild(text_node)
        ele.style.margin="20px 20px 20px 20px"
        list.appendChild(ele)

        //create a dynamic button element
        const button = document.createElement('button')
        button.innerHTML = "<a> Delete </a>";
        button.style.margin="3px 3px 3px 3px "
        button.style.cursor="pointer"
        button.style.border= "2px solid white";
        button.style.backgroundColor="#4db8ff"
        button.style.borderRadius="5px"
        ele.appendChild(button)

        //clear the list
        button.addEventListener('click', (e) => {
            ele.remove()
            // console.log('button to delete')
        })
        input.value = ''
    }
    else {
        window.alert("task cant be edit")
    }
    
}
btn.addEventListener('click', (handleAdd))

// dark mode

const dark_btn = document.querySelector('.btn')
const body = document.querySelector('body')

dark_btn.addEventListener('click', (e) => {
    body.classList.toggle('dark')
})