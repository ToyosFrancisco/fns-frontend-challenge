import React from 'react'
import * as S from './WelcomeStyled';

export const Welcome = () => {
    return (
        <S.Container>
          <S.Heading>Hi, this is your canvas</S.Heading>
          <S.Paragraph>
              Update the <code>Home.tsx</code> file in the components folder to work on your challenge and follow the instructions in the <code>README.md</code> file for this repository.
          </S.Paragraph>
          <S.Paragraph>
              This project was created with <strong>create-react-app</strong> and utilizes <strong>Styled Components</strong> and <strong>Chakra UI</strong> as UI Libraries, feel free to use whatever you feel confortable with.
          </S.Paragraph>
        </S.Container>
    )
}
