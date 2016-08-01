function Enemy(type, health, attack, num) {
    this.baddy = type;
    this.hp = health;
    this.attack = 1;
    this.num = num;
    this.summon = function() {
        $("body").append("<div id='"+num+"' class='enemy'></div>");
        this.obj = $("#"+this.num);
        var wheredasummon = Math.floor(Math.random()*(580))-20
        this.obj.css({top:wheredasummon});
    }
}

var player = {
    hp: 10,
    attack: 1,
    obj: $(".player")
};

function Update() {
    var a = Number($(".player").css("left").match(/\d+/)[0]);
    var b = Number($(".enemy").css("left").match(/\d+/)[0]);
    var c = Number($(".player").css("top").match(/\d+/)[0]);
    var d = Number($(".enemy").css("top").match(/\d+/)[0]);
    var dx = Math.abs(a-b);
    var dy = Math.abs(c-d);
    if (dx < 60 && dy < 60){
        $(".player").remove();
        $("body").append("GAME OVER!");
    }
    setTimeout(Update, 50);
}

$(document).mousemove(function(e){
    $(".player").css({left:e.pageX-30, top:e.pageY-30});
});

$(document).ready(function(){
    var mcbaddy = new Enemy(1, 1, 1, 1);
    mcbaddy.summon();
    Update();
});
