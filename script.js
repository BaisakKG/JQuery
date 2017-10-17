// Эффекты jQuery
function addEffect1() {
    $("#kv1:hidden").show();
}

function addEffect2() {
    $("#kv2:hidden").slideDown("slow");
}

function addEffect3() {
    $("#kv3:hidden").show().animate({
        fontSize: "36px"
    }, 3000);
}

// Селекторы jQuery
function addStyle1() {
    $("#st1").css("background", "red");
}

function addStyle2() {
    $("p.withBorder").css("border", "1px solid blue");
}

function addStyle3() {
    $("#st1, #st3").css("fontWeight", "bold");
}

// Селекторы форм в jQuery

function addColor1() {
    $(":text, :password").css("background", "red");
}

function addColor2() {
    $(":button").css("background", "blue");
}

// Фильтры jQuery

function addColor3() {
    $("tr:even").css("background-color", "grey");
    $("tr:odd").css("background-color", "blue");
    $("td:gt(5)").css("color", "yellow");
}