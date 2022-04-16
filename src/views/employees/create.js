import MainCard from 'ui-component/cards/MainCard';
import { TextField, Button, Snackbar, Alert } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import config from 'config';

const CreateEmployeePage = () => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');

    const saveEmployee = async () => {
        await axios
            .post(`${config.backendUri}/employees`, {
                name: name,
                position: position
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
                message="Employee saved"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert severity="success" sx={{ width: '100%' }}>
                    Employee saved
                </Alert>
            </Snackbar>
        </div>
    );

    return (
        <MainCard title="Add Employee">
            <TextField id="filled-basic" value={name} onChange={(e) => setName(e.target.value)} label="Name" variant="outlined" fullWidth />
            <br />
            <br />
            <TextField
                id="filled-position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                label="Position"
                variant="outlined"
                fullWidth
            />
            <br />
            <br />
            <Button variant="contained" onClick={saveEmployee}>
                Save
            </Button>
            {success}
        </MainCard>
    );
};

export default CreateEmployeePage;
