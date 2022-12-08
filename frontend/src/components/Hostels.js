import React from 'react'
import styles from '../style'
import { Grid, CircularProgress } from 'material-ui/core'
import Hostel from './Hostel'
import { useSelector } from 'react-redux'

export const Hostels = () => {
  const hostels = useSelector((state) => state.hostels)
  console.log("hostels", hostels)
  return (
    !hostels.length ? <CircularProgress /> : (
        <Grid container alignItems="stretch" spacing={3}>
            {hostels.map((hostel) => (
                <Grid key={hostel.id} item xs={12} sm={6}>
                    <Hostel hostel={hostel} />
                </Grid>
            ))}
        </Grid>
    )
  )
}
