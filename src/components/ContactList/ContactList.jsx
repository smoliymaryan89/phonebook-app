import {
  Box,
  Button,
  List,
  ListItem,
  Text,
  useToast,
  Spinner,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import {
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  return isLoading ? (
    <Spinner />
  ) : (
    <List maxW="600px" p="0px 40px 40px 40px">
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem _notLast={{ mb: '10px' }} key={id}>
          <Box display="flex" alignItems="center" gap="25px">
            <Text>
              <Text as="span" fontSize="20px">
                {name}
              </Text>
              :
              <Text as="span" fontSize="20px">
                {number}
              </Text>
            </Text>
            <Button
              ml="auto"
              size="sm"
              onClick={() => {
                toast({
                  description: 'You have successfully deleted the contact!',
                  status: 'success',
                  duration: 3000,
                  isClosable: true,
                  position: 'top',
                });
                dispatch(deleteContact(id));
              }}
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
