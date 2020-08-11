// let firstName = process.argv[2]
// let lastName = process.argv[3]
// let movie = process.argv[4]

// console.log(`Their name is ${firstName} ${lastName} and their favorite movie is ${movie}`)

let operator = process.argv[2],
firstNum = parseInt(process.argv[3]),
secondNum = parseInt(process.argv[4])

switch (operator) {
  case 'add':
    console.log(firstNum + secondNum)
    break
  case 'subtract':
    console.log(firstNum - secondNum)
    break
  case 'multiply':
    console.log(firstNum * secondNum)
    break
  case 'divide':
    console.log(firstNum / secondNum)
    break
}