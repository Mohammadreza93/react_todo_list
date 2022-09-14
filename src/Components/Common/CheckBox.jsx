import React from 'react';
import {Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel} from "@mui/material";
import {ErrorMessage, Field} from 'formik'
import propTypes from 'prop-types'

const CheckBox = (props) => {
    console.log('Checkbox component called')
    const {name, options, row, ...rest} = props;
    return (<FormControl>
        <FormLabel>{props?.label}</FormLabel>
        <Field name={name}>
            {formik => {
                const {field} = formik;
                return <FormGroup row={row || false}>
                    {options.map(option => <FormControlLabel key={option.value} label={option.key}
                                                             control={<Checkbox {...rest}
                                                                                {...field}
                                                                                checked={field.value.includes(option.value)}
                                                                                value={option.value}/>}
                    />)}
                </FormGroup>
            }}
        </Field>
        <FormHelperText sx={{color: 'error.main'}}><ErrorMessage name={name}/></FormHelperText>
    </FormControl>);
};

CheckBox.propTypes = {
    row: propTypes.bool,
    name: propTypes.string.isRequired,
    options: propTypes.array.isRequired
}

export default React.memo(CheckBox);