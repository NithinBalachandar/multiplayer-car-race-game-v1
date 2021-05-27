 class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.distance = 0;    
    }


    getPlayerCount(){
        var dbref = database.ref("playerCount");
        dbref.on("value",function(data){
        playerCount = data.val();
        });
    }


    updatePlayerCount(newCount){
        var dbref = database.ref("/");
        console.log(newCount);
        dbref.update({
        playerCount:newCount
        });
    }


    updatePlayerInfo(){
        var dbref = database.ref("players/player"+this.index);
        dbref.set({
        name:this.name,
        distance:this.distance
        })
    }


    static getAllPlayerInformation(){
        var dbref = database.ref("players");
        dbref.on("value", (data)=>{
            allPlayerInfo = data.val();
        });
    }
}