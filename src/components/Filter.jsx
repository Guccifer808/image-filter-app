import { useState } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { filterValues } from '../utils/filterValues';
const Filter = () => {
  //state
  const [filterType, setFilterType] = useState('');
  //onChange handle
  const handleChange = (e) => {
    setFilterType(e.target.value);
  };
  return (
    <Box sx={{ maxWidth: 250 }}>
      <FormControl fullWidth>
        <InputLabel>Filter</InputLabel>
        <Select value={filterType} onChange={handleChange} label='filter'>
          {/* Mapping through filterValues */}
          {filterValues.map((filter) => (
            <MenuItem value={filter.class} key={filter.name}>
              {filter.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filter;
