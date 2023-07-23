let select = document.querySelector("#select")
let form = document.querySelector("#form")
let inputValue = document.querySelector(".value")


form.addEventListener("submit", formControl)


function formControl(e) {

    let number = Number(select.value)

    switch (number) {
        case 1:
            console.log("Email", typeof inputValue.value)
            const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (emailRegex.test((inputValue.value).trim())) {
                showAlert("Valid Email Address", "success")
            } else {
                showAlert("Invalid Email Address", "error")
            }
            break
        case 2:
            // const mobileRegex = /^(?:\+?88)?01[15-9]\d{8}$/;
            const mobileRegex = /(^(\+88)?(01){1}[56789]{1}(\d){8})$/;
            if (mobileRegex.test((inputValue.value).trim())) {
                showAlert("Valid Mobile Number", "success")
            } else {
                showAlert("Invalid Mobile Number", "error")
            }
            break;
        case 3:
            const otpRegex = /^\d{4}$/
            if (otpRegex.test((inputValue.value).trim())) {
                showAlert("Valid OTP", "success")
            } else {
                showAlert("Invalid OTP", "error")
            }
            break;
        case 4:
            const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
            if (passwordRegex.test((inputValue.value).trim())) {
                showAlert("Valid Password", "success")
            } else {
                showAlert("Invalid Password", "error")
            }
            break;
        default:
            showAlert("Invalid Information", "error")
    }
}

function showAlert(message, className) {
    let div = document.createElement("div")
    div.className = `alert ${className} `

    div.appendChild(document.createTextNode(message))

    let container = document.querySelector(".container")
    let alertSelect = document.querySelector("#alertShow")
    container.insertBefore(div, alertSelect)


    setInterval(function() {
        document.querySelector(".alert").remove()
    }, 2000)
}