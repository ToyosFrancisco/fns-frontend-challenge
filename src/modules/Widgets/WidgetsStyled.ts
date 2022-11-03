import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
  padding-right:40px;


  @media(min-width:550px){
    flex-direction:column;
  }
`;

export const Title = styled.p`
  font-family: 'Effra';
  font-style: normal;
  font-weight: 400;
  font-size: 13.7px;
  line-height: 20px;



  color: #807DA1;


  @media(max-width:480px){
    font-size: 11px;
  }
`;

export const Wrapper = styled.div`
  display: inline-flex;
  margin-top:10px
`;

export const Icon = styled.i`
  color: #8f75ff;
`;

export const Article = styled.p`
  color: #292839;
  margin-left:10px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  @media(max-width:480px){
    font-size: 14px;
  }

`;
