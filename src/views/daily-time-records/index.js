import { Button, FormControl, InputLabel, Select, MenuItem, Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import config from 'config';
import DataTable from 'ui-component/dataTable';
import { CSVLink } from 'react-csv';
import { getDownloadDate } from 'utils/downloadDate';

const DailyTimeRecordsPage = () => {
    const [employee, setEmployee] = useState('');
    const [employees, setEmployees] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);

    const [dtrs, setDtrs] = useState([]);
    const [dtrsHasLoaded, setDtrsHasLoaded] = useState(false);

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

    const handleChange = (event) => {
        setEmployee(event.target.value);
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

    const employeeSelect = (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Employee</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={employee} label="Employee" onChange={handleChange}>
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
            {dtrsHasLoaded && <DataTable rows={dtrs} columns={columns} />}
            <br />
            <br />
            <Grid container justifyContent="center" alignItems="center" direction="column">
                <Typography variant="h5" color="#D0D0D0">
                    Simulation of adding time logs
                </Typography>
                <Typography variant="h6" color="#D0D0D0">
                    Actual implementation of time logs with face recognition is currently work in progress.
                </Typography>
                <br />
            </Grid>
            {hasLoaded && employeeSelect}
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
