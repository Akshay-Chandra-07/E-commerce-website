const bar = document.getElementById('bars');
const cls = document.getElementById('cls');
const nav = document.getElementById('navi');
const mob = document.getElementById('mobile');

if(bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
        mob.classList.add('disap'); 
    });
}
if(cls){
    cls.addEventListener('click',()=>{
        nav.classList.remove('active');
        mob.classList.remove('disap');
    });
}

