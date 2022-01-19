import PropTypes from 'prop-types';

import styles from './Banner.module.scss';

Banner.propTypes = {
    title: PropTypes.string,
    backgroundUrl: PropTypes.string,
};

Banner.defaultProps = {
    title: '',
    backgroundUrl: '',
};

function Banner({ title, backgroundUrl }) {
    const bannerStyle = backgroundUrl ? { backgroundImage: `url(${backgroundUrl})` } : {};

    return (
        <section className={styles.banner} style={bannerStyle}>
            <h1 className={styles.banner__title}>{title}</h1>
        </section>
    );
}

export default Banner;
