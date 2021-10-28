import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export default function Square(props) {

    // If the square is filled, add the token marker
    if (props.status) {
        return (
            <button className="square" onClick={props.onClick} data={props.status}>
                <div className="token">
                    X
                </div>
                <div className="content">
                    {props.value}
                </div>
                <div className="icon">
                    <img className="icon" src={props.image} alt={props.value} />
                </div>
            </button>
        );
    // Otherwise, return a square without the token
    } else {
        return (
            <button className="square" onClick={props.onClick} data={props.status}>
                <div className="content">
                    {props.value}
                </div>
                <img className="icon" src={props.image} alt={props.value} />
            </button>
        );
    };

};