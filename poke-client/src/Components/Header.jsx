import React, { useState } from "react";
function Header() {
    return (
        <div className="Header">
            <div className="Logo">LOGO</div>
            <div>MEMORY CARD : Play the Game</div>
            <div className="User w-auto">
                <button className="Connection mr-2">Se Connecter</button>
                <button className="Inscription">Inscription</button>
            </div>
        </div>
    );
};

export default Header;