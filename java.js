function mudanca(){
    var m1 = document.body
    m1.classList.toggle("darkmode")
    if(slider-round === checked)
    {
      color = rgba(236,158,255,1)
    }
  }
  
  function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
    const elts = {
      text1: document.getElementById("text1"),
      text2: document.getElementById("text2")
  };
  
  (function(){
    var element=document.getElementsByTagName('p');
  setInterval(function(){
      if((element[0].clientWidth)==380) {
        element[1].classList.add('f1');
      }
    
  }, 1000)
  }());
  function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,"");
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); 
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); 
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('telefone').onkeyup = function(){
		mascara( this, mtel );
	}
}