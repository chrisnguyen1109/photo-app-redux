import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import Select from 'react-select';
import { ErrorMessage } from 'formik';
import clsx from 'clsx';

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    options: PropTypes.array,
};

SelectField.defaultProps = {
    label: '',
    options: [],
};

function SelectField(props) {
    const { field, form, label, ...args } = props;
    const { name, value } = field; // name value onChange onBlur
    const { errors, touched } = form;

    const showError = errors[name] && touched[name];

    const blurHandler = e => {
        e.target.name = name;
        field.onBlur(e);
    };

    const changeSelectHandler = options => {
        const changeEvent = {
            target: {
                name,
                value: options.value,
            },
        };

        field.onChange(changeEvent);
    };

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Select
                id={name}
                {...field}
                value={value && { value, label: value }}
                onBlur={blurHandler}
                onChange={changeSelectHandler}
                {...args}
                className={clsx({ 'is-invalid': showError })}
            />

            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

export default SelectField;
