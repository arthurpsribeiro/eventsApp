import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { css } from 'styled-components';

import theme from '../../styles/theme';
import { EventCategories } from '../../components';

type ContentContainerProps = {
  category: EventCategories;
};

const categoriesColorsTable = new Map<EventCategories, string>([
  [EventCategories.BUSINESS, theme.colors.main],
  [EventCategories.EDUCATION, theme.colors.secondary],
]);

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  justify-content: space-between;
`;

export const ScrollableContainer = styled.ScrollView.attrs({
  contentContainerStyle: { flexGrow: 1 },
})``;

export const EventThumb = styled.Image`
  width: 100%;
  height: 40%;
  border-radius: 5px;
`;

export const ContentContainer = styled.View`
  background-color: ${theme.colors.background_secondary};
  justify-content: space-between;
  padding: 10px;
  border-radius: 5px;
  flex: 1;
  margin: 10px 0;

  ${css`
    border-left-color: ${({ category }: ContentContainerProps) =>
      categoriesColorsTable.get(category)};
    border-left-width: 10px;
    border-left-style: solid;
  `}
`;

export const EventTitle = styled.Text`
  font-size: ${theme.fontSize.text_lg}px;
  font-weight: 600;
  color: ${theme.colors.text_dark};
`;

export const InfoWrapper = styled.View``;

export const InfoLabel = styled.Text`
  font-size: ${theme.fontSize.text_sm}px;
  font-weight: 600;
  margin-bottom: 4px;
  color: ${theme.colors.text_dark};
`;

export const InfoText = styled.Text`
  font-size: ${theme.fontSize.text_sm}px;
  color: ${theme.colors.text};
  font-weight: 500;
`;

export const InfoDescription = styled.Text`
  font-size: ${theme.fontSize.text_sm}px;
  color: ${theme.colors.text};
  text-align: justify;
`;

export const PurchaseButton = styled(RectButton)`
  align-items: center;
  padding: 10px 15px 10px 15px;

  border-radius: 5px;
  background-color: ${theme.colors.button_secondary};
`;

export const ButtonTitle = styled.Text`
  color: white;
  font-size: ${theme.fontSize.text_lg}px;
  font-weight: 700;
`;
