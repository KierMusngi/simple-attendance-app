import { useEffect, useState } from 'react';
import { ValidateToken } from 'utils/auth-handler';

// material-ui
import { Grid } from '@mui/material';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import { gridSpacing } from 'store/constant';
import axios from 'axios';
import config from 'config';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    ValidateToken();
    const [isLoading, setLoading] = useState(true);
    const [counts, setCounts] = useState({});

    const getDashboardCounts = async () => {
        await axios.get(`${config.backendUri}/dashboard/counts`).then((res) => {
            const { employeeCount, onTimeCount, lateCount, absentCount, topAttendees } = res.data;

            const counts = {
                employeeCount,
                onTimeCount,
                lateCount,
                absentCount,
                topAttendees
            };

            setCounts(counts);
            setLoading(false);
        });
    };

    useEffect(() => {
        getDashboardCounts();
    }, []);

    console.log(counts);
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} name={'Employees'} count={counts.employeeCount} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <TotalOrderLineChartCard isLoading={isLoading} name={'On time'} count={counts.onTimeCount} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <TotalOrderLineChartCard isLoading={isLoading} name={'Absent'} count={counts.absentCount} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} name={'Late'} count={counts.lateCount} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={12}>
                        <PopularCard isLoading={isLoading} topAttendees={counts.topAttendees} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
