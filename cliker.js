var score = 0;
var add = 1;
var oven = 1;
var addOven = 1;
var money = 0;
var addMoney = 1;

function production(){

    score += add;
    document.getElementById('pCanele').innerHTML = score;
}
function refresh(){
    score -= 25;
    document.getElementById('pCanele').innerHTML = score;
}
function refreshMoney(){
    score -= 100;
    document.getElementById('pCanele').innerHTML = score;
}
function buyOven(){
    if(score >= 25){

        oven += addOven;
        add++;
        document.getElementById('four').src='assets/img/four.gif';
        document.getElementById('number').innerHTML = oven;
        refresh();
    }
}
function oseille(){
    money += addMoney;
}
function sell(){
    if (score >= 100){
        oseille();
        document.getElementById('monnaie').innerHTML = money;
        refreshMoney();
    }
}
function time(){
    for (i=0; i<=100; i++) {
        setTimeout(oseille(),60000);
        document.getElementById('monnaie').innerHTML = money;
    }
    
}