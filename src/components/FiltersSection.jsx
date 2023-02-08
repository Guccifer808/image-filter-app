import { useContext } from 'react';
import { Box, Tabs, Tab } from '@mui/material';

import { FilterContext } from '../App';

const FiltersSection = () => {
  //filter state
  const { sectionFilter, setSectionFilter } = useContext(FilterContext);

  //handle change for colored mui tabs
  const handleChange = (e, newValue) => {
    setSectionFilter(newValue);
  };
  return (
    <Box sx={{ marginBottom: '2rem' }}>
      <Tabs
        textColor='primary'
        indicatorColor='primary'
        value={sectionFilter}
        onChange={handleChange}
      >
        <Tab value='filtertest' label='Filter' />
        <Tab value='advancedFilter' label='Advanced Filter' />
      </Tabs>
    </Box>
  );
};

export default FiltersSection;
