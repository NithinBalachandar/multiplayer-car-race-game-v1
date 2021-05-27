class Form {
    constructor(){
        this.title = createElement("h2");
        this.textInput = createInput("name");
        this.button = createButton("Play");
        this.greetings = createElement("h3");
        this.reset = createButton("Reset");
    }
    display(){
        console.log("display Started");
        this.title.html("car racing game");
        this.title.position(displayWidth/2, 100);
        this.textInput.position(displayWidth/2,displayHeight/2);
        this.button.position(displayWidth/2,displayHeight/2+50);
        this.button.mousePressed(
            () =>{
                this.textInput.hide();
                this.button.hide();
                this.greetings.html("hello "+this.textInput.value());
                this.greetings.position(displayWidth/2,displayHeight/2);
                playerCount = playerCount+1;
                playerObj.name = this.textInput.value();
                playerObj.index = playerCount;
                console.log(playerCount);
                playerObj.updatePlayerCount(playerCount);
                playerObj.updatePlayerInfo();
                //update player information in database
            }
        );
        this.reset.position(displayWidth-150,200);
        this.reset.mousePressed(
            () =>{
                gameObj.updateState(0);
                playerObj.updatePlayerCount(0);
            }
        );
    }
    hide(){
        this.textInput.hide();
        this.button.hide();
        this.greetings.hide();
    }
}