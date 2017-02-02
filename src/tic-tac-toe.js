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
        }
    }

    isFinished() {

    }

    getWinner() {
      var line1=this.matrix[0][0]+this.matrix[0][1]+this.matrix [0][2];
      var line2=this.matrix[1][0]+this.matrix[1][1]+this.matrix [1][2];
      var line3=this.matrix[2][0]+this.matrix[2][1]+this.matrix [2][2];
      var col1=this.matrix[0][0]+this.matrix[1][0]+this.matrix [2][0];
      var col2=this.matrix[0][1]+this.matrix[1][1]+this.matrix [2][1];
      var col3=this.matrix[0][2]+this.matrix[1][2]+this.matrix [2][2];
      var cross1=this.matrix[0][0]+this.matrix[1][1]+this.matrix [2][2];
      var cross2=this.matrix[2][0]+this.matrix[1][1]+this.matrix [0][2];
      if ((line1==0)||(line2==0)||(line3==0)||(col1==0)||(col2==0)||(col3==0)||(cross1==0)||(cross2==0)){return 0;}
      else if ((line1==3)||(line2==3)||(line3==3)||(col1==3)||(col2==3)||(col3==3)||(cross1==3)||(cross2==3)){return 1;}
           else return null;
    }

    noMoreTurns() {
      if(this.counter==9) {
        return true;
      }
      else {
        return false; }
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
