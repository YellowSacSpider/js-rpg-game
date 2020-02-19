let fightsVar;

// Pętla iterująca tablice i sprawdzajaca która walka jest zakończona lub nie
for(let i = 0; i < Object.keys(fights.las).length; ++i){
    fightsVar = FightingObject; // Zmienna przechowująca obiekty z kluczami
        if(fightsVar.fightStatus === "notCompleted"){ // Sprawdzenie czy klucz z obiektem ma status walki "notCompleted"
            console.log("I found not completed fight!");
            console.log(fightsVar);
            fightsVar.Func(); // Jeżeli tak to wykonaj funkcje z klucza
            break;
        }
        else{
            console.log("Completed"); // Jeżeli nie, nie rób nic.
            console.log(fightsVar);
        }
}