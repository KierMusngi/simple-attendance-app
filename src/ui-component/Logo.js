import logo from 'assets/images/logo.svg';
import PropTypes from 'prop-types';

const Logo = (props) => {
    const { width } = props;

    if (width === '') {
        width = '100';
    }

    return <img src={logo} alt="sss" width={width} />;
};

Logo.propTypes = {
    width: PropTypes.string
};

export default Logo;
