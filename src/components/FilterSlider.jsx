import { Box, Slider } from '@mui/material';
import { useState } from 'react';

const FilterSlider = ({ slider }) => {
  //destructuring
  const { label, defaultValue, field } = slider;
  //state for slider
  const [value, setValue] = useState(defaultValue);
  //onChange handler
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1rem',
      }}
    >
      <Box sx={{ minWidth: '6rem' }}>{label}</Box>
      <Slider
        size='small'
        valueLabelDisplay='auto'
        value={value}
        max={200}
        onChange={handleChange}
      />
    </Box>
  );
};

export default FilterSlider;
