import { Button, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import config from 'config';
import DataTable from 'ui-component/dataTable';
import { CSVLink } from 'react-csv';
import { getDownloadDate } from 'utils/downloadDate';
import { ValidateToken } from 'utils/auth-handler';

const DailyTimeRecordsPage = () => {
    ValidateToken();
    const [employee, setEmployee] = useState('');
    const [employees, setEmployees] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [dtrs, setDtrs] = useState([]);
    const [dtrsHasLoaded, setDtrsHasLoaded] = useState(false);
    const [dtrFilter, setDtrFilter] = useState('');

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

    const getDailyTimeRecords = async () => {
        await axios.get(`${config.backendUri}/daily-time-records`).then((res) => {
            setDtrs(res.data);
            setDtrsHasLoaded(true);
        });
    };

    const getDailyTimeRecordsByEmployeeId = async (event) => {
        await axios.get(`${config.backendUri}/daily-time-records/${event.target.value}`).then((res) => {
            setDtrs(res.data);
            setDtrFilter(event.target.value);
            setDtrsHasLoaded(true);
        });
    };

    const timeLog = async () => {
        if (employee != '') {
            await axios
                .post(`${config.backendUri}/time-logs`, {
                    employeeId: employee
                })
                .then(() => {
                    setEmployee('');
                    getDailyTimeRecords();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const dtrFilterSelect = (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label1">Filter By</InputLabel>
            <Select
                labelId="demo-simple-select-label1"
                id="demo-simple-select1"
                value={dtrFilter}
                label="Filter By"
                onChange={getDailyTimeRecordsByEmployeeId}
            >
                <MenuItem key={'clear'} value={''}>
                    Clear Filter
                </MenuItem>
                {employees.map((emp) => (
                    <MenuItem key={emp.name} value={emp.id}>
                        {emp.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );

    const columns = [
        { field: 'id', headerName: 'Id', width: 300 },
        { field: 'employeeName', headerName: 'Employee', width: 300 },
        { field: 'employeePosition', headerName: 'Position', width: 300 },
        { field: 'timeIn', headerName: 'Time In', width: 300 },
        { field: 'timeOut', headerName: 'Time Out', width: 300 }
    ];

    useEffect(() => {
        setHasLoaded(false);
        setDtrsHasLoaded(false);
        getEmployees();
        getDailyTimeRecords();
    }, []);

    return (
        <MainCard title="Daily Time Records">
            {hasLoaded && dtrFilterSelect}
            <br />
            <br />
            {dtrsHasLoaded && <DataTable rows={dtrs} columns={columns} />}
            <br />
            <br />
            {dtrsHasLoaded && (
                <Grid container justifyContent="flex-end" spacing={2}>
                    <Grid item>
                        <CSVLink data={dtrs} filename={`DTR_REPORT_${getDownloadDate()}.csv`} style={{ textDecoration: 'none' }}>
                            <Button variant="contained" color="primary">
                                Download Report
                            </Button>
                        </CSVLink>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="secondary" onClick={timeLog}>
                            Time In
                        </Button>
                    </Grid>
                </Grid>
            )}
        </MainCard>
    );
};

export default DailyTimeRecordsPage;
