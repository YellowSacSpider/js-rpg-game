import {LoadLocalStorage} from './z_localstorage.js';
import {SaveToLocalStorage} from './z_localstorage.js';
import {ClearLocalStorage} from './z_localstorage.js';
import {ExpCheck} from './level.js';
import {expTable} from './level.js';

LoadLocalStorage();

let AttrCostArray = [1,1,1,1,1,1]; // Do zapisu w local_storage ceny

document.querySelector(".player-name").innerText = `${player.ClassName}`;
document.querySelector(".player-lvl").innerText = `Level: ${player.LVL}`;
document.querySelector(".player-hpbar").innerText = `HP: ${player.HP}`;
document.querySelector(".player-guild").innerText = `Gildia: ${player.Guild}`;
document.querySelector(".player-profession").innerText = `Profesja: ${player.Profession}`;
document.querySelector(".player-abilitypoints").innerText = `Punkty Umiejętności: ${player.AbilityPoints}`;
document.querySelector("#imgplayer").src = `${player.img}`;

let AttrButtonArray = ['hp_add', 'str_add', 'dex_add', 'charisma_add', 'int_add', 'luck_add'];

for(let i = 0; i < AttrButtonArray.length; ++i)
{
    let elem = document.getElementById(AttrButtonArray[i]);
    
    elem.addEventListener("click",function()
    {
        if(elem === document.getElementById("hp_add") )
        {
            if(player.AbilityPoints > 0){
            player.HP += 1;
            player.AbilityPoints -= 1;
            document.querySelector(".player-hpbar").innerText = `HP: ${player.HP}`;
            document.querySelector(".player-abilitypoints").innerText = `Punkty Umiejętności: ${player.AbilityPoints}`;
            console.log(player.HP, 'hp_add')
            console.log(elem)
            }
        }
        if(elem === document.getElementById("str_add"))
        {
            player.HP += 1;
            document.querySelector(".player-hpbar").innerText = `HP: ${player.HP}`;
            console.log(player.HP, 'str_add')
            console.log(elem)
        }
        if(elem === document.getElementById("dex_add"))
        {
            player.HP += 1;
            document.querySelector(".player-hpbar").innerText = `HP: ${player.HP}`;
            console.log(player.HP, 'dex_add')
            console.log(elem)
        }
        if(elem === document.getElementById("charisma_add"))
        {
            player.HP += 1;
            document.querySelector(".player-hpbar").innerText = `HP: ${player.HP}`;
            console.log(player.HP, 'charisma_add')
            console.log(elem)
        }
        if(elem === document.getElementById("int_add"))
        {
            player.HP += 1;
            document.querySelector(".player-hpbar").innerText = `HP: ${player.HP}`;
            console.log(player.HP, 'int_add')
            console.log(elem)
        }
        if(elem === document.getElementById("luck_add"))
        {
            player.HP += 1;
            document.querySelector(".player-hpbar").innerText = `HP: ${player.HP}`;
            console.log(player.HP, 'luck_add')
            console.log(elem)
        }
        SaveToLocalStorage()
    });
}