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
     this.counter=0;
    }

    getCurrentPlayerSymbol() {
      if (this.player==1){return 'x';}
      else if(this.player==0){ return 'o';}
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.matrix[rowIndex][columnIndex]==null){
          this.matrix[rowIndex][columnIndex]=this.player;
          this.counter+=1;
          this.player=Math.abs((this.player-1));
          console.log( 'ku'+this.counter);
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
      var tmpVal=this.matrix[rowIndex][colIndex];
       if(tmpVal==1) return 'x';
       else if(tmpVal==0) return 'o';
            else return null;
    }
}

module.exports = TicTacToe;
