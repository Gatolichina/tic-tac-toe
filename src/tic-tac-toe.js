class TicTacToe {
    constructor() {
    this.matrix=new Array(3);
    for(var i=0; i<3; i++){
      var temp=new Array(3);
      this.matrix[i]=temp;
      for(var j=0; j<3; j++){
       this.matrix[i][j] =null;
      }
    }
     this.player=1;
    }

    getCurrentPlayerSymbol() {
      if (this.player==1){return 'x';}
      else if(this.player==0){ return 'o';}
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.matrix[rowIndex][columnIndex]==null){
          this.matrix[rowIndex][columnIndex]=this.player;
          this.player=Math.abs((this.player-1));
        }
    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {
      return this.matrix[rowIndex][colIndex];

    }
}

module.exports = TicTacToe;
