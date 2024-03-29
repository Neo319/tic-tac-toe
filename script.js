console.log("ready to roll!");

const gameBoard = (function createBoard ()  {
    const board = [
        ['empty', 'empty', 'empty',],
        ['empty', 'empty', 'empty',],
        ['empty', 'empty', 'empty',],

    ];
    
        const playCell = (row, col, player) => {
            if (board[row][col] === 'empty') {
                board[row][col] = player;
                return true; //successful move
            } else {
                return false; //space is already occupied
            };
            
        };

        const getCellValue = (row, col) => {
            return board[row][col];
        };

        const getBoard = () => {
            return board;
        }

        console.log("board set!");

        return {
            createBoard,
            board,
            playCell, 
            getCellValue,
            getBoard, 
        };
})();

const gameController = (function createGame () {

    const P1 = 'X';
    const CPU = 'O';

    const playerTurn = () => {

        for ( ; ; ) {
            console.log(`Player's turn`);

            let move = prompt("enter move (e.g. '1, 1'), or q to quit:");
            let row = move.charAt(0);
            let col = move.charAt(3);

            if (move === "q") {
                return "quit";
            }

            if (row >= 0 && row <3 && col >= 0 && col < 3) {
                if (gameBoard.getCellValue(row, col) === "empty") {
                    gameBoard.playCell(row, col, 'X');
                    return move; 
                } else {
                    console.log("occupied");
                } 
            } else {
                console.log("invalid move");
            }
            
        }


    };

    const cpuTurn = () => {
        console.log ("CPU's turn");

        //generate random number for row & col, repeat until valid
        const cpuChoice = (() => {

            for (i = 0; i < 100; i++) {

                let row = Math.floor(Math.random() * 3);
                let col = Math.floor(Math.random() * 3);
                console.log (`attempt ${row}, ${col}`);

                if (gameBoard.getCellValue(row, col) === 'empty') {
                    gameBoard.playCell(row, col, 'O');
                    return row + " ," + col; // move made by cpu        
                };
            };
        })();
        return {cpuChoice}; 
    };

    const checkWin = () => {
        let board = gameBoard.board;
        
        //Check columns
        for (i = 0; i < 3; i++) {
            if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] != "empty") {return board[0][1];}
        }
        //Check rows
        for (i = 0; i < 3; i++) {
            if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] != "empty") {return board[i][0];}
        }
        //Check diagonals
        if      (board[0][0] === board[1][1] && board [1][1] === board[2][2] && board[0][0] != "empty") {return board[0][0];}
        else if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board [0][2] != "empty") {return board[0][2];}

        // Check draws
            if (
                !(board[0].includes("empty")) &&
                !(board[1].includes("empty")) &&
                !(board[2].includes("empty"))
                )
             {return "DRAW";}
        

    }

    const reset = () => {
        let board = gameBoard.board;
        board[0] = ["empty", "empty", "empty"]
        board[1] = ["empty", "empty", "empty"]
        board[2] = ["empty", "empty", "empty"]
    }

    const startGame = () => {

        for ( ; ; ) {
            let winner = '';

            let move = playerTurn();
            if (move === "quit") {
                console.log("quit");
                break;}

            if (checkWin() === "DRAW") {
                console.log("DRAW");
                break;
            }
            if (checkWin()) {
                winner = checkWin()
                console.log(`WINNER! ${winner}`)}
                if (winner) {break;}

            cpuTurn();
            console.log(gameBoard.board[0]);
            console.log(gameBoard.board[1]);
            console.log(gameBoard.board[2]);
            if (checkWin() === "DRAW") {
                console.log("DRAW");
                reset();
                break;
            }
            
            if (checkWin()) {
                winner = checkWin();
                console.log(`WINNER! ${winner}`)}
                if (winner) {break;}
        }
        reset();
        console.log("game complete -- enter 'gameController.startGame()' to begin!")
    };

    console.log("enter 'gameController.startGame()' to begin!");



    return {
        startGame,
        checkWin,
    }
})();







