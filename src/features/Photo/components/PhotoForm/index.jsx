import PropTypes from 'prop-types';
import { Button, FormGroup, Spinner } from 'reactstrap';
import { Formik, Form, FastField } from 'formik';
import * as Yup from 'yup';

import PHOTO_CATEGORY_OPTIONS from 'global/formValue';
import InputField from 'components/InputField';
import SelectField from 'components/SelectField';
import RandomPhotoField from 'components/RandomPhotoField';

PhotoForm.propTypes = {
    initialValues: PropTypes.object,
    onSubmit: PropTypes.func,
    isAddMode: PropTypes.bool,
};

PhotoForm.defaultProps = {
    initialValues: {},
    onSubmit: null,
    isAddMode: false,
};

function PhotoForm({ initialValues, onSubmit, isAddMode }) {
    const validationSchema = Yup.object().shape({
        title: Yup.string().required('This field is required'),
        category: Yup.string().required('This field is required'),
        photo: Yup.string().required('This field is required'),

        // photo: Yup.string().when('category', {
        //     is: 'Technology',
        //     then: Yup.string().required('This field is required'),
        //     otherwise: Yup.string().notRequired(),
        // }),
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {formikProps => {
                // const { values, errors, touched, isSubmitting } = formikProps;
                const { isSubmitting } = formikProps;

                return (
                    <Form>
                        <FastField
                            name="title"
                            label="Title"
                            placeholder="Eg: Wow nature ..."
                            autoComplete="off"
                            component={InputField}
                        />

                        <FastField
                            name="category"
                            label="Category"
                            options={PHOTO_CATEGORY_OPTIONS}
                            component={SelectField}
                            placeholder="What's your photo category?"
                        />

                        <FastField name="photo" component={RandomPhotoField} label="Photo" />

                        <FormGroup>
                            <Button
                                disabled={isSubmitting}
                                type="submit"
                                color="primary"
                                className="me-2"
                            >
                                {isAddMode ? 'Edit photo' : 'Add to album'}
                            </Button>
                            {isSubmitting && <Spinner size="sm" />}
                        </FormGroup>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default PhotoForm;
