import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content:space-between;
  align-items: center;


  @media(max-width:480px){
    flex-direction:column;

  }
`;

export const ButtonText = styled.span`
  width: 76px;
  height: 16px;

  font-family: "Effra";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  color: #fefefe;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const Button = styled.button`
  background-color: #7358e9;
  color: #fefefe;
  padding: 16px 32px 16px 24px;
  height: 48px;
  border-radius: 4px;

  &:hover {
    background-color: #6043df;
  }
  @media(max-width:480px){
    padding: 16px 32px 16px 24px;
    display:block;
    
  }
`;

export const WrpButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items:center
`;

export const Icon = styled.i`
  width: 16px;
  height: 16px;
  padding: 10px;

  @media(max-width:480px){
    padding: 2px;
    
  }
  
`;

// Actions Functions
export const WrpAction = styled.div`
  display: inline-flex;

  @media(max-width:480px){
    
    margin-bottom:15px;
  }
`;

export const FirstAction = styled.div`
  padding-left: 10px;

  @media(max-width:480px){
    padding-left: 0px;
    
  }

`;

export const SecondAction = styled.div`
  padding-right:100px;

  @media(max-width:769px){
    padding-right:0px;
    
  };

  @media(max-width:480px){
    padding-right:0px;
    
  };

`;

export const IconAction = styled.i`
  color: #47455f;
  padding-right: 5px;
`;

export const TextAction = styled.p`
  color: #47455f;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
`;

export const TextButton = styled.span`
  color: #fefefe;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
`;
