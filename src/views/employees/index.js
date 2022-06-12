import { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import DataTable from '../../ui-component/dataTable';
import { IconButton, Grid } from '@mui/material';
import { IconPlus } from '@tabler/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from 'config';
import { ValidateToken } from 'utils/auth-handler';

const EmployeesPage = () => {
    ValidateToken();
    const [employees, setEmployees] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);

    const navigate = useNavigate();

    const getEmployees = async () => {
        await axios.get(`${config.backendUri}/employees`).then((res) => {
            const employees = [];
            res.data.map((e) => {
                employees.push({
                    id: e._id,
                    name: e.name,
                    position: e.position
                });
            });
            setEmployees(employees);
            setHasLoaded(true);
        });
    };

    useEffect(() => {
        setHasLoaded(false);
        getEmployees();
    }, []);

    const columns = [
        { field: 'id', headerName: 'Id', width: 300 },
        { field: 'name', headerName: 'Name', width: 300 },
        { field: 'position', headerName: 'Postion', width: 300 },
        { field: 'actions', headerName: 'Actions', width: 300 }
    ];

    return (
        <MainCard title="Employees">
            {hasLoaded && <DataTable rows={employees} columns={columns} />}
            <br />
            <Grid container justifyContent="flex-end">
                <IconButton
                    aria-label="add"
                    size="large"
                    color="primary"
                    onClick={() => {
                        navigate('/employees/create');
                    }}
                >
                    <IconPlus />
                </IconButton>
            </Grid>
        </MainCard>
    );
};

export default EmployeesPage;
