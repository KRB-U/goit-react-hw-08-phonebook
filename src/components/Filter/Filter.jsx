import { useDispatch } from 'react-redux';
// import { FilterContainer, InputItem, LabelInput } from './Filter.styled';
import { setFilterValue } from 'components/redux/contcts/filterSlice';

import { FormControl, InputLabel, Input } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = evt => {
    const filterValue = evt.target.value;
    dispatch(setFilterValue(filterValue));
  };

  return (
    <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
      <InputLabel>Find contacts by name</InputLabel>
      <Input type="text" onChange={handleChange} />
    </FormControl>
  );
};
export { Filter };
