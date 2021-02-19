document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
  });

  var menuLinks = document.querySelectorAll(".menu-item");

  Array.from(menuLinks).forEach(elm => {
    elm.addEventListener("click", () => {
      document.querySelector(".container").classList.toggle("change");
    });
  });


  function contact(){
    var te=0;
    var na = document.getElementById("name");
    var vna=/^[A-Z a-z]{3,}$/;
    if(na.value==""){
      alert( "masssege");
      te=1;
 
    }else if (vna.test(na.value)==false){
      alert( "masssege111");
      te=1;
    }
  }
  /*function contact(){
    var tee=0;
    var ema = document.getElementById("email");
    var vnaa=/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
    if(ema.value==""){
      alert( "masssege");
      tee=1;
 
    }else if (vnaa.test(ema.value)==false){
      alert( "masssege111");
      tee=1;
    }
  }
  /*function contact(){
    var teee=0;
    var num = document.getElementById("numbre");
    var vnaaa=/^[0-9]{10,}$/;
    if(num.value==""){
      alert( "masssege");
      teee=1;
 
    }else if (vnaaa.test(num.value)==false){
      alert( "masssege111");
      teee=1;
    }
  }
   function contact(){
    var teeee=0;
    var msg = document.getElementById("message");
    var msge=/^[A-Z a-z]{20,}$/;
    if(msg.value==""){
      alert( "masssege");
      teeee=1;
 
    }else if (msge.test(msg.value)==false){
      alert( "masssege111");
      teeee=1;
    }
  } */
  