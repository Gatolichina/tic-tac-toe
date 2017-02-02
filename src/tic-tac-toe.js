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
          if (this.player==1)this.matrix[rowIndex][columnIndex]='x';
          else this.matrix[rowIndex][columnIndex]='o';
          this.counter+=1;
          this.player=Math.abs((this.player-1));
        }
    }

    isFinished() {
      if(this.getWinner()!=null||this.isDraw()==true) return true;
      else return false;

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
      if ((line1=='ooo')||(line2=='ooo')||(line3=='ooo')||(col1=='ooo')||(col2=='ooo')||(col3=='ooo')||(cross1=='ooo')||(cross2=='ooo'))return 'o';
      else if ((line1=='xxx')||(line2=='xxx')||(line3=='xxx')||(col1=='xxx')||(col2=='xxx')||(col3=='xxx')||(cross1=='xxx')||(cross2=='xxx')) return 'x';
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
      if((this.noMoreTurns()==true)&&(this.getWinner()==null)) return true;
      else return false;


    }

    getFieldValue(rowIndex, colIndex) {
      var tmpVal=this.matrix[rowIndex][colIndex];
       if(tmpVal!=null) return tmpVal;
       //else if(tmpVal==0) return 'o';
            else return null;
    }
}

module.exports = TicTacToe;
