import { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import { filterValues } from '../utils/filterValues';

const Filter = () => {
  //state
  // const { filterType, setFilterType } = useContext(FilterContext);
  const [filterClass, setFilterClass] = useState('');
  //onChange handle
  const handleChange = (e) => {
    setFilterClass(e.target.value);
  };
  return (
    <Box sx={{ maxWidth: 250 }}>
      <FormControl fullWidth>
        <InputLabel>Filter</InputLabel>
        <Select value={filterClass} onChange={handleChange} label='Filter'>
          {/* Mapping through filterValues */}
          {filterValues.map((filter) => (
            <MenuItem value={filter.class} key={filter.class}>
              {filter.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filter;
