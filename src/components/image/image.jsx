import PropTypes from 'prop-types';

const Image = ({ src = '', alt = '', sizes, loadingStrategy = 'eager' }) => {

    if(!sizes) {
        return <img src={src} alt={alt} loading={loadingStrategy} />;
    }

    return (
        <picture>
            <source srcSet={sizes.desktop} media="(min-width: 1200px)" />
            <source srcSet={sizes.tablet} media="(min-width: 768px)" />
            <img
                src={sizes.mobile}
                alt={alt}
                loading={loadingStrategy}
            />
        </picture>
    );
};

Image.propTypes = {
    src: PropTypes.string, // Folder containing the images
    alt: PropTypes.string, // Alt text for accessibility
    sizes: PropTypes.shape({
        mobile: PropTypes.string,
        tablet: PropTypes.string,
        desktop: PropTypes.string,
    }),
    placeholder: PropTypes.string,
    loadingStrategy: PropTypes.oneOf(['lazy', 'eager', 'auto']),
};

export default Image;
