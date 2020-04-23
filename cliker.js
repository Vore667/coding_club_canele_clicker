var score = 0;
var add = 1;
var oven = 1;
var addOven = 1;

function production(){

    score += add;
    document.getElementById('pCanele').innerHTML = score;
}
function refresh(){
    score -= 25;
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
