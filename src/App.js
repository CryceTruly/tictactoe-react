import React from 'react';
import './App.css';
import ChoosePlayer from './ChoosePlayer';




class App extends React.Component {

  state={
    boxes:Array(9).fill(null),
    player:null,
    winner:null,
  }

 handleClick=i=>{
   if(this.state.player  && !this.state.winner){
  const newBox=this.state.boxes;
  let newPlayer=this.state.player==='x'?'0':'x';
  if(this.state.boxes[i]===null){

  newBox[i]=this.state.player;
  this.setState({boxes:newBox,player:newPlayer}); 
  }

  this.checkWinner();

}
  
}

checkWinner=()=>{
  let lines=[
    ["0","1","2"],
    ["3","4","5"],
    ["6","7","8"],
    ["0","3","6"],
    ["1","4","7"],
    ["2","5","8"],
    ["0","4","8"],
    ["2","4","6"]
  ]

  for (let index = 0; index < lines.length; index++) {
    const [a,b,c] = lines[index];
    if(this.state.boxes[a]&&this.state.boxes[a]===this.state.boxes[b] && this.state.boxes[a]===this.state.boxes[c]){
     this.setState({winner:this.state.player});
    }
    
  }
  }

  resetGame=()=>{
    this.setState({
      winner:null,
      player:null,
      boxes:Array(9).fill(null)
    })
    }
  setPlayer=(v)=>{
    this.setState({player:v});
    
  
   }


render(){
  return (
    <div className="App">

{this.state.winner?(<div><h4>winner is {this.state.winner}</h4> <button  onClick={this.resetGame}>Reset</button></div>):null}
      {this.state.player && !this.state.winner?(<h4>Next player is {this.state.player}</h4>):(
      <h2>Tic Tac Toe</h2>)}
      {this.state.player?(
          <div className="board">
          { this.state.boxes.map((box,i,arr)=>(<div className="box" onClick={()=>this.handleClick(i)} key={i}>{box}</div>))}
         </div>
      ):(<ChoosePlayer setPlayer={this.setPlayer}/>)}
    </div>
  );
}
}


export default App;
