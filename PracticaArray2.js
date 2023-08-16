let myString = "Javascript+es+super+cool" ;
    console.log(myString)

let myArray2 = myString.split('+')
    console.log(myArray2)

let ArrayLength = myArray2.length
    console.log(ArrayLength)

let LastItem =myArray2[ArrayLength - 1]
    console.log(LastItem)

let ArrayInverso = myArray2.slice().reverse()
    console.log(ArrayInverso)

ArrayInverso.push("el")
    console.log(ArrayInverso)