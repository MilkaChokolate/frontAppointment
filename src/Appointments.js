import React from "react";
import Header from "./Header";
import Input from "./Input";
import Button from "./Button";

function Appointments(){
    return(
        <div>
            <Header header='Приемы'></Header>
            <div id='appointmentForm'>
                <form>
                    <Input type='text' id='nameOfPatient' lable='Имя'></Input>
                    <Input type='text' id='nameOfDoctor' lable="Доктор"></Input>
                    <select>
                        <option value="">Андреев Андрей Андреевич</option>
                        <option value="">Петров Петр Петрович</option>
                        <option value=''>Иванов Иван Иванович</option>
                    </select>
                    <Input type="date" id="dateOfAppointment" lable="Дата"></Input>
                    <Input type='text' id='complaint' lable='Жалоба'></Input>
                    <Button textOfButton='Отправить' float='left'></Button>
                </form>
            </div>
        </div>
    )
}

export default Appointments;