import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import styles from './AddEdit.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, editPhoto } from 'redux/photoReducerSlice';
import { v4 as uuidv4 } from 'uuid';
import { useHistory, useParams } from 'react-router-dom';
import { photoEditedSelector } from 'redux/selectors';

function AddEditPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { photoId } = useParams();

    const editedPhoto = useSelector(photoEditedSelector(photoId));

    const isAddMode = !!editedPhoto;

    const initialValues = isAddMode
        ? {
              title: editedPhoto.title,
              category: editedPhoto.category,
              photo: editedPhoto.photo,
          }
        : {
              title: '',
              category: '',
              photo: '',
          };

    const submitFormHandler = values => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
            }, 500);
        })
            .then(() => {
                isAddMode
                    ? dispatch(
                          editPhoto({
                              id: photoId,
                              ...values,
                          })
                      )
                    : dispatch(
                          addPhoto({
                              id: uuidv4(),
                              ...values,
                          })
                      );
            }, 1000)
            .catch(console.log)
            .finally(() => history.push('/photos'));
    };

    return (
        <div className={styles['photo-edit']}>
            <Banner title="Pick your amazing photo 😎" />

            <div className={styles['photo-edit__form']}>
                <PhotoForm
                    initialValues={initialValues}
                    onSubmit={submitFormHandler}
                    isAddMode={isAddMode}
                />
            </div>
        </div>
    );
}

export default AddEditPage;
