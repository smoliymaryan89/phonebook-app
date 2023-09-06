import { Link, List, ListItem } from '@chakra-ui/react';
import useAuth from 'hooks/useAuth';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <List>
        <ListItem listStyleType="none">
          <Link as={NavLink} to="/">
            Home
          </Link>
        </ListItem>
        {isLoggedIn && (
          <ListItem listStyleType="none">
            <Link as={NavLink} to="/contacts">
              Contacts
            </Link>
          </ListItem>
        )}
      </List>
    </nav>
  );
};

export default Navigation;
