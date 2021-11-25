import React from "react";
import PropTypes from 'prop-types';
import './Input.scss'

function Input({label,type,onChange, value, ...rest}){
    return(
        <div>
            <p>{label}:</p>
            <input type={type} placeholder={label} onChange={onChange} value={value} {...rest} />
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func,
};

export default Input;