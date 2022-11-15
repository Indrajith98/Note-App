import React from "react";
const DarkMode = ({handleDarkModeBody}) => {
    return (
        <div className="darkMode">
            <h2> Notes</h2>
            <button className="darkmode-btn" onClick={handleDarkModeBody}>Dark</button>
        </div>
    )
}

export default DarkMode;