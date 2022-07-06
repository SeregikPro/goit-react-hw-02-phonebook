import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Input, Title } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Box mb={5}>
      <Title>Find contacts by name</Title>
      <Input value={value} onChange={onChange} placeholder="Type to search" />
    </Box>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
