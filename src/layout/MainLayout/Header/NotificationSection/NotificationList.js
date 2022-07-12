// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Chip, Divider, Grid, List, ListItem, ListItemSecondaryAction, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import config from 'config';

// styles
const ListItemWrapper = styled('div')(({ theme }) => ({
    cursor: 'pointer',
    padding: 16,
    '&:hover': {
        background: theme.palette.primary.light
    },
    '& .MuiListItem-root': {
        padding: 0
    }
}));

// ==============================|| NOTIFICATION LIST ITEM ||============================== //

const NotificationList = () => {
    const theme = useTheme();
    const [notifications, setNotifications] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);

    const chipSX = {
        height: 24,
        padding: '0 6px'
    };
    const chipErrorSX = {
        ...chipSX,
        color: theme.palette.orange.dark,
        backgroundColor: theme.palette.orange.light,
        marginRight: '5px'
    };

    const getNotifications = async () => {
        await axios.get(`${config.backendUri}/notifications`).then((res) => {
            const notifications = [];
            res.data.map((e) => {
                notifications.push({
                    id: e._id,
                    message: e.message,
                    time: e.time
                });
            });
            setNotifications(notifications);
            setHasLoaded(true);
        });
    };

    const deleteNotification = async (id) => {
        await axios
            .delete(`${config.backendUri}/notifications/${id}`)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const removeNotification = (id) => {
        setNotifications((current) =>
            current.filter((notification) => {
                return notification.id !== id;
            })
        );
    };

    useEffect(() => {
        setHasLoaded(false);
        getNotifications();
    }, []);

    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 330,
                py: 0,
                borderRadius: '10px',
                [theme.breakpoints.down('md')]: {
                    maxWidth: 300
                },
                '& .MuiListItemSecondaryAction-root': {
                    top: 22
                },
                '& .MuiDivider-root': {
                    my: 0
                }
            }}
        >
            {hasLoaded && (
                <div>
                    {notifications.map((notification) => {
                        return (
                            <ListItemWrapper>
                                <ListItem alignItems="center">
                                    <ListItemSecondaryAction>
                                        <Grid container justifyContent="flex-end">
                                            <Grid item xs={12}>
                                                <Typography variant="caption" display="block" gutterBottom>
                                                    {notification.time}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </ListItemSecondaryAction>
                                </ListItem>
                                <Grid container direction="column" className="list-container">
                                    <Grid item xs={12} sx={{ pb: 2 }}>
                                        <Typography variant="subtitle2">{notification.message}</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container>
                                            <Grid item>
                                                <Chip label="An intruder has been detected" sx={chipErrorSX} />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <br />
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            onClick={() => {
                                                deleteNotification(notification.id);
                                                removeNotification(notification.id);
                                            }}
                                        >
                                            Mark as read
                                        </Button>
                                    </Grid>
                                </Grid>
                            </ListItemWrapper>
                        );
                    })}
                </div>
            )}
            <Divider />
        </List>
    );
};

export default NotificationList;
