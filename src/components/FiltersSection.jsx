import { useContext } from 'react';
import { Box, Tabs, Tab, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

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
  //Imported useMediaQuery and useTheme from @mui/material and @mui/material/styles respectively.
  // Used useMediaQuery to get the current screen size and stored it in isMobile variable.
  // Used useTheme to access the theme object and stored it in theme variable.
  // Added a conditional statement to adjust the marginBottom of the Box component based on the screen size.
  // Added variant prop to the Tabs component and set it to fullWidth for mobile devices and standard for larger screens.
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ marginBottom: isMobile ? '1rem' : '2rem' }}>
      <Tabs
        textColor='primary'
        indicatorColor='primary'
        value={sectionFilter}
        onChange={handleChange}
        variant={isMobile ? 'fullWidth' : 'standard'}
      >
        <Tab value='filter' label='Filter' />
        <Tab value='advancedFilter' label='Advanced Filter' />
      </Tabs>
    </Box>
  );
};

export default FiltersSection;
