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
            
        
            while(true) {

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

    const startGame = () => {

        playerTurn();
        console.log(gameBoard.board);
        cpuTurn();
        console.log(gameBoard.board);
    };

    console.log("enter 'gameController.startGame()' to begin!");



    return {
        startGame,
    }
})();







