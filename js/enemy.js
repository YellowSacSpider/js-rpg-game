let enemy = {
    id : 0,
    EnemyName : "",
    HP : 0,
    MAXHP : 0,
    DMG : 0,
};

// Konstruktor przeciwnika
function EnemyGenerator(mid, EnemyName, mLVL, mHP, mDMG, mEXP, mGOLD, mREP, mimg)
{
    this.mid = mid;
    this.EnemyName = EnemyName;
    this.mLVL = mLVL;
    this.mHP = mHP;
    this.mDMG = mDMG;
    this.mEXP = mEXP;
    this.mGOLD = mGOLD;
    this.mREP = mREP;
    this.mimg = mimg;
}

// Tworzy obiekt z kluczami wraz z konstruktorem
EnemiesObject = {

//Potwory z areny----------------------------------------------------------//
    szczur: new EnemyGenerator(0, "Szczur", 1, 50, 1, 10, 1, 1, 'images/knurstraszny.jpg'),
    mleczak: new EnemyGenerator(1, "Mleczak", 5,  200, 1, 50, 10, 5, 'images/majorstraszny.jpg'),
    dzikipies: new EnemyGenerator(2, "Dziki Pies", 3, 150, 1, 25, 5, 10, 'images/majorstraszny.jpg'),
    wilkolak: new EnemyGenerator(3, "Wilkołak", 10, 300, 1, 200, 100, 50, 'images/majorstraszny.jpg')
//------------------------------------------------------------------------//

};

//let szczur = new EnemyGenerator(0, "Szczur", 50, 1);
//let mleczak = new EnemyGenerator(0, "Mleczak", 200, 1);
//let dzikipies = new EnemyGenerator(0, "Dziki Pies", 150, 1);
//let wilkolak = new EnemyGenerator(0, "Wilkołak", 300, 1);

//let EnemiesArray = [szczur, mleczak, dzikipies, wilkolak];

//console.table(EnemiesObject.wilkolak);