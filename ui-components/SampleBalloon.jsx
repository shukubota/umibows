/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function SampleBalloon(props) {
  const { value, overrides, ...rest } = props;
  return (
    <View
      width="210px"
      height="102px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "SampleBalloon")}
    >
      <View
        position="absolute"
        top="21.6%"
        bottom="0%"
        left="0%"
        right="0%"
        overflow="hidden"
        borderRadius="10px 10px 10px 10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,1)"
        {...getOverrideProps(overrides, "HogeComponent")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="500"
          color="rgba(255,255,255,1)"
          lineHeight="16.40625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="175px"
          height="82px"
          position="absolute"
          top="16px"
          left="17px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={value}
          {...getOverrideProps(
            overrides,
            "text text text \u30C6\u30AD\u30B9\u30C8\u30C6\u30AD\u30B9\u30C8\u30C6\u30AD\u30B9\u30C8"
          )}
        ></Text>
      </View>
      <Icon
        width="29px"
        height="29.3759765625px"
        viewBox={{ minX: 0, minY: 0, width: 29, height: 29.3759765625 }}
        paths={[
          {
            d: "M14.5 0L27.0574 22.032L1.94263 22.032L14.5 0Z",
            fill: "rgba(196,196,196,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="1.96%"
        bottom="69.24%"
        left="59.05%"
        right="27.14%"
        {...getOverrideProps(overrides, "Polygon 1")}
      ></Icon>
    </View>
  );
}
