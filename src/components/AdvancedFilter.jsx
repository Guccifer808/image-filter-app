import { Box } from '@mui/material';
import FilterSlider from './FilterSlider';

const AdvancedFilter = () => {
  const slider = [
    { label: 'Brightness', defaultValue: 100, field: 'brightness' },
    { label: 'Contrast', defaultValue: 100, field: 'contrast' },
    { label: 'Saturation', defaultValue: 100, field: 'saturate' },
    { label: 'Sepia', defaultValue: 0, field: 'sepia' },
    { label: 'Grayscale', defaultValue: 0, field: 'gray' },
  ];
  return (
    <Box sx={{ marginTop: '2rem' }}>
      {slider.map((slide) => (
        <FilterSlider slide={slide} key={slide.field} />
      ))}
    </Box>
  );
};

export default AdvancedFilter;
