import { Box, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/contactsSelectors';
import { setFilter } from 'redux/contacts/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <Box w="300px" p="0px 40px 40px 40px">
      <FormControl>
        <FormLabel fontWeight="400">
          Find contacts by name and phone number
        </FormLabel>
        <Input
          type="text"
          focusBorderColor="purple.400"
          variant="outline"
          value={filter}
          onChange={handleFilter}
        />
      </FormControl>
    </Box>
  );
};

export default Filter;
