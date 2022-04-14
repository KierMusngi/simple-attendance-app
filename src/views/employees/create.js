import MainCard from 'ui-component/cards/MainCard';
import { TextField, Button } from '@mui/material';

const CreateEmployeePage = () => {
    return (
        <MainCard title="Add Employee">
            <TextField id="filled-basic" label="Name" variant="outlined" fullWidth />
            <br />
            <br />
            <TextField id="filled-position" label="Position" variant="outlined" fullWidth />
            <br />
            <br />
            <Button variant="contained">Save</Button>
        </MainCard>
    );
};

export default CreateEmployeePage;
