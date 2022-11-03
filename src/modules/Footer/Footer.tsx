// module react
import React from "react";

// rsuite
import { Grid } from "rsuite";

// styled
import * as Style from "./FooterStyled";

// interface
interface IAction {
  label: string;
  icon: string;
}

const ActionsFunctions = ({ label, icon }: IAction) => {
  return (
    <Style.WrpAction>
      <Style.IconAction className={icon} />
      <p>{label}</p>
    </Style.WrpAction>
  );
};

const FooterCard = () => {
  return (
    <Grid style={{ width: "100%" }}>
      <Style.Container>
        <Style.FirstAction>
          <ActionsFunctions label="Add To Favourites" icon="uil uil-heart" />
        </Style.FirstAction>

        <Style.SecondAction>
          <ActionsFunctions
            label="Hide this startup"
            icon="uil uil-eye-slash"
          />
        </Style.SecondAction>

        <Style.WrpButtonContainer>
          <Style.Button>
            <Style.Icon className="uil uil-bolt" />
            <Style.TextButton>Get in touch</Style.TextButton>
          </Style.Button>
        </Style.WrpButtonContainer>
      </Style.Container>
    </Grid>
  );
};

export default FooterCard;
