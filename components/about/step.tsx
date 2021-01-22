import { StepIlustration, StepStyled, StepText, StepTitle } from './style';

const Step = () => {
  return (
    <StepStyled>
      <StepTitle>Just a Title</StepTitle>
      <StepIlustration>
        {' '}
        <img src="./images/undraw_co-workers_ujs6.svg" />{' '}
      </StepIlustration>
      <StepText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur rerum quibusdam vero
        aperiam natus temporibus nemo quia quis suscipit aspernatur.
      </StepText>
    </StepStyled>
  );
};

export default Step;
