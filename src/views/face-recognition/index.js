import { Grid, Typography, Card, CardMedia } from '@mui/material';
import { useRef, useState, useCallback, useEffect } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import Webcam from 'react-webcam';

const FaceRecognitionPage = () => {
    const webcamRef = useRef(null);

    const videoConstraints = {
        width: 600,
        height: 600,
        facingMode: 'user'
    };

    const startVideo = async () => {
        const opt = { audio: false, video: true, facingMode: 'user' };
        await navigator.mediaDevices
            .getUserMedia(opt)
            .then((stream) => {
                webcamRef.current.srcObject = stream;
            })
            .catch((err) => console.log(err));
    };

    return (
        <MainCard style={{ backgroundColor: '#EDE7F6' }}>
            <br />
            <br />
            <br />
            <br />
            <Grid container alignItems="center" justifyContent="center" direction="column">
                <Grid item>
                    <Card style={{ height: videoConstraints.height, width: videoConstraints.width }}>
                        <CardMedia>
                            <Webcam
                                ref={webcamRef}
                                audio={false}
                                height={videoConstraints.height}
                                screenshotFormat="image/jpeg"
                                width={videoConstraints.width}
                                videoConstraints={videoConstraints}
                            />
                        </CardMedia>
                    </Card>
                </Grid>
                <br />
                <br />
                <br />
                <br />
                <Grid item>
                    <Typography variant="h5" color="#5E4BC3">
                        Smile to entry
                    </Typography>
                </Grid>
            </Grid>
            <br />
            <br />
            <br />
            <br />
        </MainCard>
    );
};

export default FaceRecognitionPage;
