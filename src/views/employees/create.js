import MainCard from 'ui-component/cards/MainCard';
import { TextField, Button, Snackbar, Alert, Grid } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import config from 'config';
import { useNavigate } from 'react-router';

const CreateEmployeePage = () => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');

    const navigate = useNavigate();

    const saveEmployee = async () => {
        await axios
            .post(`${config.backendUri}/employees`, {
                name: name,
                position: position
            })
            .then((response) => {
                console.log(response);
                setName('');
                setPosition('');
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
            <Grid container spacing={2} justifyContent="flex-end">
                <Grid item>
                    <Button variant="contained" onClick={saveEmployee}>
                        Save
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="secondary" onClick={() => navigate('/employees')}>
                        Cancel
                    </Button>
                </Grid>
            </Grid>
            {success}
        </MainCard>
    );
};

export default CreateEmployeePage;
