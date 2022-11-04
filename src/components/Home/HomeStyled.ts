import styled from "styled-components";

export const WrpContent = styled.div`
  margin: 96px;

  width:700px;

  @media (max-width: 426px) {
    margin:40px;
    width:100%;
    padding:10px;
  };

  @media (max-width: 320px) {
    margin:20px;
    padding:10px;
  };

`;
export const WrapperPanel = styled.div`
  background: #ffffff;
  box-shadow: 0px 8px 60px rgba(35, 31, 82, 0.15);
  border-radius: 6px;
  
  
`;

export const Divider = styled.hr`
  color: #EDEDF7;
  heigth: 1px;
`;

export const ContainerWidget = styled.div`
  display:flex;
  justify-content:flex-start;

  @media (max-width: 768px) {
    flex-direction:column
  }
`

export const Body = styled.div`
  padding:32px;
`
export const BodyFooter = styled.div`
  padding:32px;


  @media (max-width: 550px) {
    padding:15px;
  }
`