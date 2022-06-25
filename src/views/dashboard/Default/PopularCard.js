import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, CardContent, Divider, Grid, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';

// assets
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const PopularCard = ({ isLoading, topAttendees }) => {
    const theme = useTheme();

    return (
        <>
            {isLoading ? (
                <SkeletonPopularCard />
            ) : (
                <MainCard content={false}>
                    <CardContent>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <Grid container alignContent="center" justifyContent="space-between">
                                    <Grid item>
                                        <Typography variant="h4">Recent attendees</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                {topAttendees.map((attendee) => {
                                    return (
                                        <div>
                                            <Grid container direction="column">
                                                <Grid item>
                                                    <Grid container alignItems="center" justifyContent="space-between">
                                                        <Grid item>
                                                            <Typography variant="subtitle1" color="inherit">
                                                                {attendee.employeeName}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item>
                                                        <Grid container alignItems="center" justifyContent="space-between">
                                                            <Grid item>
                                                                <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                                                                    Time in
                                                                </Typography>
                                                                <Typography variant="subtitle1" color="inherit">
                                                                    {attendee.timeIn}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item>
                                                                <Avatar
                                                                    variant="rounded"
                                                                    sx={{
                                                                        width: 16,
                                                                        height: 16,
                                                                        borderRadius: '5px',
                                                                        backgroundColor: theme.palette.success.light,
                                                                        color: theme.palette.success.dark,
                                                                        ml: 2
                                                                    }}
                                                                >
                                                                    <KeyboardArrowLeftOutlinedIcon fontSize="small" color="inherit" />
                                                                </Avatar>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Grid item>
                                                        <Grid container alignItems="center" justifyContent="space-between">
                                                            <Grid item>
                                                                <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                                                                    Time out
                                                                </Typography>
                                                                <Typography variant="subtitle1" color="inherit">
                                                                    {attendee.timeOut || 'No time out'}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item>
                                                                <Avatar
                                                                    variant="rounded"
                                                                    sx={{
                                                                        width: 16,
                                                                        height: 16,
                                                                        borderRadius: '5px',
                                                                        backgroundColor: theme.palette.orange.light,
                                                                        color: theme.palette.success.dark,
                                                                        ml: 2
                                                                    }}
                                                                >
                                                                    <KeyboardArrowRightOutlinedIcon fontSize="small" color="inherit" />
                                                                </Avatar>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Divider sx={{ my: 1.5 }} />
                                        </div>
                                    );
                                })}
                            </Grid>
                        </Grid>
                    </CardContent>
                </MainCard>
            )}
        </>
    );
};

PopularCard.propTypes = {
    isLoading: PropTypes.bool,
    topAttendees: PropTypes.array
};

export default PopularCard;
