import ChartKid from './chart';
import ItemStatistic from './itemStatistic';
import { ContentStyled, ContentTitle } from './style';

const ContentStatistic = () => {
  return (
    <ContentStyled>
      <ContentTitle>Estatistica de Angola</ContentTitle>
      <ChartKid />
    </ContentStyled>
  );
};

export default ContentStatistic;
