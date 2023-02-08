import { Box, Slider } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { FilterContext } from './../App';

const FilterSlider = ({ slide }) => {
  //destructuring
  const { label, defaultValue, field } = slide;
  //state for slider
  const [value, setValue] = useState(defaultValue);
  //advanced filter state for slider drag
  const { advancedFilter, setAdvancedFilter } = useContext(FilterContext);
  //useEffect for slider
  //setting adv filter into current value and change field to value
  useEffect(() => {
    setAdvancedFilter({ ...advancedFilter, [field]: value });
  }, [value]);
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
