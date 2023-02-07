import { Container, Box, Grid } from '@mui/material';
import AdvancedFilter from './components/AdvancedFilter';
import Filter from './components/Filter';
import FiltersSection from './components/FiltersSection';
import ImageSection from './components/ImageSection';

function App() {
  return (
    <Container sx={{ marginTop: '5rem', marginBottom: '5rem' }}>
      <Box sx={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h1>Image Filter</h1>
      </Box>
      {/* Image section */}
      <Grid container spacing={10}>
        <ImageSection />
        {/* Filters section */}
        <Grid item xs={12} md={5}>
          <FiltersSection />
          <Filter />
          <AdvancedFilter />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
