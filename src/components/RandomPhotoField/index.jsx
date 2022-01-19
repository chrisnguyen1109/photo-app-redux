import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import RandomPhoto from './RandomPhoto';

RandomPhotoField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
};

RandomPhotoField.defaultProps = {
    label: '',
};

function RandomPhotoField(props) {
    const { field, form, label } = props;
    const { name, value, onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    const changeImageHandler = newImageUrl => {
        form.setFieldValue(name, newImageUrl);
    };

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}

            <RandomPhoto
                name={name}
                imageUrl={value}
                onChangeImageHandler={changeImageHandler}
                onRandomButtonBlur={onBlur}
                showError={showError}
            />

            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

export default RandomPhotoField;

// const handleImageUrlChange = (newImageUrl) => {
//     form.setFieldValue(name, newImageUrl)
//   }

// name={name}
// imageUrl={value}
// onImageUrlChange={handleImageUrlChange}
// onRandomButtonBlur={onBlur}
