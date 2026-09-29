document.querySelectorAll('.tabs button').forEach(function(b){
b.addEventListener('click',function(){
document.querySelectorAll('.tabs button').forEach(function(x){x.classList.remove('on')});
document.querySelectorAll('.pane').forEach(function(x){x.classList.remove('on')});
b.classList.add('on');document.getElementById(b.dataset.p).classList.add('on');
});
});