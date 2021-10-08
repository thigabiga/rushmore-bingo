import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export default function Square(props) {

    if (props.status) {
        return (
            <button class="square" onClick={props.onClick} data={props.status}>
                <div class="token">
                    X
                </div>
                <div class="content">
                    {props.value}
                </div>
            </button>
        );
    } else {
        return (
            <button class="square" onClick={props.onClick} data={props.status}>
                <div class="content">
                    {props.value}
                </div>
            </button>
        );
    };

};