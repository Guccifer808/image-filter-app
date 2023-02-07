import { useContext } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import { filterValues } from '../utils/filterValues';
import { FilterContext } from '../App';
const Filter = () => {
  //state
  const { filterType, setFilterType } = useContext(FilterContext);
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
