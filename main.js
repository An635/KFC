let menu_sec = document.getElementById('menu_sec');
let left_arrow = document.getElementById('left_arrow');
let right_arrow = document.getElementById('right_arrow');

right_arrow.addEventListener('click', function(){
    menu_sec.scrollLeft += 117;
})

left_arrow.addEventListener('click', function(){
    menu_sec.scrollLeft -= 110;
})

let videos = document.getElementsByTagName('video')[0];
let plays = document.getElementsByClassName('play')[0];
let pauses = document.getElementsByClassName('pause')[0];
let screen = document.getElementsByClassName('screen')[0];

plays.addEventListener('click', function(){
    videos.play();
    plays.style.display = 'none';
    screen.style.display = 'none';
    pauses.style.display = 'flex';
})

pauses.addEventListener('click', function(){
    videos.pause();
    plays.style.display = 'flex';
    screen.style.display = 'flex';
    pauses.style.display = 'none';
})

videos.addEventListener('ended', function(){
    plays.style.display = 'flex';
    screen.style.display = 'flex';
    pauses.style.display = 'none';
})


const dataload = function(){
    const sec_title = document.getElementById('sec_title');
    const h6_dot = document.getElementsByTagName('h6');

    setTimeout(function (){
        sec_title.innerHTML =' BARGAIN <br>BUCKET MENU <br>CAMPAIGN';
        h6_dot[1].classList.add('head_dots_main');
        h6_dot[2].classList.remove('head_dots_main');
        h6_dot[3].classList.remove('head_dots_main');
        h6_dot[4].classList.remove('head_dots_main');
    }, 0000)
    setTimeout(function (){
        sec_title.innerHTML ='BARGAIN <br>FRIES MENU <br>CAMPAIGN';
        h6_dot[1].classList.remove('head_dots_main');
        h6_dot[2].classList.add('head_dots_main');
        h6_dot[3].classList.remove('head_dots_main');
        h6_dot[4].classList.remove('head_dots_main');
    }, 3000)
    setTimeout(function (){
        sec_title.innerHTML ='BARGAIN <br>BURGEAR MENU <br>CAMPAIGN';
        h6_dot[1].classList.remove('head_dots_main');
        h6_dot[2].classList.remove('head_dots_main');
        h6_dot[3].classList.add('head_dots_main');
        h6_dot[4].classList.remove('head_dots_main');
    },6000)
    setTimeout(function (){
        sec_title.innerHTML ='BARGAIN <br>CHICKENS MENU <br>CAMPAIGN';
        h6_dot[1].classList.remove('head_dots_main');
        h6_dot[2].classList.remove('head_dots_main');
        h6_dot[3].classList.remove('head_dots_main');
        h6_dot[4].classList.add('head_dots_main');
    },9000)
}

setInterval(dataload, 12000);
dataload()