import { useContext } from 'react';
import { Box, Tabs, Tab } from '@mui/material';

import { FilterContext } from '../App';

const FiltersSection = () => {
  //filter state
  const { sectionFilter, setSectionFilter, setFilterClass } =
    useContext(FilterContext);

  //handle change for colored mui tabs
  const handleChange = (e, newValue) => {
    setSectionFilter(newValue);
    //reset filter after click on advanced filter section
    if (newValue === 'advancedFilter') {
      setFilterClass('');
    }
  };
  return (
    <Box sx={{ marginBottom: '2rem' }}>
      <Tabs
        textColor='primary'
        indicatorColor='primary'
        value={sectionFilter}
        onChange={handleChange}
      >
        <Tab value='filter' label='Filter' />
        <Tab value='advancedFilter' label='Advanced Filter' />
      </Tabs>
    </Box>
  );
};

export default FiltersSection;
