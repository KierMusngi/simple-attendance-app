import { Link } from 'react-router-dom';
import { ButtonBase } from '@mui/material';
import config from 'config';
import Logo from 'ui-component/Logo';
import PropTypes from 'prop-types';

const LogoSection = (props) => {
    const { width } = props;

    return (
        <ButtonBase disableRipple component={Link} to={config.defaultPath}>
            <Logo width={width} />
        </ButtonBase>
    );
};

LogoSection.propTypes = {
    width: PropTypes.string
};

export default LogoSection;
