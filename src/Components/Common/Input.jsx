import React from 'react';
import {FilledInput, FormControl, FormHelperText, FormLabel, InputAdornment, OutlinedInput} from "@mui/material";
import {ErrorMessage, FastField, Field} from "formik";
import propTypes from "prop-types";

// This component only used in Form Tag from formik library
const Input = ({name, type, label, variant, icon, margin, size, fastField}) => {
    return (
        <FormControl margin={margin} fullWidth>
            {/* give title from inputName */}
            <FormLabel>{label || name[0].toUpperCase() + name.slice(1)}</FormLabel>
            {
                fastField ?
                    <FastField startAdornment={icon && <InputAdornment position={'start'}>{icon}</InputAdornment>}
                               name={name}
                               type={type}
                               size={size}
                               as={variant === 'outlined' ? OutlinedInput : FilledInput}/>
                    : <Field startAdornment={icon && <InputAdornment position={'start'}>{icon}</InputAdornment>}
                             name={name}
                             type={type}
                             size={size}
                             as={variant === 'outlined' ? OutlinedInput : FilledInput}/>
            }
            <FormHelperText sx={{color: 'error.light', ml: 1}}>
                <ErrorMessage name={name}/>
            </FormHelperText>
        </FormControl>
    );
};

Input.propTypes = {
    name: propTypes.string.isRequired,
    type: propTypes.string,
    label: propTypes.string,
    variant: propTypes.oneOf(['filled', 'outlined']),
    icon: propTypes.element,
    margin: propTypes.oneOf(['dense', 'normal', 'none']),
    size: propTypes.oneOf(['small', 'medium']),
    fastField: propTypes.bool,
}
Input.defaultProps = {
    margin: 'dense',
    type: 'text',
    size: 'medium',
    variant: 'outlined'
}

export default Input;