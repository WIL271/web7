window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    document.getElementById("typ").addEventListener("click", hid);
    document.getElementById("county").addEventListener("change", calculate2);
    document.getElementById("typ").addEventListener("change", calculate2);
    document.getElementById("r1").addEventListener("change", calculate2);
    document.getElementById("r2").addEventListener("change", calculate2);
    document.getElementById("chk1").addEventListener("change", calculate2);
    document.getElementById("chk2").addEventListener("change", calculate2);
});


function hid() {
    let type;
    type = document.getElementById('typ').value;
    switch (type) {
        case'1':
            document.getElementById("radio").hidden = true;
            document.getElementById("checkbox").hidden = true;
            break;
        case'2':
            document.getElementById("radio").hidden = false;
            document.getElementById("checkbox").hidden = true;
            break;
        case'3':
            document.getElementById("radio").hidden = true;
            document.getElementById("checkbox").hidden = false;
            break;
    }
}

function calculate2() {
    let type, count, checkbox, radio, res;
    var rate, chec = 0;
    type = document.getElementById('typ').value;
    count = document.getElementById('county').value;
    checkbox = document.getElementsByName('checkbox');
    radio = document.getElementsByName('radio');
    count = parseInt(count);

    if (!(Number.isInteger(type) && Number.isInteger(count)) && !(count > 0 && count < 10000)) {
    } else {
        for (var i = 0; i < radio.length; i++) {
            if (radio[i].checked) {
                rate = radio[i].value;
            }
        }
        for (var i = 0; i < checkbox.length; i++) {
            if (checkbox[i].checked) {
                chec += checkbox[i].value;
            }
        }
        switch (type) {
            case '1':
                res = count * 1490;
                break;
            case '2':
                if (rate == 1) {
                    res = count * 590;
                }
                if (rate == 2) {
                    res = count * 990;
                }
                break;
            case '3':
                if (chec == 0) {
                    res = count * 1490;
                }
                if (chec == 1) {
                    res = count * 780;
                }
                if (chec == 2) {
                    res = count * 3190;
                }
                if (chec == 12) {
                    res = count * (3190 + 780);
                }
                break;
        }
        document.getElementById('produce').innerHTML = "Стоимость: " + res + " руб.";
    }

    console.log("type");
    console.log(type);
    console.log("count");
    console.log(count);
    console.log("radio");
    console.log(rate);
    console.log("checkbox");
    console.log(chec);
    console.log("result");
    console.log("produce");
}