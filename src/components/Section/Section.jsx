import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'components/Box';

const Section = ({ title, children }) => {
  return (
    <Box>
      <h2>{title}</h2>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
