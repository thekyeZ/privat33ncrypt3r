let encodeElem = document.querySelector('#encdode')
let decodeElem = document.querySelector('#decode')
let resultElem = document.querySelector('#result')

let button = document.querySelector('button');


let encode = (e) => {


    setResult(window.btoa(e.target.value))

    
}

let decode = (e) => {

    setResult(window.atob(e.target.value));    


    
}


let copy = () => {
    navigator.clipboard.writeText(resultElem.innerHTML)
}



let setResult = (data) => {
    resultElem.innerHTML = "";
    resultElem.innerHTML = data
}

encodeElem.addEventListener('keyup', encode)
decodeElem.addEventListener('keyup', decode)
button.addEventListener('click', copy)


