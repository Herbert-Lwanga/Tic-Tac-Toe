//Tic-Tac-Toe

const game =(function() {
    let gameBoard = ["","","","","","","","",""];
    let gameNumber = 1;
    let gameWon = false;
    let gameDrawn = false;
    let playerOnePicker = false;
    let playerOneChoice = "O";
    let playerTwoChoice = "X";
    const init = (num) => {
       
        playing(num);
        
        console.log(gameBoard);
    };

    const pickerX = () => {
        playerOnePicker = true;
        playerOneChoice = "X";
        playerTwoChoice = "O";
        console.log(`player one choice : ${playerOneChoice}\nplayer two choice : ${playerTwoChoice}`)

    }

    const pickerO = () => {
        playerOnePicker = true;
        playerOneChoice = "O";
        playerTwoChoice = "x";
        console.log(`player one choice : ${playerOneChoice}\nplayer two choice : ${playerTwoChoice}`)
    }

    const playerOne = (index) => {

        gameBoard[index] = playerOneChoice;
        render();
    };

    const playerTwo = (index) => {
        gameBoard[index] = playerTwoChoice;
        render();
    };

    const render = () => {
        domCache();
        let index = 0;
        gameBoard.forEach((item)=>{
            container.children[index].textContent = item;
            index++;
        });
    };

    const playing = (index) => {
        
        if(gameNumber <= 9 && gameWon == false && playerOnePicker == true && gameDrawn == false){
            if(gameNumber % 2 == 0){
                playerTwo(index);
            }else{
                playerOne(index);
            }
            
            console.log(`Game Number:${gameNumber}`);
            
            gameNumber++;
            xWinChecker();
            oWinChecker();
            gameDrawnChecker();
            console.log(`Game won : ${gameWon}`);  
        };    
    };

    let domCache = () => {
        return container = document.querySelector(".game-display");
    };

    const restart = () => {
        domCache();
        for(let i = 0; i < 9; i++){
            container.children[i].classList.remove("xwin");
            container.children[i].classList.remove("owin");
        }
        gameNumber = 1;
        gameBoard = ["","","","","","","","",""];
        render();
        gameWon = false;
        playerOnePicker = false;
        
        console.log(gameBoard);
    };

    const gameDrawnChecker = () => {
        if(gameNumber == 9 && gameWon == false){
            gameDrawn =true;
            console.log(`Game Drawn: ${gameDrawn}`)
        }
    }

    const xWinChecker = () => {
        domCache();

        if(gameBoard[0] == "X" && gameBoard[1] == "X"&& gameBoard[2] == "X"){
            gameWon = true;
            for(let i = 0 ; i < 3 ; i++){
                container.children[i].classList.add("xwin");
            };
        }else if(gameBoard[3] == "X" && gameBoard[4] == "X" && gameBoard[5] == "X"){
            gameWon = true;
            for(let i = 3 ; i < 6 ; i++){
                container.children[i].classList.add("xwin");
            };
        }else if(gameBoard[6] == "X" && gameBoard[7] == "X" && gameBoard[8] == "X"){
            gameWon = true;
            for(let i = 6 ; i < 9 ; i++){
                container.children[i].classList.add("xwin");
            };
        }else if(gameBoard[0] == "X" && gameBoard[3] == "X" && gameBoard[6] == "X"){
            gameWon = true;
            container.children[0].classList.add("xwin");
            container.children[3].classList.add("xwin");
            container.children[6].classList.add("xwin");
        }else if(gameBoard[1] == "X" && gameBoard[4] == "X" && gameBoard[7] == "X"){
            gameWon = true;
            container.children[1].classList.add("xwin");
            container.children[4].classList.add("xwin");
            container.children[7].classList.add("xwin");
        }else if(gameBoard[2] == "X" && gameBoard[5] == "X" && gameBoard[8] == "X"){
            gameWon = true;
            container.children[2].classList.add("xwin");
            container.children[5].classList.add("xwin");
            container.children[8].classList.add("xwin");
        }else if(gameBoard[0] == "X" && gameBoard[4] == "X" && gameBoard[8] == "X"){
            gameWon = true;
            container.children[0].classList.add("xwin");
            container.children[4].classList.add("xwin");
            container.children[8].classList.add("xwin");
        }else if(gameBoard[2] == "X" && gameBoard[4] == "X" && gameBoard[6] == "X"){
            gameWon = true;
            container.children[2].classList.add("xwin");
            container.children[4].classList.add("xwin");
            container.children[6].classList.add("xwin");        
        };
    };

    const oWinChecker = () => {
        domCache();

        if(gameBoard[0] == "O" && gameBoard[1] == "O"&& gameBoard[2] == "O"){
            gameWon = true;
            for(let i = 0 ; i < 3 ; i++){
                container.children[i].classList.add("owin");
            };
        }else if(gameBoard[3] == "O" && gameBoard[4] == "O" && gameBoard[5] == "O"){
            gameWon = true;
            for(let i = 3 ; i < 6 ; i++){
                container.children[i].classList.add("owin");
            };
        }else if(gameBoard[6] == "O" && gameBoard[7] == "O" && gameBoard[8] == "O"){
            gameWon = true;
            for(let i = 6 ; i < 9 ; i++){
                container.children[i].classList.add("owin");
            };
        }else if(gameBoard[0] == "O" && gameBoard[3] == "O" && gameBoard[6] == "O"){
            gameWon = true;
            container.children[0].classList.add("owin");
            container.children[3].classList.add("owin");
            container.children[6].classList.add("owin");
        }else if(gameBoard[1] == "O" && gameBoard[4] == "O" && gameBoard[7] == "O"){
            gameWon = true;
            container.children[1].classList.add("owin");
            container.children[4].classList.add("owin");
            container.children[7].classList.add("owin");
        }else if(gameBoard[2] == "O" && gameBoard[5] == "O" && gameBoard[8] == "O"){
            gameWon = true;
            container.children[2].classList.add("owin");
            container.children[5].classList.add("owin");
            container.children[8].classList.add("owin");
        }else if(gameBoard[0] == "O" && gameBoard[4] == "O" && gameBoard[8] == "O"){
            gameWon = true;
            container.children[0].classList.add("owin");
            container.children[4].classList.add("owin");
            container.children[8].classList.add("owin");
        }else if(gameBoard[2] == "O" && gameBoard[4] == "O" && gameBoard[6] == "O"){
            gameWon = true;
            container.children[2].classList.add("owin");
            container.children[4].classList.add("owin");
            container.children[6].classList.add("owin");        
        };
    };
    return {init,restart,pickerX,pickerO};

})();


