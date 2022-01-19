import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import clsx from 'clsx';

import styles from './RandomPhoto.module.scss';

RandomPhoto.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    onChangeImageHandler: PropTypes.func,
    onRandomButtonBlur: PropTypes.func,
    showError: PropTypes.bool,
};

RandomPhoto.defaultProps = {
    name: '',
    imageUrl: '',
    onChangeImageHandler: null,
    onRandomButtonBlur: null,
    showError: false,
};

function RandomPhoto({ name, imageUrl, onChangeImageHandler, onRandomButtonBlur, showError }) {
    const handleRandomPhoto = () => {
        if (onChangeImageHandler) {
            const randomId = 1000 + Math.floor(Math.random() * 100);

            onChangeImageHandler(`https://picsum.photos/id/${randomId}/300/300`);
        }
    };

    return (
        <div
            className={clsx(styles['random-photo'], {
                'is-invalid': showError,
            })}
        >
            <div className={styles['random-photo__button']}>
                <Button
                    outline
                    name={name}
                    color="primary"
                    onClick={handleRandomPhoto}
                    onBlur={onRandomButtonBlur}
                >
                    Random a photo
                </Button>
            </div>

            <div className={styles['random-photo__photo']}>
                {imageUrl && (
                    <img
                        src={imageUrl}
                        onError={handleRandomPhoto}
                        alt="Ooops ... not found. Please click random again!"
                    />
                )}
            </div>
        </div>
    );
}

export default RandomPhoto;
