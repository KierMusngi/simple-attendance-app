import MainCard from 'ui-component/cards/MainCard';
import { IconButton } from '@mui/material';
import { IconPlus } from '@tabler/icons';
import { useNavigate } from 'react-router';

const UserProfilePage = () => {
    const navigate = useNavigate();

    return (
        <MainCard title="User Profile">
            <IconButton
                aria-label="add"
                size="large"
                color="primary"
                onClick={() => {
                    navigate('/users/create');
                }}
            >
                <IconPlus />
            </IconButton>
        </MainCard>
    );
};

export default UserProfilePage;
