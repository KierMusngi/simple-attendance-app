import { Card, CardMedia } from '@mui/material';

const ImageCard = (props) => {
    const { image } = props;

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia component="img" alt="imahe" height="140" src={image} />
            </Card>
        </div>
    );
};

export default ImageCard;
