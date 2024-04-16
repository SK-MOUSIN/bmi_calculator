function bmiCalculator() {
    var form = document.querySelector("#form")
form.addEventListener("submit", function(val) {
    val.preventDefault()

    var height = parseInt(document.querySelector("#height").value)
    var weight = parseInt(document.querySelector("#weight").value)
    var result = document.querySelector("#result")
    var suggestion = document.querySelector(".sug")

    if(height === " " || height<0 || isNaN(height)) {
        result.innerHTML = `Please enter valid Height ${height}`
    }else if(weight === " " || weight<0 || isNaN(weight)) {
        result.innerHTML = `Please enter valid Height ${weight}`
    }
    else {
        var BMI = (weight/((height*height)/10000)).toFixed(2)
        result.style.opacity = 1
        suggestion.style.opacity = 1
        result.innerHTML = `BMI is: ${BMI}`
        if(BMI <= 18.6){
            suggestion.innerHTML = `Alas! More efforts are needed.`
        }else if(BMI >= 18.6 && BMI <= 24.9) {
            suggestion.innerHTML = `Bravo! You are ready to Shine.`
        }else {
            suggestion.innerHTML = `Oh! Need to be in size.`
        }
    }
})
}
bmiCalculator()

function resetButton() {
    var reset = document.querySelector(".reset")
reset.addEventListener("click", function() {
    location.reload()
})
}
resetButton()