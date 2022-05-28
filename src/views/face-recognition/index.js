import { Grid, Typography, Card, CardMedia } from '@mui/material';
import { useRef, useState, useCallback, useEffect } from 'react';
import * as faceapi from 'face-api.js';
import MainCard from 'ui-component/cards/MainCard';
import Webcam from 'react-webcam';
import { IconFaceId } from '@tabler/icons';

faceapi.env.monkeyPatch({
    Canvas: HTMLCanvasElement,
    Image: HTMLImageElement,
    ImageData: ImageData,
    Video: HTMLVideoElement,
    createCanvasElement: () => document.createElement('canvas'),
    createImageElement: () => document.createElement('img')
});

const FaceRecognitionPage = () => {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [isModelLoaded, setIsModelLoaded] = useState(false);

    const videoConstraints = {
        width: 600,
        height: 600,
        facingMode: 'user'
    };

    const detectFace = () => {
        if (!isModelLoaded) console.log('Models are not loaded');

        setInterval(async () => {
            const detections = await faceapi.detectSingleFace(webcamRef.current).withFaceLandmarks();
            if (detections != null) console.log(detections);
        }, 1000);
    };

    const startVideo = async () => {
        const opt = { audio: false, video: true };
        await navigator.mediaDevices
            .getUserMedia(opt)
            .then((stream) => {
                webcamRef.current.srcObject = stream;
            })
            .catch((err) => console.log(err));
    };

    const loadModels = async () => {
        Promise.all([
            await faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
            await faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
            await faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
            await faceapi.nets.faceRecognitionNet.loadFromUri('/models')
        ])
            .then(() => {
                setIsModelLoaded(true);
                startVideo();
                detectFace();
            })
            .catch((err) => console.log(err));
    };

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
        console.log(imageSrc);
    }, [webcamRef, setImgSrc]);

    useEffect(() => {
        loadModels();
    }, []);

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
                            {!isModelLoaded && <p>Loading ...</p>}
                            {isModelLoaded && (
                                <Webcam
                                    ref={webcamRef}
                                    audio={false}
                                    height={videoConstraints.height}
                                    screenshotFormat="image/jpeg"
                                    width={videoConstraints.width}
                                    videoConstraints={videoConstraints}
                                    onPlay={startVideo}
                                />
                            )}
                            {/* <video ref={webcamRef} id="video" width="600" height="600" autoPlay muted /> */}
                        </CardMedia>
                    </Card>
                </Grid>
                <br />
                <br />
                <br />
                <br />
                <button onClick={capture}>Capture photo</button>
                {imgSrc && <img src={imgSrc} alt="altimg" />}
                <Grid item>
                    <IconFaceId color="#5E4BC3" size="100px" stroke="1px" />
                </Grid>
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
