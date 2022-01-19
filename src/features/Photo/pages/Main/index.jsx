import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import Banner from 'components/Banner';
import Images from 'global/images';
import PhotoList from 'features/Photo/components/PhotoList';
import { useDispatch, useSelector } from 'react-redux';
import { photoListSelector } from 'redux/selectors';
import { removePhoto } from 'redux/photoReducerSlice';
import { useHistory } from 'react-router-dom';

function MainPage() {
    const photos = useSelector(photoListSelector);
    const dispatch = useDispatch();
    const history = useHistory();

    const handlePhotoEditClick = photo => {
        history.push(`/photos/${photo.id}`);
    };

    const handlePhotoRemoveClick = photo => {
        dispatch(removePhoto(photo.id));
    };

    return (
        <div className="photo-main">
            <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

            <Container className="text-center">
                <div className="py-5">
                    <Link to="/photos/add">Add new photo</Link>
                </div>

                <PhotoList
                    photoList={photos}
                    onPhotoEditClick={handlePhotoEditClick}
                    onPhotoRemoveClick={handlePhotoRemoveClick}
                />
            </Container>
        </div>
    );
}

export default MainPage;
