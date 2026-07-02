var y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
var mb=document.getElementById('menuBtn'), nl=document.getElementById('navlinks');
if(mb&&nl){mb.addEventListener('click',function(){nl.classList.toggle('open');mb.setAttribute('aria-expanded',nl.classList.contains('open'));});}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
