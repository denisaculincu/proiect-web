import React from 'react';

export class DivDateLoc extends React.Component{
    render(){
        return (
            <div id="div_date_loc">
                <p id="nume" class="locafisat">Name:</p>
                <input type="text" class="date"/>
                <p id="adresa" class="locafisat">Address:</p>
                <input type="text" class="date"/>
                <p id="data" class="locafisat">Date:</p>
                <input type="text" class="date"/>
                <p id="ora" class="locafisat">Time:</p>
                <input type="text" class="date"/>
                <p id="desc" class="locafisat">Description:</p>
                <input type="text" class="date"/>
             </div>
        );
    }
}