//Once the Jquery CDN is loaded execute the code inside the functions
$(document).ready(function () {
    //declaring the respective variables as false and when filled the data correctly to make the button clickable
    let bp = false,
        age = false,
        dpf = false,
        bmi = false,
        skin = false,
        glucose = false,
        insulin = false;

    //To show up an proper error when the data in the input form is filled incorrectly
    function showUp(cssSelector, msg) {
        $(cssSelector).next().css("visibility", "visible");
        $(cssSelector)
            .next()
            .html("*" + msg);
    }

    //To make the error disapper when the user fills the data correctly
    function showDown(cssSelector) {
        $(cssSelector).next().css("visibility", "hidden");
    }

    //called everytime when we change the data in the input field to automatically toggle the button states , disabled and clickable
    function isButtonDisabled() {
        if (pregnant && bp && age && dpf && bmi && skin && glucose && insulin) {
            console.log("Abled");
            document.querySelector(".submit-btn").disabled = false;
            $(".wrapper").css("cursor", "pointer");
        } else {
            console.log("Disabled");
            document.querySelector(".submit-btn").disabled = true;
            $(".wrapper").css("cursor", "not-allowed");
        }
    }

    //Handling pregnant field
    $(".input-pregnant").keyup(function () {
        let keyVal = Number($(this).val());
        let valueLength = $(this).val().length;
        console.log(keyVal, !keyVal);
        if (valueLength == 0) {
            pregnant = false;
            showUp(".input-pregnant", "Please Enter a Value");
        } else if (keyVal < 0 || !keyVal) {
            pregnant = false;
            showUp(".input-pregnant", "Please Enter a Positive Value");
        } else {
            pregnant = true;
            showDown(".input-pregnant");
        }
        isButtonDisabled();
    });

    //Handling the blood pressure field
    $(".input-bp").keyup(function () {
        let keyVal = Number($(this).val());
        let valueLength = $(this).val().length;
        console.log(keyVal, !keyVal);
        if (valueLength == 0) {
            bp = false;
            showUp(".input-bp", "Please Enter a value");
        } else if (keyVal < 0 || !keyVal) {
            bp = false;
            showUp(".input-bp", "Please Enter a Positive Value");
        } else if (keyVal < 80) {
            bp = false;
            showUp(".input-bp", "Please Enter a valid value way too slow");
        } else if (keyVal > 200) {
            bp = false;
            showUp(".input-bp", "Please Enter a valid value way too High");
        } else {
            bp = true;
            showDown(".input-bp");
            isButtonDisabled();
        }
    });

    //Handling the age field
    $(".input-age").keyup(function () {
        let keyVal = Number($(this).val());
        let valueLength = $(this).val().length;
        console.log(keyVal, !keyVal);
        if (valueLength == 0) {
            age = false;
            showUp(".input-age", "Please Enter a value");
        } else if (keyVal < 0 || !keyVal) {
            age = false;
            showUp(".input-age", "Please Enter a Positive Value");
        } else if (keyVal > 130) {
            age = false;
            showUp(".input-age", "Please Enter a valid age way too high");
        } else {
            age = true;
            showDown(".input-age");
        }
        isButtonDisabled();
    });

    //Handling the Diabetes Pedigree Function field
    $(".input-DPF").keyup(function () {
        let keyVal = Number($(this).val());
        let valueLength = $(this).val().length;
        console.log(keyVal, !keyVal);
        if (valueLength == 0) {
            dpf = false;
            showUp(".input-DPF", "Please Enter a value");
        } else if (keyVal < 0 || !keyVal) {
            dpf = false;
            showUp(
                ".input-DPF",
                "Please Enter a Positive Value it can't be negative"
            );
        } else if (keyVal > 3) {
            dpf = false;
            showUp(
                ".input-DPF",
                "Please Enter a valid value can't be greater than 3"
            );
        } else {
            dpf = true;
            showDown(".input-DPF");
        }
        isButtonDisabled();
    });

    //Handling the Body Mass Index Field
    $(".input-bmi").keyup(function () {
        let keyVal = Number($(this).val());
        let valueLength = $(this).val().length;
        console.log(keyVal, !keyVal);
        if (valueLength == 0) {
            bmi = false;
            showUp(".input-bmi", "Please Enter a value");
        } else if (keyVal < 0 || !keyVal) {
            bmi = false;
            showUp(
                ".input-bmi",
                "Please Enter a Positive Value it can't be negative"
            );
        } else if (keyVal < 7.5) {
            bmi = false;
            showUp(".input-bmi", "Please Enter a valid value too low");
        } else if (keyVal > 105) {
            bmi = false;
            showUp(".input-bmi", "Please Enter a valid value too high");
        } else {
            bmi = true;
            showDown(".input-bmi");
        }
        isButtonDisabled();
    });

    //Handling the skin Thickness Field
    $(".input-skin").keyup(function () {
        let keyVal = Number($(this).val());
        let valueLength = $(this).val().length;
        console.log(keyVal, !keyVal);
        if (valueLength == 0) {
            skin = false;
            showUp(".input-skin", "Please Enter a value");
        } else if (keyVal < 0 || !keyVal) {
            skin = false;
            showUp(
                ".input-skin",
                "Please Enter a Positive Value it can't be negative"
            );
        } else if (keyVal > 70) {
            skin = false;
            showUp(
                ".input-skin",
                "Please Enter a valid value it can't be greater than 70"
            );
        } else {
            skin = true;
            showDown(".input-skin");
        }
        isButtonDisabled();
    });

    //Handling the Glucose Field
    $(".input-glucose").keyup(function () {
        let keyVal = Number($(this).val());
        let valueLength = $(this).val().length;
        console.log(keyVal, !keyVal);
        if (valueLength == 0) {
            glucose = false;
            showUp(".input-glucose", "Please Enter a value");
        } else if (keyVal < 0 || !keyVal) {
            glucose = false;
            showUp(
                ".input-glucose",
                "Please Enter a Positive Value it can't be negative"
            );
        } else if (keyVal > 200) {
            glucose = false;
            showUp(
                ".input-glucose",
                "Please Enter a valid value it can't be greater than 70"
            );
        } else {
            glucose = true;
            showDown(".input-glucose");
        }
        isButtonDisabled();
    });

    //Handling the Insulin Field
    $(".input-insulin").keyup(function () {
        let keyVal = Number($(this).val());
        let valueLength = $(this).val().length;
        console.log(keyVal, !keyVal);
        if (valueLength == 0) {
            insulin = false;
            showUp(".input-insulin", "Please Enter a value");
        } else if (keyVal < 0 || !keyVal) {
            insulin = false;
            showUp(
                ".input-insulin",
                "Please Enter a Positive Value it can't be negative"
            );
        } else if (keyVal > 200) {
            insulin = false;
            showUp(
                ".input-insulin",
                "Please Enter a valid value it can't be greater than 70"
            );
        } else {
            insulin = true;
            showDown(".input-insulin");
        }
        isButtonDisabled();
    });
});
