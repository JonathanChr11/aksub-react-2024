// 3 variables
// var, let, const

// var = global variables
// let = local variables
// const = constants variables (valuenya tidak dapat diubah2)

const phi = 3.14

var x = 5
var y = 'Hello World'

let nama = 'John Doe'
// let angka = 8

let array = ['1', '2', '3']
let objects = {
    nama: 'Jonathan',
    umur: 20,
    gender: 'Male'
}

console.log(x)
console.log(y)
console.log(array[0])
console.log(objects.nama)

// Types of scope
// global = bisa diakses dimanapun atau dimana saja
// local = dia hanya bisa diakses dalam suatu function atau dalam setelah kurung kurawal

// var z = "Namaku Jonathan"
let huruf = 'abcde'

// function scope () {
//     let angka = 10
//     console.log(angka)
//     angka = 'apakah aku angka?'
//     console.log(angka)

//     // const phi = 3.14
//     // phi = 5
//     // console.log(phi)

//     var testing = 3.14
//     testing = 5
//     console.log(testing)

//     // var z = "Namaku Jonathan"
//     // console.log(z)
//     // console.log(huruf)
// }
// console.log(z)
// console.log(angka)
// scope()

// x = 15

function penjumlahan (a, b) {
    return a + b
}

// cara pemanggilan function

// cara 1
function pakaiReturn (a, b) {
    return a + b
}

// cara 2
function gakPakaiReturn (nama) {
    console.log('Halo namaku ' + nama)
}

console.log(pakaiReturn(10, 'pakaiReturn'))

// nggak ada datanya == undefined
console.log(gakPakaiReturn('gakPakaiReturn'))

gakPakaiReturn('Jonathan')

// Variable Hoisting = itu mengangkat sebuah variable keatas
y = 18
var y

console.log(y)


// Operator
// == ===
// var angka1 = '10'
// var angka2 = 10

// console.log(angka1 == angka2)
// console.log(angka1 === angka2)


// Iterator Functions
let characters = ['Rover', 'Baizhi', 'Alto', 'Jianxin', 'Changli']

// For
console.log('For Loop')
for (let index = 0; index < characters.length; index++) {
    console.log(index, characters[index])
}

// ForEach
console.log('ForEach Loop')
characters.forEach((char, index, charBaru) => {
    console.log(index, char)
    charBaru[0] = 'Jihnsi'
    console.log('Character baru, ', charBaru)
});

// Map
console.log('Map Loop')

// Notes: Contoh penggunaan di ReactJS
// let navData = [
//     {
//         menu: 'Home'
//     },
//     {
//         menu: 'About'
//     },
//     {
//         menu: 'Contact'
//     },
// ]

// return (
//     <div className= ''>
//         {navData.map((nav, index) => {
//             <ul>
//                 <li>{nav.menu}</li>
//             </ul>
//         })}
//     </div>
// )

// Contoh di Vanilla JS
let WuwaChar = characters.map((char, idx) => {
    return char + ' adalah Character Wuthering Waves ke ' + parseInt(idx+1)
})

console.log(WuwaChar)

// Filter
console.log('Filter')

let findChar = characters.filter((char) => {
    return char.includes('Bai') || char.length < 5
})

console.log(findChar)


// Destructuring = Destrukturisasi
// let macammacam = [1, 'Halo', 3.14, {nama: jonathan, umur: 20}]
let hewan = ['Kucing', 'Anjing', 'Harimau', 'Buaya', 'burung', {nama: 'Gama', umur: 5}]
let [cat, dog, tiger, crocs, bird, human] = hewan

console.log(cat)
console.log(bird)
console.log(human.nama)

// const data = [
//     Testing = {
//         nama: 'jonathan',
//         umur: 10,
//     }
// ]

// const response = getData()

// { nama, umur } = Testing

// Spread Operator
function spreadOperator () {
    let characters1 = ['Rover', 'Baizhi', 'Alto', 'Jianxin', 'Changli']
    let characters2 = ['Rover', 'Baizhi', 'Alto', 'Jianxin', 'Changli']
    let combinationChar = [...characters1, ...characters2]
    console.log(combinationChar)
}

spreadOperator()

//Rest Operator
function restOperator (args1, args2, ...args3) {
    console.log('args1', args1)
    console.log('args2', args2)
    console.log('args3', args3)
    console.log('gabungan', args1+args2+args3)
}

restOperator(96, 2, 3,4,5,6,7,8,10)

// Async callbacks and promises
// async = asynchronous == tidak berurutan
// sync = berurutan
// callback = memanggil function difunction lain
// promises = janji

function timeOut(resolve) {
    setTimeout(() => {
        console.log('2')
        resolve()
    }, 2000)
}

async function asyncFunction () {
    console.log('1')
    const promise = new Promise(timeOut)
    await promise
    console.log('3')
}

asyncFunction()
