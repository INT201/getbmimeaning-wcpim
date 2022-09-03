const { template } = require('@babel/core')

function calculateBMI(weight, height) {
 BMI = weight/(height*height)
 return BMI
}
function getBMIMeaning(weight, height) {
  calculateBMI(weight, height)
  if (BMI<18.5) {
    return "Underweight"
  }
  else if (BMI<=24.9){
    if(BMI>=18.5){
      return "Normal weight"
    }
  }
  else (BMI>25.0){
    return "Overweight"
  }
}

module.exports = getBMIMeaning
