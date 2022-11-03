// react module
import React from "react";

// Rsuite
import { Badge, Grid } from "rsuite";

// styled
import "./Badge.css";

// interface
import { IData } from "../../interfaces";

type IStatus = Omit<IData, "title" | "text" | "metadata">;

const Badges = ({ status }: IStatus) => {
  return (
    <Grid>
      {status.map(({ color, label }) => {
        return (
          
          <Badge
            className="wrpBadge"
            content={label}
            style={{ backgroundColor: `${color}`}}
            
          />
        );
      })}
    </Grid>
  );
};

export default Badges;
