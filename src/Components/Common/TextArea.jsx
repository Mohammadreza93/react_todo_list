import React from 'react';
import styled from "styled-components";
import {FormControl, FormHelperText, FormLabel} from "@mui/material";
import {ErrorMessage, Field} from "formik";
import propTypes from 'prop-types'

const TextArea = styled.textarea`
  background-color: transparent;
  width: 100%;
  border-radius: 0.2rem;
  padding: 0.3rem;
  min-height: 4.5rem;
  color: ${props => props.dark ? '#ccc' : 'inherit'};

  &::placeholder {
    font-size: large;
  }

  &:hover {
    border: 0.01rem solid #ccc
  }

  &:focus {
    outline: none;
  }
`

const Textarea = (props) => {
    const {name, ...rest} = props
    return (
        <FormControl margin={'dense'} fullWidth>
            <FormLabel>{props.label || null}</FormLabel>
            <Field name={name} {...rest} as={TextArea}/>
            <FormHelperText sx={{color: 'error.main'}}><ErrorMessage name={name}/></FormHelperText>
        </FormControl>
    )
}

Textarea.propTypes = {
    name: propTypes.string.isRequired,
    label: propTypes.string
}

export default Textarea;