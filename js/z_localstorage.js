//Funkcja zapisywania i wczytywania localstorage


// Przechowują pobrane wartości
let LocalStorage_id;
let LocalStorage_LVL;
let LocalStorage_EXP;
let LocalStorage_MAXEXP;
let LocalStorage_GOLD;
let LocalStorage_ClassName;
let LocalStorage_HP;
let LocalStorage_MAXHP;
let LocalStorage_DMG
let LocalStorage_WEAPONDMG;
let LocalStorage_TOTALDMG;
let LocalStorage_Strength;
let LocalStorage_Inteligence;
let LocalStorage_Dextertity;
let LocalStorage_Charisma;
let LocalStorage_Luck;
let LocalStorage_Reputation;
let LocalStorage_img;

function SaveToLocalStorage(){
    PlayerStatsActualizator(); // Aktualizuje statystyki gracza
    
	// Zapisuje statystyki gracza do localstorage
    localStorage.setItem("id", player.id);
    localStorage.setItem("LVL", player.LVL);
    localStorage.setItem("EXP", player.EXP);
    localStorage.setItem("MAXEXP", player.MAXEXP);
    localStorage.setItem("GOLD", player.GOLD);
    localStorage.setItem("ClassName", player.ClassName);
    localStorage.setItem("HP", player.HP);
    localStorage.setItem("MAXHP", player.MAXHP);
    localStorage.setItem("DMG", JSON.stringify(player.DMG));
    localStorage.setItem("WEAPONDMG", JSON.stringify(player.WEAPONDMG));
    localStorage.setItem("TOTALDMG", JSON.stringify(player.TOTALDMG));
    localStorage.setItem("Strength", player.Strength);
    localStorage.setItem("Inteligence", player.Inteligence);
    localStorage.setItem("Dextertity", player.Dexterity);
    localStorage.setItem("Charisma", player.Charisma);
    localStorage.setItem("Luck", player.Luck);
    localStorage.setItem("Reputation", player.Reputation);
    localStorage.setItem("img", player.img);

    // Zapisanie stanu dungeonów
}


function LoadLocalStorage(){
	
	// Zapisuje do zmiennych wartości z localstorage
    LocalStorage_id = localStorage.getItem("id");
    LocalStorage_LVL = localStorage.getItem("LVL");
    LocalStorage_EXP = localStorage.getItem("EXP");
    LocalStorage_MAXEXP = localStorage.getItem("MAXEXP");
    LocalStorage_GOLD = localStorage.getItem("GOLD");
    LocalStorage_ClassName = localStorage.getItem("ClassName");
    LocalStorage_HP = localStorage.getItem("HP");
    LocalStorage_MAXHP = localStorage.getItem("MAXHP");
    LocalStorage_DMG = localStorage.getItem("DMG");
    LocalStorage_WEAPONDMG = localStorage.getItem("WEAPONDMG");
    LocalStorage_TOTALDMG = localStorage.getItem("TOTALDMG");
    LocalStorage_Strength = localStorage.getItem("Strength");
    LocalStorage_Inteligence = localStorage.getItem("Inteligence");
    LocalStorage_Dextertity = localStorage.getItem("Dextertity");
    LocalStorage_Charisma = localStorage.getItem("Charisma");
    LocalStorage_Luck = localStorage.getItem("Luck");
    LocalStorage_Reputation = localStorage.getItem("Reputation");
    LocalStorage_img = localStorage.getItem("img");

	// Ustawia statystyki gracza ze zmiennych
    player.id = LocalStorage_id;
    player.LVL = LocalStorage_LVL;
    player.EXP = LocalStorage_EXP;
    player.MAXEXP = LocalStorage_MAXEXP;
    player.GOLD = LocalStorage_GOLD;
    player.ClassName = LocalStorage_ClassName;
    player.HP = LocalStorage_HP;
    player.MAXHP = LocalStorage_MAXHP;
    player.DMG = LocalStorage_DMG;
    player.WEAPONDMG = LocalStorage_WEAPONDMG;
    player.TOTALDMG = LocalStorage_TOTALDMG;
    player.Strength = LocalStorage_Strength;
    player.Inteligence = LocalStorage_Inteligence;
    player.Dexterity = LocalStorage_Dextertity;
    player.Charisma = LocalStorage_Charisma;
    player.Luck = LocalStorage_Luck;
    player.Reputation = LocalStorage_Reputation;
    player.img = LocalStorage_img;

    PlayerStatsActualizator(); // Aktualizuje Statystyki gracza

}


// Zapisuje a następnie wczytuje
function SaveAndLoadLocalStorage(){
    SaveToLocalStorage();
    LoadLocalStorage();
}

// Usuwa cały localstorage
function ClearLocalStorage(){
    localStorage.removeItem("id");
    localStorage.removeItem("LVL");
    localStorage.removeItem("EXP");
    localStorage.removeItem("MAXEXP");
    localStorage.removeItem("GOLD");
    localStorage.removeItem("ClassName");
    localStorage.removeItem("HP");
    localStorage.removeItem("MAXHP");
    localStorage.removeItem("DMG");
    localStorage.removeItem("WEAPONDMG");
    localStorage.removeItem("TOTALDMG");
    localStorage.removeItem("Strength");
    localStorage.removeItem("Inteligence");
    localStorage.removeItem("Dextertity");
    localStorage.removeItem("Charisma");
    localStorage.removeItem("Luck");
    localStorage.removeItem("Reputation");
    localStorage.removeItem("img");
}