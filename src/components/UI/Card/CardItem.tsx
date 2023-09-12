import {NavLink} from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import no_image from '../../../assets/images/no_image.jpg'
import {Dentist} from "../../../../type";
import {useStore} from "../../../hooks/useStore.ts";
import './card.css';


export const CardItem = ({data, detail}: { data: Dentist, detail: boolean }) => {
    const {state, addId, removeId} = useStore();
    const isExist = state.ids.find(item => Number(item) === data.id);
    const handleAddId = (value: string) => {
        addId(value)
    };

    const handleRemoveId = (value: string) => {
        removeId(value)
    }

    return (
        <Card sx={{width: 345}}>
            <CardMedia
                sx={{height: 200}}
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
                {
                    isExist ? <Button variant="contained" size="small" color="error"
                                      onClick={() => handleRemoveId(String(data.id))}>Remove</Button>
                        : <Button variant="contained" size="small" color="success"
                                  onClick={() => handleAddId(String(data.id))}>Favorite</Button>
                }
                <Button variant="contained" size="small">
                    {
                        detail ? <NavLink to={`/home`}>
                                Go Back...
                            </NavLink>
                            :
                            <NavLink to={`/dentist/${data.id}`}>
                                Read More...
                            </NavLink>
                    }
                </Button>
            </CardActions>
        </Card>
    );
}