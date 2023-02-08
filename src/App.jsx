import { Container, Box, Grid } from '@mui/material';
import { createContext, useState } from 'react';
import AdvancedFilter from './components/AdvancedFilter';
import Filter from './components/Filter';
import FiltersSection from './components/FiltersSection';
import ImageSection from './components/ImageSection';

//creating context to use state from Filter component in App component
export const FilterContext = createContext();

function App() {
  const [sectionFilter, setSectionFilter] = useState('filter');
  //for applying filter to imageSection
  const [filterClass, setFilterClass] = useState('');
  //advanced filter state for slider drag
  const [advancedFilter, setAdvancedFilter] = useState({
    brightness: 100,
    contrast: 100,
    saturate: 100,
    sepia: 0,
    gray: 0,
  });
  //context provider value
  const value = {
    sectionFilter,
    setSectionFilter,
    filterClass,
    setFilterClass,
    advancedFilter,
    setAdvancedFilter,
  };

  return (
    <FilterContext.Provider value={value}>
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
            {sectionFilter === 'filter' ? <Filter /> : <AdvancedFilter />}
          </Grid>
        </Grid>
      </Container>
    </FilterContext.Provider>
  );
}

export default App;
