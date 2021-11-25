import React from 'react';
import Input from "./Input";
import './AppointmentForm.scss'

const AppointmentForm = () => {
    return (
        <div id='appointForm'>
            <form>
                <Input type='text' id='nameOfPatient' label='Имя' width='200px' marginRight='50px'></Input>
                <div className="Select">
                    <button>Select</button>
                    <div className="Select-list">

                    </div>
                </div>

                {/*<Select items={[]} onSelect={() => {}}/>*/}

                <Input type="date" id="dateOfAppointment" label="Дата" width='200px' marginRight='50px' required='required'></Input>
                <Input type='text' id='complaint' label='Жалоба'width='200px' marginRight='50px'required='required'></Input>
                <input type='submit' value="Добавить"/>
            </form>
        </div>
    );
};

export default AppointmentForm;