import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [name, setName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditSaveClick() {
        setIsEditing((editing) => !editing);
        if (isEditing) {
            // just pressed save
            onChangeName(symbol, name);
        }
    }

    function handleChange(event) {
        setName(event.target.value);
    }

    let nameDisplay = <span className="player-name">{name}</span>

    if (isEditing) {
        nameDisplay = <input type="text" required value={name} onChange={handleChange}/>
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
              {nameDisplay}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditSaveClick} >{isEditing ? "Save" : "Edit"}</button>
          </li>
    );
}