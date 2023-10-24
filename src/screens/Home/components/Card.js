import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Stars from './Stars';
import colors from '../../../constants/colors';
import Button from '../../../components/Button/Button';
import { AvatarImage, CardStyle, RatingContainer } from '../styles';
import { Typography } from '../../../components/Typography/Typography';
import { Box } from '../../../components/SharedComponents/SharedComponents';

const Card = ({ avatar_url, login, id, url }) => {
  return (
    <Box css={CardStyle}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15, marginBottom: 15 }}>
        <AvatarImage src={avatar_url} />
        <Typography variant="h2" size={18}>
          {login}
        </Typography>
      </View>

      <View style={{ alignItems: 'flex-start', gap: 15 }}>
        <Typography>Endereço: {url}</Typography>
        <Box css={RatingContainer}>
          <Typography>Avaliação Geral:</Typography>
          <Stars stars={id} showNumber />
        </Box>

        <Box css={RatingContainer}>
          <Typography>Qualidade do Combustivel:</Typography>
          <Stars stars={id + 2} showNumber />
        </Box>

        <Box css={RatingContainer}>
          <Typography>Atendimento:</Typography>
          <Stars stars={Math.random() * 5} showNumber />
        </Box>
      </View>

      <Button
        text="Avaliar"
        variant="text"
        width="20%"
        textColor={colors.primaryButtonBackground}
      />
    </Box>
  );
};

Card.propTypes = {
  avatar_url: PropTypes.string,
  login: PropTypes.string,
  id: PropTypes.number,
  url: PropTypes.string,
};

export default Card;
