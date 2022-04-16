import MainCard from 'ui-component/cards/MainCard';
import { TextField, Button, FormControlLabel, Switch, Snackbar, Alert } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import config from 'config';

const CreateUserPage = () => {
    const [open, setOpen] = useState(false);
    const [userName, setUserName] = useState('');
    const [name, setName] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const saveUser = async () => {
        await axios
            .post(`${config.backendUri}/users`, {
                userName: userName,
                password: 'a',
                email: 'a',
                name: name,
                role: isAdmin ? 'admin' : 'user'
            })
            .then((response) => {
                console.log(response);
                setOpen(true);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const success = (
        <div>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={() => {
                    setOpen(false);
                }}
                message="User saved"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert severity="success" sx={{ width: '100%' }}>
                    User saved
                </Alert>
            </Snackbar>
        </div>
    );

    return (
        <MainCard title="Add User">
            <TextField
                id="filled-basic"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                label="Username"
                variant="outlined"
                fullWidth
            />
            <br />
            <br />
            <TextField id="filled-position" label="Password" type="password" variant="outlined" fullWidth />
            <br />
            <br />
            <TextField
                id="filled-position"
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Name"
                variant="outlined"
                fullWidth
            />
            <br />
            <br />
            <FormControlLabel control={<Switch value={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />} label="Set as Admin" />
            <br />
            <br />
            <Button variant="contained" onClick={saveUser}>
                Save
            </Button>
            {success}
        </MainCard>
    );
};

export default CreateUserPage;
