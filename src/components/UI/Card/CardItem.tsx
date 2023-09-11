import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import no_image from '../../../assets/images/no_image.jpg'
import {Dentist} from "../../../../type";

import './card.css';

export const CardItem = ({data}: { data: Dentist}) => {
        return (
        <Card sx={{ width: 345 }}>
            <CardMedia
                sx={{ height: 200}}
                image={no_image}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Address: {data.address.city}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    E-mail: {data.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Phone: {data.phone}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Web Site: {data.website}
                </Typography>
            </CardContent>
            <CardActions className="card-actions">
                <Button variant="contained" size="small">Favorite</Button>
                <Button variant="contained" size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}