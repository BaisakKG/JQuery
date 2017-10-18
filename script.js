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

// jQuery - CSS
function chang(s) {
    $('.selected').removeClass('selected');
    $(s).addClass('selected');
}
// Урок 5. Методы для работы с html

function addHtml() {
    var tp1 = $("#p1").text();
    $("#p2").text(tp1);
}

function addYellowSquare() {
    $("#red_sk").prepend("<div class='yellow_square'></div>");
}

function addSpisok() {
    var jq = $('#user_text').val();
    $('#jq').append('<li>' + jq + '</li>');
}

// Урок 6. Методы для работы с атрибутами и фильтрами
function addBoard() {
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            if ((i % 2 == 0 && j % 2 == 0) || (i % 2 != 0 && j % 2 != 0)) {
                $("#board").append('<div class="s_kl"></div>');
            } else $("#board").append('<div class="t_kl"></div>');
        }
    }
}

function addDraughts() {
    $("div").filter(".t_kl").slice(0, 12).append('<img src="smile.jpg">');
    $("div").filter(".t_kl").slice(20, 32).append('<img src="ungry.jpg">');
}