// react module
import React from "react";

// interface
import { IData } from "../../interfaces";

// styled
import * as Style from "./ParagraphStyled";

// owner css
import "./Paragraph.css";

// rsuite
import { Grid } from "rsuite";

// interface
type IText = Omit<IData, "title" | "status" | "metadata">;

const Paragraph = ({ text }: IText) => {
  return (
    <Grid className="containerGrid">
      <Style.Container>
        <Style.Paragraph>{text}</Style.Paragraph>
      </Style.Container>
    </Grid>
  );
};

export default Paragraph;
