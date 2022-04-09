import { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import DataTable from '../../ui-component/dataTable';
import { Button } from '@mui/material';
import axios from 'axios';

const EmployeesPage = () => {
    const [employees, setEmployees] = useState();

    const getEmployees = async () => {
        await axios.get(`http://localhost:8080/employees`).then((res) => {
            const employees = res.data;
            setEmployees({ employees });
        });
    };

    useEffect(() => {
        getEmployees();
    }, employees);

    return (
        <MainCard title="Employees">
            <DataTable />
            <br />
            <Button variant="contained" color="primary">
                Add new employee
            </Button>
        </MainCard>
    );
};

export default EmployeesPage;
