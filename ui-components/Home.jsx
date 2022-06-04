/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Home(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="30px"
      height="30px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 30, height: 30 }}
      paths={[
        {
          d: "M12.7837 1.65567L1.34563 8.66664L1.34563 27.081L8.59267 27.081L8.59267 17.1474L17.0379 17.1474L17.0379 27.081L24.2216 27.081L24.2216 8.61602L12.7837 1.65567ZM12.7837 0L25.5673 7.52969L25.5673 28.5L15.6923 28.5L15.6923 18.5664L9.9383 18.5664L9.9383 28.5L0 28.5L0 7.59727L12.7837 0Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(7.39%, 2.5%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Home")}
    ></Icon>
  );
}
