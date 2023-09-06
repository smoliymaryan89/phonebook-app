import { Box, Button, List, ListItem, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { selectFilteredContacts } from 'redux/contacts/contactsSelectors';

const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List maxW="600px" p="0px 40px 40px 40px">
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem _notLast={{ mb: '10px' }} key={id}>
          <Box display="flex" alignItems="center" gap="25px">
            <Text>
              <Text as="span" fontSize="20px">
                {name}
              </Text>
              :{' '}
              <Text as="span" fontSize="20px">
                {number}
              </Text>
            </Text>
            <Button
              ml="auto"
              size="sm"
              onClick={() => dispatch(deleteContact(id))}
              type="button"
              _hover={{ bg: 'red' }}
            >
              Delete
            </Button>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;