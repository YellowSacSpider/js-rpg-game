PlayerStatsActualizator(); // Aktualizuje statystyki po załadowaniu skryptu na stronie

// Funkcja sleep. Po wywołaniu ustawia timer na x milisekund i po odbytym czasie wywołuje funkcje pod nim. Użycie - await sleep(x)
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Zmienne przechowujące życie tymczasowo by nie zabierać z głównego
let TempPlayerHP;
let TempPlayerMAXHP;

let TempEnemyHP;
let TempEnemyMAXHP;

let GlobalObjFight;

// Ustawia walke i zmienne temp
function setFight(playerObj, enemyObj)
{

    LoadLocalStorage() // Ładuje dane z localstorage (1)

	// Ustawia zmienne temp
    TempPlayerHP = playerObj.HP;
    TempPlayerMAXHP = playerObj.MAXHP;

    TempEnemyHP = enemyObj.mHP;
    TempEnemyMAXHP = enemyObj.mHP;
	
    TempEnemyDamage = enemyObj.mDMG

    GlobalObjFight = enemyObj;
	
	// aktualizuje dane wizualne (2)
    document.querySelector(".player-name").innerText = `${playerObj.ClassName}`;
    document.querySelector(".player-lvl").innerText = `Level: ${playerObj.LVL}`;
    document.querySelector("#imgplayer").src = `${playerObj.img}`;

    document.querySelector(".enemy-name").innerText = `${enemyObj.EnemyName}`;
    document.querySelector(".enemy-lvl").innerText = `Level: ${enemyObj.mLVL}`;
    document.querySelector("#imgenemy").src = `${enemyObj.mimg}`;
    
	// Wywołuje walke (3)
    Fight();
}

// Atak gracza
function PlayerAttack(){
    
    TempEnemyHP -= PlayerDamage(); // Odejmuje z Zmiennej tymczasowej zwrotną wartość z funkcji PlayerDamage() znajdującej się w damage.js (1)
    console.log("Zadałeś: " + PlayerDamage() + " HP przeciwnika: " + TempEnemyHP + "/" + TempEnemyMAXHP); //Debug (2)
	
	// Aktualizacja danych wizualnych (3)
    document.querySelector(".player-hpbar").innerText = `${TempPlayerHP}/${TempPlayerMAXHP}`;
    document.querySelector(".enemy-hpbar").innerText = `${TempEnemyHP}/${TempEnemyMAXHP}`;

};

// Atak przeciwnika
function EnemyAttack(){
    
    TempPlayerHP -= EnemyDamage(TempEnemyDamage); // Odejmuje z Zmiennej tymczasowej zwrotną wartość z funkcji EnemyDamage() znajdującej się w damage.js (1)
    console.log("Przeciwnik Zadał: " + EnemyDamage() + " Twoje HP: " + TempPlayerHP + "/" + TempPlayerMAXHP); // Debug (2)
	
	//Aktualizacja danych wizualnych (3)
    document.querySelector(".player-hpbar").innerText = `${TempPlayerHP}/${TempPlayerMAXHP}`;
    document.querySelector(".enemy-hpbar").innerText = `${TempEnemyHP}/${TempEnemyMAXHP}`;

};

// Funkcja asynchroniczna do wykonywania walki
async function Fight(){

// Pętla wykonująca się n razy dopóki ktoś nie wygra.
while(true){
    PlayerAttack() //Inicjalizacja ataku gracza
    
    await sleep(1000); // Czeka 1 sekunde
    
	// Sprawdza czy przeciwnik ma życie mniejsze lub równe zeru
    if (TempEnemyHP <= 0) {

        console.log("Wygrałeś!");
        console.log(GlobalObjFight.mGOLD);
        console.log(GlobalObjFight.mEXP);
        console.log(GlobalObjFight.mREP);
        
        player.GOLD += GlobalObjFight.mGOLD;
        player.EXP += GlobalObjFight.mEXP;
        player.Reputation += GlobalObjFight.mREP;
        
        SaveToLocalStorage();
        break;

    }
    EnemyAttack() //Inicjalizuje atak przeciwnika

    await sleep(1000); // Czeka 1 sekunde

	// Sprawdza czy przeciwnik ma życie mniejsze lub równe zeru
    if (TempPlayerHP <= 0) {

        console.log("Przegrałeś!");
        SaveToLocalStorage();
        break;

    }
    
    }
}

// Funkcja zastępująca pętle (Aktualnie nie używana)

/*const FightTimer = setInterval(() => {
    Fight();
}, 1000);

function stopFight(){
    clearInterval(FightTimer);
}*/