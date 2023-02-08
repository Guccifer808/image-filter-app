import { useContext, useRef, useState } from 'react';
import { Grid, Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { FilterContext } from './../App';
//picturepan instagram filters
import '../styles/instagram.css';
//styling
const StyledBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#1565C0',
  minHeight: '20rem',
  maxHeight: '100vh',
  marginBottom: '1rem',
  borderRadius: '10px',
  cursor: 'pointer',
});

const StyledImage = styled('img')((props) => ({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  filter: `brightness(${props.advancedFilter.brightness}%) contrast(${props.advancedFilter.contrast}%) saturate(${props.advancedFilter.saturate}%) sepia(${props.advancedFilter.sepia}%) grayScale(${props.advancedFilter.gray}%)`,
}));

const ImageSection = () => {
  //ref for input
  const uploadRef = useRef(null);
  //state for storing the image
  const [imageFile, setImageFile] = useState(null);
  //for applying filter to imageSection
  const { filterClass, advancedFilter } = useContext(FilterContext);

  //onChange handler. Storing the image with URL.createObjectURL and accessing 1st file in arr
  const handleInputChange = (e) => {
    setImageFile(URL.createObjectURL(e.target.files[0]));
  };
  //function to live render image
  const renderImage = () => (
    <figure style={{ width: '100%', height: '100%' }}>
      <StyledImage
        advancedFilter={!filterClass && advancedFilter}
        src={imageFile}
        alt='filter content'
        className={filterClass}
      />
    </figure>
  );

  return (
    <Grid item xs={12} md={7}>
      <StyledBox onClick={() => uploadRef.current && uploadRef.current.click()}>
        {imageFile ? (
          renderImage()
        ) : (
          <p style={{ fontSize: 24, color: 'white' }}>Upload your image</p>
        )}
      </StyledBox>
      {/* input that takes any image file extensions */}
      <input
        type='file'
        accept='image/*'
        hidden
        ref={uploadRef}
        onChange={handleInputChange}
      />
      <Button disabled={!imageFile} variant='contained' fullWidth>
        Upload New Image
      </Button>
    </Grid>
  );
};

export default ImageSection;
