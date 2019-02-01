var monTexte1 = document.querySelector("#monTexte1");
var monTexte2 = document.querySelector("#monTexte2");
var changerTexte = document.querySelector('#changerTexte');

// changerTexte.onclick = function(){
//         document.getElementById('monTexte1').innerHTML = '';
//         document.getElementById('monTexte2').innerHTML = ' Salut Toi';
//     }

// -------------------------------------------------------------------------------

changerTexte.addEventListener("click", function(){
    monTexte1.innerHTML = "Salut toi";
    monTexte2.innerHTML = "Comment vas tu?";

});

// -------------------------------------------------------------------------------
// changerTexte.addEventListener('click', salutation);

// function salutation(){
//     var monTexte1 = document.querySelector("#monTexte1");
//     var texteSource = monTexte1.getAttribute("innerHTML");

//         switch(texteSource){
//             case "Salut":
//             monTexte1.innerHTML = "Comment vas tu?";
//             break;
//             case "Comment vas tu?":
//             monTexte1.innerHTML = "Je vais bien Merci et toi?";
//             break;
//             case "Je vais bien Merci et toi?":
//             monTexte1.innerHTML = "ça va Merci";
//             break;
//             case "ça va Merci":
//             monTexte1.innerHTML = "A bientôt";
//             break;
//             case "A bientôt" : 
//             monTexte1.innerHTML = "Salut toi";
//         }
// };


