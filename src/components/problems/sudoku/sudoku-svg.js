import React from 'react';

const SudokuSvg = () => (
    <div>
        <svg viewBox="0 0 100 100">
            <rect width="100" height="100" fill="black" /> 
            <rect x="5" y="5" width="90" height="90" fill="#F6A3A3" stroke="grey" /> 
            <text x="38" y="55" style={{fontSize: "0.5em"}}>Board</text>

            <rect x="35" y="5" width="30" height="30" fill="#4C9F9F" stroke="grey" /> 
            <text x="44.6" y="22" style={{fontSize: "0.3em"}}>Grid</text>

            <rect x="5" y="5" width="30" height="30" fill="#F7F18B" stroke="grey" /> 
            
            {[5,15,25].map(i => [5,15,25].map(j => 
                <rect x={i} y={j} width="10" height="10" fill="#F7F18B" stroke="grey" />))}
            <text x="14.2" y="38" style={{fontSize: "0.2em"}}>^^^^^</text>
            <text x="13.4" y="40" style={{fontSize: "0.2em"}}>Squares</text>

            {[85,75,65,55,45,35,25,15,5].map(x => (
                <rect x={x} y="85" width="10" height="10" fill="#F7F18B" stroke="grey" /> ))}
            <text x="7" y="83" style={{fontSize: "0.3em"}}>Row</text>
                
            {[85,75,65,55,45,35,25,15,5].map(y => (
                <rect x="85" y={y} width="10" height="10" fill="#F7F18B" stroke="grey" /> ))}
            <text x="60" y="60" transform="rotate(-90,83,60)" style={{fontSize: "0.3em"}}>Column</text>
        </svg>
        <hr />
    </div>
);

export default SudokuSvg;