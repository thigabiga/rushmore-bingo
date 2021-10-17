import React from "react";
import shuffle from "shuffle-array";

// Return a random collection of 24 bingo squares, plus one free square
export function resetGame() {
    const values = [
        "Overhead Shot", "Jason Schwartzman", "Wilson Brother", "BB Gun", "Absent Parent",
        "Whip Pan", "Bow Tie", "Slow Zoom", "Quick Zoom", "Tape Recorder", "Peanuts Homage",
        "Quirky Vehicle", "Brit Pop", "Slow Motion", "Runs Away", "Pajama Set", "Bath Robe",
        "Nose Injury", "Hand-Written Letter", "Symmetrical Frame", "Unrequited Love", 
        "Typewriter", "Beret", "Lamar H.S.", "Futura Typeface", "Hipster Glasses", "Binoculars"
    ]

    var squares = shuffle(values, {"picks": 24});
    squares = squares.slice(0, 12).concat(["Free"], squares.slice(12, 24));
    var status = Array(25).fill(0);

    return({
        "squares": squares,
        "status": status
    });
};

// Calculate if you have a winning combination (down, across, or diagonal)
export function calculateWinner(squares) {
    const lines = [
        [  0,  1,  2,  3,  4 ],
        [  5,  6,  7,  8,  9 ],
        [ 10, 11, 12, 13, 14 ],
        [ 15, 16, 17, 18, 19 ],
        [ 20, 21, 22, 23, 24 ],
        [  0,  5, 10, 15, 20 ],
        [  1,  6, 11, 16, 21 ],
        [  2,  7, 12, 17, 22 ],
        [  3,  8, 13, 18, 23 ],
        [  4,  9, 14, 19, 24 ],
        [  0,  6, 12, 18, 24 ],
        [  4,  8, 12, 16, 20 ]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c, d, e] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && 
            squares[a] === squares[d] && squares[a] === squares[e]) {
            return squares[a];
        }
    }
    return null;
}