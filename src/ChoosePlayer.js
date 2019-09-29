import React from 'react'

function ChoosePlayer(props) {
const {setPlayer,player}=props;


function onSubmit(e){
e.preventDefault();
setPlayer(e.target.player.value)
}
        return (
            <div>
                <h4>Choose Player</h4>
                <form onSubmit={(e)=>onSubmit(e)}>
                    <label htmlFor="player">player x</label>
                    <input type="radio" value="x" name="player"/>

                    <label htmlFor="player">player o</label>
                    <input type="radio"  value="o" name="player"/>

                    <input type="submit" value="start"/>
                </form>
                
            </div>
        )
    
}
export default ChoosePlayer;