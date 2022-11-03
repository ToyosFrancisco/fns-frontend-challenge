// react module
import React from "react";

// Rsuite
import {  FlexboxGrid, Grid } from "rsuite";

// styled
import * as Style from "./HeaderStyled";

// owner css
import './Header.css'

//interface
import { IData } from "../../interfaces";

type ITitle = Omit<IData, "text" | "status" | "metadata">;

const Header = ({ title }: ITitle) => {
  return (
    <Grid className="wrpGrid">
      <FlexboxGrid justify="space-between">
        <Style.Heading>{title}</Style.Heading>

        <Style.WrpButtonIcon>
          <Style.WrapperButton>
            <Style.Icon className="uil uil-ellipsis-h"></Style.Icon>
          </Style.WrapperButton>
        </Style.WrpButtonIcon>
      </FlexboxGrid>
    </Grid>
  );
};

export default Header;
