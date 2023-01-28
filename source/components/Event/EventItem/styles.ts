import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { css } from 'styled-components';

import { eventCategories } from '.';
import theme from '../../../styles/theme';

type ItemContainerProps = {
  category: eventCategories;
};

const categoriesColorsTable = new Map<eventCategories, string>([
  [eventCategories.BUSINESS, theme.colors.main],
  [eventCategories.EDUCATION, theme.colors.secondary],
]);

export const Container = styled.View`
  padding: 5px;
  background-color: white;

  ${css`
    border-radius: 5px;
    border-left-color: ${({ category }: ItemContainerProps) =>
      categoriesColorsTable.get(category)};
    border-left-width: 10px;
    border-left-style: solid;
  `}
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

export const Title = styled.Text``;

export const InfoText = styled.Text``;

export const PurchaseButton = styled(RectButton)`
  padding: 5px 10px 5px 10px;
  border-radius: 5;
  background-color: ${theme.colors.button_primary};
`;

export const ButtonTitle = styled.Text`
  color: white;
  font-weight: 700;
`;
