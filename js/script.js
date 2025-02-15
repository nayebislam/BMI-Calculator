let Weight = document.getElementById("Weight")
let Height = document.getElementById("Height")  
let calculateBMI = document.getElementById("calculateBMI")
let bmiResult = document.getElementById("bmiResult")



calculateBMI.addEventListener("click", function () {
    if (Weight.value == "" && Height.value == "") {
        bmiResult.innerHTML = "Please enter valid weight & height." 
        bmiResult.className = "bmi_result text-center text-xl font-semibold p-6 rounded-xl calculator text-red-600"
        bmiResult.classList.remove("hidden")
    } else {
        let BMI = ((Weight.value * 2.20462) / (Height.value * Height.value) * 703).toFixed(2)
        let category = ""
        let colrclass = ""
        if (BMI <= 18.5) {
            category = "Underweight"
            colrclass = "text-blue-600"
        } else if(BMI <= 24.9) {
            category = "Normal weight"
            colrclass = "text-green-600"
        } if (BMI >= 25) {
            category = "Overweight"
            colrclass = "text-yellow-600"
        } else if (BMI >= 30) {
            category = "Obesity"
            colrclass = "text-red-600"
        }

        bmiResult.innerHTML = `
                          <div class="space-y-2">
                            <div class="text-2xl font-bold ${colrclass}">BMI: ${BMI}</div>
                            <div class="text-gray-600">${category}</div>
                          </div>`
        bmiResult.className = "bmi_result text-center text-xl font-semibold p-6 rounded-xl hidden calculator"
        bmiResult.classList.remove("hidden")
        // bmiResult.innerHTML = `${BMI}`
    }
})
