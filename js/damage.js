// Funkcje zwracające obliczony damage
import {getRandomNumber} from './xAlghorithm.js'
export {PlayerDamage}
export {EnemyDamage}

function PlayerDamage(){
    let Random = getRandomNumber(1,100);

    if(player.CriticalChance == 100 || Random <= player.CriticalChance){
        return (player.TOTALDMG + player.WEAPONDMG)*2;
    }
    return player.TOTALDMG + player.WEAPONDMG;
}

function EnemyDamage(eDamage){
    return eDamage;
}