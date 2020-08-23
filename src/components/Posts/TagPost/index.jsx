import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../base/Buttons';
import { Tag, Wrapper } from './styled';

const TagsPost = ({ onEnds }) => (
  <>
    <h2>Preferencias</h2>
    <Wrapper>
      <Tag>whatever</Tag>
      <Tag>pants</Tag>
      <Tag active>t-shirt</Tag>
      <Tag>skirt</Tag>
      <Tag>shoes</Tag>
      <Tag>tie</Tag>
      <Tag>whatever</Tag>
      <Tag>pants</Tag>
      <Tag active>t-shirt</Tag>
      <Tag>skirt</Tag>
      <Tag>shoes</Tag>
      <Tag>tie</Tag>
      <Button margin="10px" onClick={onEnds}>
        Guardar
      </Button>
    </Wrapper>
  </>
);

TagsPost.propTypes = {
  onEnds: PropTypes.func.isRequired,
};

export default TagsPost;