import { Grid, Typography, Card, CardMedia } from '@mui/material';
import { useRef, useState, useCallback, useEffect } from 'react';
import * as faceapi from 'face-api.js';
import MainCard from 'ui-component/cards/MainCard';
// import Webcam from 'react-webcam';
import { IconFaceId, IconCheck, IconX } from '@tabler/icons';
import config from 'config';
import axios from 'axios';

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
    const [faceDetected, setFaceDetected] = useState(false);
    const [testImage, setTestImage] = useState([]);
    const [name, setName] = useState('');

    const videoConstraints = {
        width: 600,
        height: 600,
        facingMode: 'user'
    };

    const recognize = async (snapshot) => {
        await axios
            .post(`${config.faceRecognitionUri}/face-recognition/recognize`)
            .then((res) => {
                console.log(res.data.result._label);
                setName(res.data.result._label);
            })
            .catch((err) => console.log(err));
    };

    const detectFace = () => {
        if (!isModelLoaded) console.log('Models are not loaded');

        setInterval(async () => {
            setFaceDetected(false);

            // do it here
            const detections = await faceapi.detectSingleFace(webcamRef.current).withFaceLandmarks();
            if (detections != null) {
                snapshot();
                recognize();
            }
        }, 5000);
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
    }, [webcamRef, setImgSrc]);

    const deleteSnapshot = async () => {
        await axios
            .delete(`${config.faceRecognitionUri}/face-recognition`)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    };

    const uploadTestImage = async (snapshot) => {
        await axios
            .post(`${config.faceRecognitionUri}/face-recognition/detect-face`, { imageData: snapshot })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    };

    const snapshot = () => {
        let canvas = document.createElement('canvas');
        let video = document.getElementById('face-detect-video');

        canvas.width = 420;
        canvas.height = 420;

        let ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        const snapshot = canvas.toDataURL('image/jpeg');
        uploadTestImage(snapshot);
    };

    useEffect(() => {
        loadModels();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
                            {/* {isModelLoaded && (
                                <Webcam
                                    ref={webcamRef}
                                    audio={false}
                                    height={videoConstraints.height}
                                    screenshotFormat="image/jpeg"
                                    width={videoConstraints.width}
                                    videoConstraints={videoConstraints}
                                    onPlay={startVideo}
                                />
                            )} */}
                            {isModelLoaded && <video ref={webcamRef} id="face-detect-video" width="600" height="600" autoPlay muted />}
                        </CardMedia>
                    </Card>
                </Grid>
                <br />
                <br />
                <br />
                <br />
                <p>{name}</p>
                <button onClick={snapshot}>Capture photo</button>
                <button onClick={deleteSnapshot}>Delete photo</button>
                {/* {faceDetected && (
                    <Grid item>
                        <IconCheck color="#4BB543" size="100px" stroke="1px" />
                    </Grid>
                )}
                {!faceDetected && (
                    <Grid item>
                        <IconX color="#FC100D" size="100px" stroke="1px" />
                    </Grid>
                )} */}
                <Grid item>
                    {/* <IconFaceId color={faceDetected ? "#5E4BC3"} size="100px" stroke="1px" /> */}
                    <IconFaceId color={faceDetected ? '#4BB543' : '#FC100D'} size="100px" stroke="1px" />
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
