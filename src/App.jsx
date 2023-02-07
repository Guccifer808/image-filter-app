import { Container, Box, Grid } from '@mui/material';
import FiltersSection from './components/FiltersSection';
import ImageSection from './components/ImageSection';

function App() {
  return (
    <Container sx={{ marginTop: '4rem', marginBottom: '4rem' }}>
      <Box sx={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1>Image Filter</h1>
      </Box>
      <Grid container spacing={10}>
        <ImageSection />
        <FiltersSection />
      </Grid>
    </Container>
  );
}

export default App;
