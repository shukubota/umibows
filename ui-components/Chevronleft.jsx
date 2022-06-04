/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Chevronleft(props) {
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
          d: "M16.6862 28.5L0 14.25L16.6862 0L17.7246 1.21413L2.4602 14.25L17.7246 27.2859",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(20.46%, 2.5%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Chevronleft")}
    ></Icon>
  );
}
