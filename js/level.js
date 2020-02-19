function ExpCheck()
{
    if(player.EXP >= player.MAXEXP)
    {
        ++player.LVL;
        player.MAXEXP = (player.MAXEXP * 1.25) * player.LVL;
    }
}