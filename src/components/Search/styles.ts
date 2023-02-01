import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

import { Platform } from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  /* padding: ${Platform.OS === 'ios' ? '10px' : '0px 10px'}; */
  padding: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Icon = styled(Feather)`
  align-self: center;
  font-size: ${({ theme }) => theme.fontSize.text_base}px;
  margin-right: 5px;
  color: ${({ theme }) => theme.colors.text};
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: '#848488',
  paddingVertical: 0,
})`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSize.text_base}px;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.text_lg}px;
  /* height: 30px; */
  /* padding: 0; */
`;
