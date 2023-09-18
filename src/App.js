import { Button } from '@mui/material';
import './App.css';
import BasicDatePicker from './components/BasicDatePicker';
import OriginBox from './components/OriginBox';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <OriginBox id="origin1" />
          </Grid>
          <Grid item xs={9}>
          </Grid>
          <Grid item xs={3}>
            <OriginBox id="origin2" />
          </Grid>
          <Grid item xs={3}>
            <BasicDatePicker label="Depart" />
          </Grid>
          <Grid item xs={3}>
            <BasicDatePicker label="Return" />
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained">Search</Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained">Add Origin</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
