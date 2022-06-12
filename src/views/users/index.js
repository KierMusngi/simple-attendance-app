import { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import DataTable from '../../ui-component/dataTable';
import { IconButton, Grid } from '@mui/material';
import { IconPlus } from '@tabler/icons';
import { useNavigate } from 'react-router';
import axios from 'axios';
import config from 'config';
import { ValidateToken } from 'utils/auth-handler';

const UsersPage = () => {
    ValidateToken();
    const [users, setUsers] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);

    const navigate = useNavigate();

    const getUsers = async () => {
        await axios.get(`${config.backendUri}/users`).then((res) => {
            const users = [];
            res.data.map((u) => {
                users.push({
                    id: u._id,
                    userName: u.userName,
                    name: u.name,
                    role: u.role
                });
            });
            setUsers(users);
            setHasLoaded(true);
        });
    };

    useEffect(() => {
        setHasLoaded(false);
        getUsers();
    }, []);

    const columns = [
        { field: 'id', headerName: 'Id', width: 300 },
        { field: 'userName', headerName: 'Username', width: 300 },
        { field: 'name', headerName: 'Name', width: 300 },
        { field: 'role', headerName: 'Role', width: 300 }
    ];

    return (
        <MainCard title="Users">
            {hasLoaded && <DataTable rows={users} columns={columns} />}
            <br />
            <Grid container justifyContent="flex-end">
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
            </Grid>
        </MainCard>
    );
};

export default UsersPage;
