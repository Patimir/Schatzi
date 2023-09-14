import './App.css';
import BasicDatePicker from './components/BasicDatePicker';
import OriginBox from './components/OriginBox';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <OriginBox id="origin1" />
          </Grid>
          <Grid item xs={6}>
          </Grid>
          <Grid item xs={6}>
            <OriginBox id="origin2" />
          </Grid>
          <Grid item xs={6}>
            <BasicDatePicker label="Depart" />
          </Grid>
        </Grid>

      </Container>

    </div>
  );
}

export default App;
