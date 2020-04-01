/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += 20;
        console.log('ok: ' + this.left);
    }
    this.moveBottom = function(){
        this.top += 20;
        console.log('ok: ' + this.top);
    }
    this.moveLeftNguoc = function(){
        this.left -= 20;
        console.log('ok: ' + this.left);
    }
    this.moveTopNguoc = function(){
        this.top -= 20;
        console.log('ok: ' + this.top);
    }

}

var hero = new Hero('pikachu.png', 20, 30, 200);

function start(){
    if((hero.left < (window.innerWidth - hero.size)) && hero.top===20){
        console.log(hero.left);
        hero.moveRight();

    }
    else if(hero.top < window.innerHeight - hero.size && hero.left>window.innerWidth - hero.size){
        hero.moveBottom();
    }else if(hero.left > window.innerWidth - hero.size){
        hero.moveLeftNguoc();
    }
    else if(hero.left > 20){
        hero.moveLeftNguoc();
    }else {
        hero.moveTopNguoc();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    // document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 100)

}

start();