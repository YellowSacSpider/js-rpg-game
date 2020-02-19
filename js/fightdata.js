// Obiekt przechowujący walki, statusy i funkcje do wykonania. Każda lokacja ma 10 walk.

let fights = {
    las : {
    Fight0 : {Func : function(){setFight(player, EnemiesObject.szczur, fightsVar);}, fightStatus : "notCompleted"},
    Fight1 : {Func : function(){setFight(player, EnemiesObject.mleczak, fightsVar);}, fightStatus : "notCompleted"},
    Fight2 : {Func : function(){setFight(player, EnemiesObject.dzikipies, fightsVar);}, fightStatus : "notCompleted"},
    Fight3 : {Func : function(){setFight(player, EnemiesObject.wilkolak, fightsVar);}, fightStatus : "notCompleted"}
    }
};



// Tablica przechowująca walki

let FightingObject = 
{
    xFight0 : fights.las.Fight0,
    xFight1 : fights.las.Fight1,
    xFight2 : fights.las.Fight2,
    xFight3 : fights.las.Fight3
};