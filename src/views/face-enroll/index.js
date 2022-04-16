import { Snackbar, Grid, Button, Alert, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import ImageCard from 'ui-component/cards/imageCard';
import { IconPhoto } from '@tabler/icons';
import config from 'config';
import axios from 'axios';

const FaceEnrollPage = () => {
    const [open, setOpen] = useState(false);
    const [images, setImages] = useState([]);
    const [employee, setEmployee] = useState('');
    const [employees, setEmployees] = useState([]);
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

    const getBase64 = (file) => {
        return new Promise((resolve) => {
            let baseURL = '';
            let reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => {
                baseURL = reader.result;
                resolve(baseURL);
            };
        });
    };

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        getBase64(file)
            .then((result) => {
                file['base64'] = result;
                const updatedImages = [...images, result];
                setImages(updatedImages);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const enrollFace = () => {
        // implement enrollment API
        setImages([]);
        setEmployee('');
        setOpen(true);
    };

    useEffect(() => {
        setHasLoaded(false);
        getEmployees();
    }, []);

    const success = (
        <div>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={() => {
                    setOpen(false);
                }}
                message="Face enrolled"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert severity="success" sx={{ width: '100%' }}>
                    Face enrolled
                </Alert>
            </Snackbar>
        </div>
    );

    const handleChange = (event) => {
        setEmployee(event.target.value);
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

    return (
        <MainCard title="Enroll Face">
            {hasLoaded && employeeSelect}
            <br />
            <br />
            <br />
            {images.length > 0 && (
                <Grid container justifyContent="center" alignItems="center" direction="column">
                    <Typography variant="h5" color="#D0D0D0">
                        Face Images
                    </Typography>
                    <br />
                </Grid>
            )}
            {images.length === 0 && (
                <Grid container justifyContent="center" alignItems="center" direction="column">
                    <br />
                    <br />
                    <Grid item xs={12}>
                        <IconPhoto color="#D0D0D0" size="60px" />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5" color="#D0D0D0">
                            Upload face images
                        </Typography>
                    </Grid>
                </Grid>
            )}
            <Grid container spacing={2}>
                {images.map((image) => {
                    return (
                        <Grid item>
                            <ImageCard image={image} />
                        </Grid>
                    );
                })}
            </Grid>
            <br />
            <br />
            <Grid container justifyContent="flex-end" spacing={2}>
                <Grid item>
                    <Button variant="contained" color="secondary" component="label">
                        Upload
                        <input type="file" hidden onChange={handleFileInputChange} />
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" onClick={enrollFace}>
                        Save
                    </Button>
                </Grid>
            </Grid>
            {success}
        </MainCard>
    );
};

export default FaceEnrollPage;
