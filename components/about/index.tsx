import Step from './step';
import { AboutStyled, ListStep } from './style';

const About = () => {
  return (
    <AboutStyled>
      <ListStep>
        {[1, 2, 3].map(() => (
          <Step />
        ))}
      </ListStep>
    </AboutStyled>
  );
};

export default About;
