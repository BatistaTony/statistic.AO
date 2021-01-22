import { BigTitle, Button, HeroStyled, Text } from './style';

const Hero = () => {
  return (
    <HeroStyled>
      <BigTitle>
        Plataforma para ajudar o enquadramento de crianças angolanas no ensino.<span>Ang</span>
        <span>ola</span>
        <span>nos</span>
      </BigTitle>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nisi quia magnam. Saepe
        excepturi beatae unde sint asperiores minima quia nesciunt nam laudantium, vero odit est
        vitae distinctio, architecto harum?
      </Text>

      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nisi quia magnam. Saepe
        excepturi beatae unde sint asperiores minima quia nesciunt nam laudantium, vero odit est
        vitae distinctio, architecto harum?
      </Text>
      <Button>Como funciona ?</Button>
    </HeroStyled>
  );
};

export default Hero;
