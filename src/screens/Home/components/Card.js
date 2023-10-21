import { View } from 'react-native';
import PropTypes from 'prop-types';
import { AvatarImage, CardStyle } from '../styles';
import { Typography } from '../../../components/Typography/Typography';
import React from 'react';
import Button from '../../../components/Button/Button';
import colors from '../../../constants/colors';
import { Box } from '../../../components/SharedComponents/SharedComponents';

const Card = ({ avatar_url, login, id, url }) => {
  return (
    <Box css={CardStyle}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15, marginBottom: 15 }}>
        <AvatarImage src={avatar_url} />
        <Typography>{login}</Typography>
      </View>

      <View style={{ alignItems: 'flex-start', gap: 15 }}>
        <Typography>Endereço: {url}</Typography>
        <Typography>Avaliação Geral: {id}</Typography>
        <Typography>Qualidade do Combustivel: {id + 0.1}</Typography>
        <Typography>Atendimento: {Math.random().toFixed(1)}</Typography>
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
