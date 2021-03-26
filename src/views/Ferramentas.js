import React from 'react'
import {AppBar, Toolbar, Grid, makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
  ferramentaContainer: {
    paddingTop: '20px',
    paddingLeft: '20px',
    paddingRight: '50px',
  }
})

const Ferramentas = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          Item 1
        </Grid>
        <Grid item xs={4}>
          Item 2
        </Grid>
      </Grid>
    </>
  )
}

export default Ferramentas