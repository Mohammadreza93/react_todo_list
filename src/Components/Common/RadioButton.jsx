import React from 'react';
import {FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup} from "@mui/material";
import {ErrorMessage, Field} from "formik";
import propTypes from 'prop-types';

const RadioButton = ({name, options, label, row}) => {
    return (<FormControl>
        <FormLabel>{label}</FormLabel>
        <Field name={name}>
            {formik => {
                const {field} = formik;
                return <RadioGroup row={row}>
                    {options.map(option => <FormControlLabel label={option.key} key={option.key}
                                                             control={<Radio {...field}
                                                                             checked={field.value === option.value}
                                                                             value={option.value}/>}
                    />)}
                </RadioGroup>
            }}
        </Field>
        <FormHelperText sx={{color: 'error.main'}}><ErrorMessage name={name}/></FormHelperText>
    </FormControl>);
};

RadioButton.propTypes = {
    name: propTypes.string.isRequired,
    options: propTypes.array.isRequired,
    label: propTypes.string.isRequired,
    row: propTypes.bool
}

RadioButton.defaultProps = {
    options: []
}

export default React.memo(RadioButton);