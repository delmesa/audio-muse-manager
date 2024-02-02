import PropTypes from 'prop-types';
import './Icon.css';

const Icon = ({ src, alt }) => {
	return (
		<div className="icon" role="icon">
			<img
				src={src ?? "/src/assets/images/imgDefault.png"}
				alt={alt}
				className={src || "default"}
			/>
		</div>
	);
};

Icon.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string
}

export default Icon;
