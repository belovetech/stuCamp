import React from 'react';
import styles from '../style';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deleteHostel } from '../actions/hostels';

export const Hostel = ({ hostel }) => {
    const dispatch = useDispatch();

    useState({
        name: '', type: '', ratingsAverage: 1, ratingQuantity: 0,
        price: 0, roomsAvailable: 0, closeBy: false, imageCover: '',
        summary: '', images: [], location: ''});

    return (
      <Card className={styles.card}>
        <CardMedia className={styles.media} image={hostel.imageCover || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={hostel.name} />
        <div className={styles.overlay}>
          <Typography variant="h6">{hostel.type}</Typography>
          <Typography variant="h6">{hostel.location}</Typography>
          {/* <Typography variant="body2">{moment(hostel.createdAt).fromNow()}</Typography> */}
        </div>
        <div className={styles.overlay2}>
          <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(hostel.id)}><MoreHorizIcon fontSize="default" /></Button>
        </div>
        <Typography className={styles.title} gutterBottom variant="h5" component="h2">{hostel.type}</Typography>
        <Typography className={styles.title} gutterBottom variant="h5" component="h2">{hostel.ratingsAverage}</Typography>
        <Typography className={styles.title} gutterBottom variant="h5" component="h2">{hostel.ratingQuantity}</Typography>
        <Typography className={styles.title} gutterBottom variant="h5" component="h2">{hostel.price}</Typography>
        <Typography className={styles.title} gutterBottom variant="h5" component="h2">{hostel.roomsAvailable}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{hostel.summary}</Typography>
        </CardContent>
        <CardActions className={styles.cardActions}>
          <Button size="small" color="primary" onClick={() => dispatch(deleteHostel(hostel.id))}><DeleteIcon fontSize="small" /> Delete</Button>
        </CardActions>
      </Card>
    );
}
