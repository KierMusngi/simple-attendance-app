import { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import DataTable from '../../ui-component/dataTable';
import { IconButton, Grid } from '@mui/material';
import { IconX } from '@tabler/icons';
import axios from 'axios';
import config from 'config';
import { ValidateToken } from 'utils/auth-handler';

const EmployeesPage = () => {
    ValidateToken();
    const [employees, setEmployees] = useState([]);
    const [selected, setSelected] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);

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

    const onSelectionModelChangeHandle = (ids) => {
        const selectedIDs = new Set(ids);
        const selectedRowData = employees.filter((row) => selectedIDs.has(row.id.toString()));
        console.log(selectedRowData);
        setSelected(selectedRowData);
    };

    const deleteEmployees = async (id) => {
        await axios
            .delete(`${config.backendUri}/employees/${id}`)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        setHasLoaded(false);
        getEmployees();
    }, []);

    const columns = [
        { field: 'id', headerName: 'Id', width: 300 },
        { field: 'name', headerName: 'Name', width: 300 },
        { field: 'position', headerName: 'Postion', width: 300 }
    ];

    return (
        <MainCard title="Employees">
            {hasLoaded && <DataTable rows={employees} columns={columns} onSelectionModelChangeHandler={onSelectionModelChangeHandle} />}
            <br />
            <Grid container justifyContent="flex-end">
                <IconButton
                    aria-label="add"
                    size="large"
                    color="warning"
                    onClick={() => {
                        selected.forEach((employee) => {
                            deleteEmployees(employee.id);
                            getEmployees();
                        });
                        window.location.reload(false);
                    }}
                >
                    <IconX />
                </IconButton>
            </Grid>
        </MainCard>
    );
};

export default EmployeesPage;
