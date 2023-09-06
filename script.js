let list =[
{
  name: "Paulo",
  idade: 37,
  weight: 89,
  height: 182  
},
  
{
    name: "Ronaldo",
    idade: 47,
    weight: 120,
    height: 170  
},
  
{
    name: "Yan",
    idade: 25,
    weight: 69,
    height: 178  
},

{
    name: "Renan",
    idade: 27,
    weight: 78,
    height: 182  
}
  
]

function imc(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printpersonIMC(person) {
  return `
    Paciente ${person.name} possui o IMC de
    ${imc(person.weight, person.height)}
  `
}

for (let patient of list) {
  let IMCmessage = printpersonIMC(patient)
  alert(IMCmessage)
}