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
        playCell(0, 0, 'X');


        return {
            
            playCell, 
            getCellValue,
            getBoard, 
        };
})();

const players = (function createPlayers () {
    const P1 = '?'
})();







