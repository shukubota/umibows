/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function TestGroup(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="244px"
      height="88px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(51,51,51,1)"
      {...rest}
      {...getOverrideProps(overrides, "TestGroup")}
    >
      <Text
        fontFamily="Inter"
        fontSize="25px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="29.296875px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="29px"
        left="46px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="text text text"
        {...getOverrideProps(overrides, "text text text")}
      ></Text>
    </View>
  );
}
