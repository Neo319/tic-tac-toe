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

        

        //example move
        // playCell(0, 0, 'X');


        return {
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
        console.log(`Player's turn`);
        console.log(gameBoard.getBoard());

        let move = prompt("enter move (e.g. '1, 1'), or q to quit:");
        let row = move.charAt(0);
        let col = move.charAt(3);

        gameBoard.playCell(row, col, 'X');

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
        // console.log(gameBoard.board[0][0])
        let board = gameBoard.board;

        // if ((board[0][0] === "X") && (board[0][1] === "X") && (board[0][2] === "X" )) winner = "X" 
        // else if ((board[0][0] === "O") && (board[0][1] === "O") && (board[0][2] === "O" )) winner = "O"
        
        // else if ((board[1][0] === "X") && (board[1][1] === "X") && (board[1][2] === "X" )) winner = "X" 
        // else if ((board[1][0] === "O") && (board[1][1] === "O") && (board[1][2] === "O" )) winner = "O"

        // else if ((board[2][0] === "X") && (board[2][1] === "X") && (board[2][2] === "X" )) winner = "X" 
        // else if ((board[2][0] === "O") && (board[2][1] === "O") && (board[2][2] === "O" )) winner = "O"

        // else if ((board[0][0] === "X") && (board[1][0] === "X") && (board[2][0] === "X" )) winner = "X" 
        // else if ((board[0][0] === "O") && (board[1][0] === "O") && (board[2][0] === "O" )) winner = "O"

        
        
        //Check rows
        for (i = 0; i < 3; i++) {
            if (board[0][i] === board[1][i] === board[2][i] && board[0][i] != "empty") {return board[0][1];}
        }

        //Check columns
        for (i = 0; i < 3; i++) {
            if (board[i][0] === board[i][1] === board[i][2] && board[i][0] != "empty") {return board[i][0];}
        }

        //Check diagonals
        if (board[0][0] === board[1][1] === board[2][2] && board[0][0] != "empty") {return board[0][0];}
        else if (board[0][2] === board[1][1] === board[2][0] && board [0][2] != "empty") {return board[0][2];}

        else return false;

       


    }

    const startGame = () => {

        // playerTurn();
        // console.log(gameBoard.board);
        // cpuTurn();
        // console.log(gameBoard.board);

        for ( ; ; ) {
            playerTurn();
            // console.log(gameBoard.board);
            if (checkWin()) {console.log(`WINNER! ${checkWin()}`)}

            cpuTurn();
            console.log(gameBoard.board[0]);
            console.log(gameBoard.board[1]);
            console.log(gameBoard.board[2]);
            if (checkWin()) {console.log(`WINNER! ${checkWin()}`)}

            
        }
    };

    console.log("enter 'gameController.startGame()' to begin!");



    return {
        startGame,
        checkWin,
    }
})();







