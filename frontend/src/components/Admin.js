import styles from '../style'
import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Hostels from './Hostels';
import Post from './Post';
import { getHostels } from '../actions/hostels';
import useStyles from './styles';

const Admin = () => {
const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHostels());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <Grow in>
        <Container>
          <Grid className="sm:flex-col-reverse" container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Hostels setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Post currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default Admin
