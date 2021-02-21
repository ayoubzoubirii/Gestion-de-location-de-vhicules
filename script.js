document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
  });

  var menuLinks = document.querySelectorAll(".menu-item");

  Array.from(menuLinks).forEach(elm => {
    elm.addEventListener("click", () => {
      document.querySelector(".container").classList.toggle("change");
    });
  });


    // Defining a function to display error message
    function printError(elemId, hintMsg) {
      document.getElementById(elemId).innerHTML = hintMsg;
  }
  
  // Defining a function to validate form 
  function validateForm() {
      // Retrieving the values of form elements 
      var name = document.contactForm.name.value;
      var email = document.contactForm.email.value;
      var sujet = document.contactForm.sujet.value;
      var message = document.contactForm.message.value;
      
      // Defining error variables with a default value
      var nameErr = emailErr = sujetErr = msgErr = true;
      
      // Validate name
      if(name == "") {
          printError("nameErr", "Entrer votre Nom");
      } else {
          var regex = /^[a-zA-Z\s]+$/;                
          if(regex.test(name) === false) {
              printError("nameErr", "SVP entrer un nom valid");
          } else {
              printError("nameErr", "");
              nameErr = false;
          }
      }
      
      // Validate email address
      if(email == "") {
          printError("emailErr", "enterer votre adresse email ");
      } else {
          // Regular expression for basic email validation
          var regex = /^\S+@\S+\.\S+$/;
          if(regex.test(email) === false) {
              printError("emailErr", "email invalid");
          } else{
              printError("emailErr", "");
              emailErr = false;
          }
      }
      
      // Validate mobile number
      if(sujet == "") {
          printError("sujetErr", "Ecrire le sujet de votre mesage");
      } else {
          var regex = /^[a-zA-Z\s]+$/;
          if(regex.test(sujet) === false) {
              printError("sujetErr", "Sujet invalid");
          } else{
              printError("sujetErr", "");
              sujetErr = false;
          }
      }
  
      if(message == "") {
          printError("msgErr", "Ecrire un mesage");
      } else {
          
          if(message.length<10) {
              printError("msgErr", "Message tres court");
          } else{
              printError("msgErr", "");
              msgErr = false;
          }
        
      }
      // Prevent the form from being submitted if there are any errors
      if((nameErr || emailErr || sujetErr || msgErr ) == true) {
         
          event.preventDefault();
         return false;
      } else {
  
          var infos = "Vous avez entrer les informations suivantes: \n" +
                            "Nom: " + name + "\n" +
                            "Email : " + email + "\n" +
                            "Sujet: " + sujet + "\n" +
                            "Message: " + message + "\n" ;
  
  
  
          alert(infos);
         
      }
  }
  
// reservation start

var vehicle = {
    "moto": {
        "carburant": {
            "electrique": 0.05,
            "essence": 0.14,
        },
        "boite": {
        },
        "prix": 10
    },

    "citadine": {
        "carburant": {
            "electrique": 0.05,
            "hybride": 0.09,
            "essence": 0.14,
            "diesel": 0.21,
        },
        "boite": {
            "manuelle": 0,
        },
        "prix": 12
    },
    
    "compact": {
        "carburant": {
            "hybride": 0.09,
            "essence": 0.14,
            "diesel": 0.21,
        },
        "boite": {
            "manuelle": 0,
        },
        "prix": 14
    },

    "berline": {
        "carburant": {
            "hybride": 0.09,
            "essence": 0.14,
            "diesel": 0.21,
        },
        "boite": {
            "automatique": 0.19,
        },
        "prix": 20
    },

    "utilitaire": {
        "carburant": {
            "diesel": 0.21,
        },
        "boite": {
            "manuelle": 0,
        },
        "prix": 16
    },

    "engin-de-chantier": {
        "carburant": {
            "essence": 0.14,
            "diesel": 0.21,
        },
        "boite": {
            "manuelle": 0,
        },
        "prix": 900
    },

    "camion": {
        "carburant": {
            "diesel": 0.21,
        },
        "boite": {
            "automatique": 0.19,
        },
        "prix": 250
    },
}
// vehicle[type]["carburant"][0]
function showOptions(src) {
    var type = src.value;
    document.getElementById("foloss").innerHTML = "";
    document.getElementById("error").innerHTML = "";
    document.getElementById("carburant").innerHTML = '';
    document.getElementById("boite").innerHTML = '';
    for (var i in vehicle[type]["carburant"]) {
        document.getElementById("carburant").innerHTML += '<label for="' + i + '"><input id="' + i + '" value="' + i + '" type="radio" name="carburant">  ' + i +' </label>';
    }
    for (var i in vehicle[type]["boite"]) {
        document.getElementById("boite").innerHTML += '<label for="' + i + '"><input id="' + i + '" value="' + i + '" type="radio" name="boite" checked>  ' + i +' </label>';
    }
    document.getElementById("howManyDays").innerHTML = '<label for="days">How many days: <input id="days" value="1" type="text" name="days"></label>'
}

function calculFoloss(event) {
    // document.getElementById("test").checked = true
    event.preventDefault();
    document.getElementById("foloss").innerHTML = "";
    document.getElementById("error").innerHTML = "";
    var foloss = 0;
    var shi = document.getElementById("reservation-form");
    if (!shi.vehicle.value) {
        document.getElementById("error").innerHTML += "You should complete the form";
        return false;
    }
    if (!shi.vehicle.value || !shi.carburant.value) {
        document.getElementById("error").innerHTML += "You should complete the form";
        return false;
    }

    if (shi.vehicle.value == "moto") {
        foloss = (vehicle[shi.vehicle.value]["prix"] 
        + vehicle[shi.vehicle.value]["prix"] * vehicle[shi.vehicle.value]["carburant"][shi.carburant.value] ) * shi.days.value;
    } else {
        foloss = (vehicle[shi.vehicle.value]["prix"] 
        + vehicle[shi.vehicle.value]["prix"] * vehicle[shi.vehicle.value]["carburant"][shi.carburant.value] 
        + vehicle[shi.vehicle.value]["prix"] * vehicle[shi.vehicle.value]["boite"][shi.boite.value]) * shi.days.value;
    }
    

    if (/^\D+$/.test(foloss)) {
        document.getElementById("error").innerHTML += "The input should be numbers";
        return false;
    } else if (foloss < 0) {
        document.getElementById("error").innerHTML += "The number of days should be positive";
        return false;
    }

    document.getElementById("foloss").innerHTML += "Le prix est: " + foloss + "€";
}



// reservation end  