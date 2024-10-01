// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const Home = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Kick start local cockpit 🚀'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>TODO</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Home
