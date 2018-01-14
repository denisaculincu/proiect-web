import React from 'react';

export class Menu extends React.Component{
    render(){
        return(
            <div id="butoane">
                <div class="meniu" id="add_btn">
                    <p id="add">Add</p>
                </div>

                <div class="meniu" id="myAppointments_btn">
                    <p id="myAppointments">My appointments</p>
                </div>

                <div class="meniu" id="today_btn">
                    <p id="today">Today</p>
                </div>

                <div class="meniu" id="thisWeek_btn">
                    <p id="thisWeek">This week</p>
                </div>
            </div>
            );
    }
}