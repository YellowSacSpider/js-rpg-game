//import {LoadLocalStorage} from './z_localstorage.js';
import {SaveToLocalStorage} from './z_localstorage.js';

function CharClass(id, ClassName, HP, Strength, Inteligence, Dexterity, Charisma, Luck, img)
{
    this.id = id;
    this.ClassName = ClassName;
    this.HP = HP;
    this.Strength = Strength;
    this.Inteligence = Inteligence;
    this.Dexterity = Dexterity;
    this.Charisma = Charisma;
    this.Luck = Luck;
    this.img = img;
}

// zmienne z konstruktorami

let nitroman = new CharClass(0,'Nitroman',50, 3, -5, 3, 5, 10, 'images/nitroman.jpg');
let menel = new CharClass(1,'Menel', 50, 5, 5, 5, -5, 5, 'images/mexicano.png');
let mlecznyczlowiek = new CharClass(2,'Mleczny Człowiek', 50, 10, 3, -5, 10, 0, 'images/mleczny_czlowiek.jpg');

// Tablica z id z htmla
let CharClassArray = ['charclass0', 'charclass1', 'charclass2'];

// Dodanie i zamiana statystyk między obiektami
let player_assign_nitroman = Object.assign({}, player, nitroman);
let player_assign_menel = Object.assign({}, player, menel);
let player_assign_mlecznyczlowiek = Object.assign({}, player, mlecznyczlowiek);

//Iteracja tablicy
for(let i = 0; i < CharClassArray.length; ++i)
{
    let elem = document.getElementById(CharClassArray[i]) //Zapisanie do zmiennej funkcji z id z tablicy
    
    elem.addEventListener("click",function() // Dodanie eventlistenera do buttona dla kazdego id
    {
        if(elem === document.getElementById("charclass0") )
        {
            player = player_assign_nitroman; // Ustawienie obiektu player z wartościami ze zmiennej przechowującej obiekt połączony
        }
        if(elem === document.getElementById("charclass1"))
        {
            player = player_assign_menel;
        }
        if(elem === document.getElementById("charclass2"))
        {
            player = player_assign_mlecznyczlowiek;
        }
        
        player.DMG = 10;
        SaveToLocalStorage() // Zapisanie danych do localstorage
        console.table(player);
    });
}

