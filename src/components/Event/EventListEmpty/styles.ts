import styled from 'styled-components/native';

export const Container = styled.View``;

export const CustomText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.text_base};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;
