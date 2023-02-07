import { Box } from '@mui/material';
import FilterSlider from './FilterSlider';

const AdvancedFilter = () => {
  const dragSlider = [
    { label: 'Brightness', defaultValue: 100, field: 'brightness' },
    { label: 'Contrast', defaultValue: 100, field: 'contrast' },
    { label: 'Saturation', defaultValue: 100, field: 'saturation' },
    { label: 'Sepia', defaultValue: 0, field: 'sepia' },
    { label: 'Grayscale', defaultValue: 0, field: 'grayscale' },
  ];
  return (
    <Box sx={{ marginTop: '2rem' }}>
      {dragSlider.map((slider) => (
        <FilterSlider slider={slider} key={slider.label} />
      ))}
    </Box>
  );
};

export default AdvancedFilter;
