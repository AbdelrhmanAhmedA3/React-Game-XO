import { useState } from "react";

export default function Player ({initialName, symbol}){
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleNameChange() {
        setIsEditing(!isEditing);
    }
    function handleChangeName(event){
        setPlayerName(event.target.value)
    }

    let EditPlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        EditPlayerName = 
            <input 
                type="text" 
                required
                value={playerName}
                onChange={handleChangeName}
            />
        ;
    }
        

    return (
        <li>
            <span className="player">
                {EditPlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleNameChange}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}