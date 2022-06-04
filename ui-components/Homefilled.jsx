/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Homefilled(props) {
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
          d: "M25.6195 28.5L15.6564 28.5L15.6564 18.375L9.96313 18.375L9.96313 28.5L0 28.5L0 7.45542L12.8098 0L25.6195 7.40458L25.6195 28.5Z",
          fill: "rgba(3,3,3,1)",
          fillRule: "nonzero",
          style: { transform: "translate(7.3%, 2.5%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Homefilled")}
    ></Icon>
  );
}
