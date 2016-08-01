var Collision = function(p1, p2) {
  	var dis = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
  	return dis < 60 ? true : false;
}

function Enemy(type, health, attack, num) {
    this.baddy = type;
    this.hp = health;
    this.attack = 1;
    this.num = num;
    this.summon = function(times) {
        $("body").append("<div id='"+num+"' class='enemy'></div>");
        this.obj = $("#"+this.num);
        this.obj.css({left:80, top:80});
    }
}

var player = {
    hp: 10,
    attack: 1,
    obj: $(".player")
};

$(document).mousemove(function(e){
    $(".player").css({left:e.pageX-30, top:e.pageY-30});
    if (Collision($(".player"), $("#1"))){
        $("body").append("1");
    }
});

$(document).ready(function(){
    var mcbaddy = new Enemy(1, 1, 1, 1);
    mcbaddy.summon(1);

});
