import MainCard from 'ui-component/cards/MainCard';
import DataTable from '../../ui-component/dataTable';
import { Button } from '@mui/material';

const EmployeesPage = () => (
    <MainCard title="Employees">
        <DataTable />
        <br />
        <Button variant="contained" color="primary">
            Add new employee
        </Button>
    </MainCard>
);

export default EmployeesPage;
