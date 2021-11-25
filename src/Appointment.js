import React from "react";
import Header from "./Header";
import './Appointment.scss'
import AppointmentForm from "./AppointmentForm";

function Appointment(){
    return(
        <div className='appointments'>
            <Header header='Приемы'></Header>
            <AppointmentForm></AppointmentForm>
            <div>
                <label>Сортировать по:</label>
                <select required>
                    <option>Имя</option>
                    <option>Доктор</option>
                    <option>Дата</option>
                    <option>None</option>
                </select>
            </div>
            <div>
                <label>Направление</label>
                <select>
                    <option>По возрастанию</option>
                    <option>По убыванию</option>
                </select>

            </div>
        </div>
    )
}

export default Appointment;