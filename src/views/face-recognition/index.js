import { Grid, Typography, Card, CardMedia } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import Webcam from 'react-webcam';
import { IconFaceId } from '@tabler/icons';

const FaceRecognitionPage = () => {
    const videoConstraints = {
        width: 600,
        height: 600,
        facingMode: 'user'
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
