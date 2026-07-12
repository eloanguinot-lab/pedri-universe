// =========================
// PEDRI UNIVERSE - SCRIPT
// =========================


// Bouton "Découvrir Pedri"

function scrollBio(){

    document
    .getElementById("bio")
    .scrollIntoView({
        behavior:"smooth"
    });

}



// Animation quand on descend

const elements = document.querySelectorAll(".reveal");


const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = 1;

        }

    });


});


elements.forEach(element=>{

    element.style.opacity = 0;

    observer.observe(element);

});




// =========================
// QUIZ PEDRI
// =========================


let score = 0;


function question1(){

let answer = prompt(
"Dans quel club Pedri joue-t-il ?\n1 - Real Madrid\n2 - FC Barcelone\n3 - Manchester City"
);


if(answer == "2"){

score++;

alert("Bonne réponse 🔥");

}

else{

alert("Raté 😅 La réponse était FC Barcelone");

}


question2();

}



function question2(){


let answer = prompt(

"Quel est le numéro de Pedri au Barça ?\n1 - 8\n2 - 10\n3 - 7"

);


if(answer=="1"){

score++;

alert("Exact ! ⭐");

}

else{

alert("Raté 😅 Le numéro est 8");

}



question3();


}



function question3(){


let answer = prompt(

"Quel est le poste principal de Pedri ?\n1 - Gardien\n2 - Défenseur\n3 - Milieu"

);



if(answer=="3"){

score++;

alert("Bien joué 👏");

}

else{

alert("Raté 😅");

}



alert(
"Ton score final : "
+score+
"/3 ⚽"
);


score=0;


}




// =========================
// EFFET TITRE
// =========================


let title = document.querySelector("header h1");


setInterval(()=>{


title.style.transform="scale(1.05)";


setTimeout(()=>{

title.style.transform="scale(1)";

},300);



},3000);
