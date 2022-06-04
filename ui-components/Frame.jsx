/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Frame(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { BG: {}, Image: {}, "Folk & Acoustic": {}, Frame: {} },
      variantValues: { property1: "Default" },
    },
    {
      overrides: { BG: {}, Image: {}, "Folk & Acoustic": {}, Frame: {} },
      variantValues: { property1: "Variant2" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="165px"
      height="100px"
      overflow="hidden"
      position="relative"
      borderRadius="5px"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Frame")}
    >
      <View
        width="165px"
        height="100px"
        position="absolute"
        top="0px"
        left="0px"
        borderRadius="5px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(62,67,63,1)"
        {...getOverrideProps(overrides, "BG")}
      ></View>
      <Image
        width="67px"
        height="67px"
        position="absolute"
        top="17px"
        left="135.5px"
        transformOrigin="top left"
        transform="rotate(30deg)"
        boxShadow="-2px 2px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Image")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="15px"
        left="16px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Folk &&#xA;Acoustic"
        {...getOverrideProps(overrides, "Folk & Acoustic")}
      ></Text>
    </View>
  );
}
