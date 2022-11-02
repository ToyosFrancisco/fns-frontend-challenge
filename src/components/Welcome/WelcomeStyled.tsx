import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Heading = styled.h1`
  font-size: 32px;
  line-height: 34px;
  font-weight: bold;
  color: #999999;
  margin-bottom: 18px;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 16px;

  code {
    display: inline-block;
    font-size: 16px;
    padding: 0px 10px;
    background: lightGray;
    border-radius: 4px;
  }

  strong {
    color: #2B6AE9;
  }

`
