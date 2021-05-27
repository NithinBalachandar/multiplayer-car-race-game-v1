class Game {
    constructor(){

    }

    getState(){
        var dbref = database.ref("gameState");
        dbref.on("value",function(data){
            gameState = data.val();
        });
    }
    updateState(newState){
        var dbref = database.ref("/");
        dbref.update({
            gameState:newState
        });
    }

    start(){
        console.log(gameState);
        if(gameState === 0){
            //create form and player
            playerObj = new Player();
            playerObj.getPlayerCount();
            formObj = new Form();
            formObj.display();
        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        cars = [car1,car2,car3,car4]
        car1.addImage(car1img);
        car2.addImage(car2img);
        car3.addImage(car3img);
       car4.addImage(car4img);
    }

    play(){
        formObj.hide();
        textSize(30);
        text("Game Started", displayWidth/2, 100);
        Player.getAllPlayerInformation(); // this function is static so using class name not Obj name
        //console.log(allPlayerInfo);

        if(allPlayerInfo !== undefined){
            background(ground);
            image(track, 0, displayHeight*-4, displayWidth, displayHeight*5);
            var carIndex = 0;
            var carx = 300;
            var cary = 200;
            for(var eachPlayer in allPlayerInfo){
                carIndex = carIndex+1;
                carx = carx+250;
                cary = displayHeight-allPlayerInfo[eachPlayer].distance;
                cars[carIndex-1].x = carx;
                cars[carIndex-1].y = cary;
                if(carIndex === playerObj.index){// activly finding which car is yours
                    //cars[carIndex-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[carIndex-1].y;
                }
            }
        }
        if(keyWentDown(UP_ARROW) && playerObj.index !== null){
            playerObj.distance = playerObj.distance+50;
            playerObj.updatePlayerInfo();
            console.log(playerObj.distance);
        }
        if(playerObj.distance > 5200){
            gameState = 2;
            playerObj.name = "name1";
            playerObj.updatePlayerInfo();
        }
        drawSprites();

    }

}