let arr = ['Steven White', 'Nancy King', 'Nancy Davolio', 'Robert Davolio', 'Michael Leverling',
    'Andrew Callahan', 'Michael Suyama', 'Anne King', 'Laura Peacock', 'Robert Fuller', 'Janet White',
    "Nancy Leverling", 'Robert Buchanan', 'Margaret Buchanan', 'Andrw Fuller', 'Anne Davolio', 'Andrew Suyama',
    'Nige Buchanan', 'Laura Fuller'];


let inp = document.getElementById('inp');
let info = document.querySelector('.info');
let text = document.createElement('select');
text.setAttribute('multiple', 'multiple');

let div = document.createElement('div');
div.setAttribute('id', 'inp');

let sp = document.createElement('span');

function createSp(){
    sp.classList.add('x', 'sp');
    sp.innerHTML = '&times';
    div.append(sp);

}

createSp()

function createUl(array) {
    text.classList.add('text');
    array.forEach((value) => {
        let option = document.createElement('option');
        option.classList.add('par');
        option.textContent = value;
        text.appendChild(option.closest('option'));
    })
    return text;
}


function myAppend() {
    info.append(createUl(arr));
    inp.removeEventListener('click', myAppend);
}
inp.addEventListener('click', myAppend);

text.addEventListener('click', function (e) {
    let p = document.createElement('p');
    p.classList.add('span');
    let span = document.createElement('span');
    span.classList.add('x');
    span.innerHTML = '&times';
    p.innerHTML = e.target.value;
    p.append(span);
    div.append(p.closest('p'));
    inp.classList.add('nonBlock');
    e.target.remove();
    if (text.children.length === 0) text.remove();
    info.prepend(div);

    span.addEventListener('click', function () {
        p.remove();
        if (div.textContent === ''||div.children.length===1) {
            div.remove();
            inp.classList.remove('nonBlock');
            text.textContent = '';
            info.append(createUl(arr));
        }

    })

})


inp.addEventListener('input', function (e) {
    value = this.value.toUpperCase();
    let res = arr.filter((v) => value === v[0]);
    text.textContent = '';
    info.append(createUl(res));

    if (this.value === '' || res.length < 1) info.append(createUl(arr));
    this.value = '';

})


sp.addEventListener('click', function () {
    div.innerHTML = '';
    div.remove();
    inp.classList.remove('nonBlock');
    text.textContent = '';
    info.append(createUl(arr));
    createSp();

})

