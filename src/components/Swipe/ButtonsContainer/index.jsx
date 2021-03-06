import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTimes, faBolt, faHeart } from '@fortawesome/free-solid-svg-icons';
import { ButtonsWrapper } from './styled';
import { WhatsAppButton, ReactionButton } from '../../base/Buttons';

const ButtonsContainer = ({
  onDislike,
  onSuperLike,
  onLike,
  onWhatsapp,
}) => (
  <ButtonsWrapper>
    {onWhatsapp && (
      <WhatsAppButton onClick={onWhatsapp}>
        Enviar Mensaje
        <FontAwesomeIcon icon={faWhatsapp} size="lg" />
      </WhatsAppButton>
    )}
    {onDislike && (
      <ReactionButton onClick={onDislike} color="secondary">
        <FontAwesomeIcon icon={faTimes} size="2x" />
      </ReactionButton>
    )}
    {onSuperLike && (
      <ReactionButton onClick={onSuperLike} size="sm" color="yellow">
        <FontAwesomeIcon icon={faBolt} size="lg" />
      </ReactionButton>
    )}
    {onLike && (
      <ReactionButton onClick={onLike} color="primary">
        <FontAwesomeIcon icon={faHeart} size="2x" />
      </ReactionButton>
    )}
  </ButtonsWrapper>
);

ButtonsContainer.propTypes = {
  onDislike: PropTypes.func,
  onSuperLike: PropTypes.func,
  onLike: PropTypes.func,
  onWhatsapp: PropTypes.func,
};

ButtonsContainer.defaultProps = {
  onDislike: null,
  onSuperLike: null,
  onLike: null,
  onWhatsapp: null,
};

export default ButtonsContainer;
