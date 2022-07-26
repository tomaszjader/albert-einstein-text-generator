var cytaty = ['Jestem przekonany, że Bóg nie gra w kości.',
'Nie wiem jaka broń będzie używana podczas Trzeciej Wojny Światowej, ale myślę, że Czwarta będzie na kije i kamienie.',
'Wyobraźnia  jest ważniejsza od wiedzy. Wiedza jest ograniczona, a wyobraźnia otacza cały świat.',
'Nie martw się o złożone problemy matematyczne. Zapewniam Cię, że moje problemy są jeszcze większe.',
'Nauka bez religii jest kulawa. Religia bez nauki jest ślepa.',
'Każdy co jakiś czas musi złożyć ofiarę na ołtarzu głupoty.',
'Wszyscy jesteśmy ignorantami, ale każdy w czymś innym.'];
var h1 = document.querySelector(".h1-js");
var h2 = document.querySelector(".h2-js");
var h1Text ='Albert Einstein text generator';
var h2Text ='Click on the image and explore the thought for today!';
var h1TextPL ='Generator tekstów Alberta Einsteina';
var h2TextPL ='Kliknij w obrazek i poznaj myśl na dziś!';
var div = document.querySelector(".div");
var button = document.querySelector(".button");
console.log(div);
console.log(button);
var cytaty1 = ['I am convinced that God does not play dice',
   "I don't know what weapons will be used in the Third World War, but I think the Fourth will be for sticks and stones.",
   'Imagination is more important than knowledge. Knowledge is limited, while imagination surrounds the whole world.',
   "Don't worry about complex mathematical problems.I assure you that my problems are even bigger.",
   'Science without religion is lame. Religion without science is blind.',
   'Everyone from time to time has to make a sacrifice on the altar of stupidity.',
   "We are all ignorant, but each in something different."];
var language = document.querySelector(".language");
var islanguage = true;
console.log(language);
language.addEventListener('click', function () {
    if(islanguage) {
        h1.innerHTML = h1Text;
        h2.innerHTML = h2Text;
        language.innerHTML = "jezyk";
        islanguage = !islanguage;
    } else {
        h1.innerHTML = h1TextPL;
        h2.innerHTML = h2TextPL;
        language.innerHTML = "language";
        islanguage = !islanguage;
    }
})
button.addEventListener('click', function () {
   button.classList.add('shake-animation')
    if(islanguage){
        div.innerHTML =  cytaty[Math.floor((Math.random() * 7))];
    }else{
        div.innerHTML =  cytaty1[Math.floor((Math.random() * 7))];
    }
    setTimeout(function(){button.classList.remove('shake-animation')}, 1000);
})