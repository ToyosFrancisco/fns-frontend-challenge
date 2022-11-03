// react hooks
import { useState, useEffect } from "react";

// components
import { Header, Badges, Widget, Footer, Paragraph } from "../../modules";

// Styled
import * as Style from "./HomeStyled";

// Rsuite
import { Container, Content, FlexboxGrid, Grid, Panel } from "rsuite";

// fetch
import { fetchData } from "../../services";

// default imports finalis
//import { Container } from '@chakra-ui/react';
//import { Welcome } from '../';

// interfaces
import { IData } from "../../interfaces";

export const Home = () => {
  // state's
  const [data, setData] = useState<IData[]>([]);

  // init
  useEffect(() => {
    (async () => {
      const data = await fetchData();

      setData(data);
    })();
  }, []);

  return (
    <Container>
      <Content>
        <FlexboxGrid justify="center" align="middle">
          <Style.WrpContent>
            <Panel bordered bodyFill>
              <Style.WrapperPanel>
                <Style.Body>
                  {data.map((data, idx) => (
                    <Header title={data.title} key={idx} />
                  ))}

                  {data.map(({ status }: IData, idx) => {
                    return <Badges status={status} key={idx} />;
                  })}

                  {data.map((data, idx) => (
                    <Paragraph text={data.text} key={idx} />
                  ))}

                  <Grid>
                    <Style.ContainerWidget>
                      {data.map(({ metadata }: IData, idx) => {
                        return <Widget metadata={metadata} key={idx} />;
                      })}
                    </Style.ContainerWidget>
                  </Grid>
                </Style.Body>

                <Style.Divider />

                <Style.BodyFooter>
                  <Footer />
                </Style.BodyFooter>
              </Style.WrapperPanel>
            </Panel>
          </Style.WrpContent>
        </FlexboxGrid>
      </Content>
    </Container>
  );
};
