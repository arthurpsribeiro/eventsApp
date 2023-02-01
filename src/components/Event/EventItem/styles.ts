import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { css } from 'styled-components';

import { EventCategories } from '.';
import theme from '../../../styles/theme';
import { Platform } from 'react-native';

type ItemContainerProps = {
  category: EventCategories;
};

const categoriesColorsTable = new Map<EventCategories, string>([
  [EventCategories.BUSINESS, theme.colors.main],
  [EventCategories.EDUCATION, theme.colors.secondary],
]);

export const Container = styled.View`
  padding: 5px;
  background-color: ${theme.colors.background_secondary};
  flex-direction: row;
  border-radius: 5px;

  ${css`
    border-left-color: ${({ category }: ItemContainerProps) =>
      categoriesColorsTable.get(category)};
    border-left-width: 10px;
    border-left-style: solid;
  `}
`;

export const TouchableWrapper = styled(RectButton)``;

export const InfoContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 0 5px;
`;

export const InfoRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

export const Title = styled.Text`
  font-size: ${theme.fontSize.text_sm}px;
  font-weight: 600;
  color: ${theme.colors.text_dark};
`;

export const InfoText = styled.Text`
  font-size: ${theme.fontSize.text_xs}px;
  color: ${theme.colors.text};
  font-weight: 400;
  margin: 2px 0;
`;

export const PriceText = styled.Text`
  font-size: ${theme.fontSize.text_sm}px;
  font-weight: 600;
  color: ${theme.colors.text_dark};
`;

export const PurchaseButton = styled(RectButton)`
  padding: ${Platform.OS === 'ios' ? '5px 10px ' : '3px 10px'};
  border-radius: 5px;
  background-color: ${theme.colors.button_secondary};
`;

export const ButtonTitle = styled.Text`
  color: white;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.text_sm}px;
`;

export const EventThumb = styled.Image`
  width: 120px;
  height: 120px;

  border-radius: 5px;
`;
