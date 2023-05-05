const input = document.querySelector('input')
const span = document.querySelector('span')
const text = document.querySelector('span').innerHTML
input.addEventListener('keyup', function(){

    span.innerHTML = text.replaceAll(input.value, (str) => {
        return `<span style="font-weight: bold; color:red; border:yellow; background:yellow">${str}</span>`
    })
});


