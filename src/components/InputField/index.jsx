import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
};

InputField.defaultProps = {
    type: 'text',
    label: '',
};

function InputField(props) {
    const { field, form, label, ...args } = props;
    const { name } = field; // name value onChange onBlur
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input id={name} {...field} {...args} invalid={showError} />

            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

export default InputField;
