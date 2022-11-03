// modules
import React from "react";

// styled
import * as Style from "./WidgetsStyled";

// interface
import { IData } from "../../interfaces";

type IMetaData = Omit<IData, "title" | "text" | "status">;

const Widget = ({ metadata }: IMetaData) => {
  return (
    <>
      {metadata.map(({ title, icon, article }, idx) => {
        return (
          <Style.Container key={idx}>
            <Style.Title>{title}</Style.Title>
            <Style.Wrapper>
              <Style.Icon className={icon}></Style.Icon>
              <Style.Article>{article}</Style.Article>
            </Style.Wrapper>
          </Style.Container>
        );
      })}
    </>
  );
};

export default Widget;
