import { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { styled } from '@mui/system';

const FiltersSection = () => {
  //filter state
  const [filter, setFilter] = useState('filter');
  //handle change for colored mui tabs
  const handleChange = (e, newValue) => {
    setFilter(newValue);
  };
  return (
    <Box sx={{ marginBottom: '2rem' }}>
      <Tabs
        textColor='primary'
        indicator='primary'
        value={filter}
        onChange={handleChange}
      >
        <Tab value='filter' label='Filter' />
        <Tab value='advancedFilter' label='Advanced Filter' />
      </Tabs>
    </Box>
  );
};

export default FiltersSection;
