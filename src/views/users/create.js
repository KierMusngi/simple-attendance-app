import MainCard from 'ui-component/cards/MainCard';
import { TextField, Button, FormControlLabel, Switch, Snackbar, Alert } from '@mui/material';
import { useState } from 'react';

const CreateUserPage = () => {
    const [open, setOpen] = useState(false);

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
            <TextField id="filled-basic" label="Username" variant="outlined" fullWidth />
            <br />
            <br />
            <TextField id="filled-position" label="Password" type="password" variant="outlined" fullWidth />
            <br />
            <br />
            <TextField id="filled-position" label="Name" variant="outlined" fullWidth />
            <br />
            <br />
            <FormControlLabel control={<Switch />} label="Set as Admin" />
            <br />
            <br />
            <Button
                variant="contained"
                onClick={() => {
                    setOpen(true);
                }}
            >
                Save
            </Button>
            {success}
        </MainCard>
    );
};

export default CreateUserPage;
