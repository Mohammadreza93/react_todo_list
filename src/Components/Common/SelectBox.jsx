import React from 'react';
import {FormControl, FormHelperText, FormLabel, MenuItem, Select} from "@mui/material";
import {ErrorMessage, Field} from "formik";

const SelectBox = (props) => {
    console.log('SelectComponent called')
    const {name, options, ...rest} = props;
    return (
        <FormControl margin={'dense'} fullWidth>
            <FormLabel>{props?.label || null}</FormLabel>
            <Field name={name}>
                {
                    formik => {
                        const {field} = formik;
                        return <Select {...field} >
                            {
                                options.map(option => <MenuItem key={option.value}
                                                                value={option.value}>{option.key}</MenuItem>)
                            }
                        </Select>
                    }
                }
            </Field>
            <FormHelperText sx={{color: 'error.main'}}><ErrorMessage name={name}/></FormHelperText>
        </FormControl>
    );
};

export default React.memo(SelectBox);