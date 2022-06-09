/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function SampleCard(props) {
  const {
    imageUrl,
    starCount,
    name = "no name",
    teamName = "no team",
    overrides,
    ...rest
  } = props;
  return (
    <View
      width="210px"
      height="242px"
      overflow="hidden"
      position="relative"
      borderRadius="20px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(239,240,240,1)"
      {...rest}
      {...getOverrideProps(overrides, "SampleCard")}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="500"
        color="rgba(104,112,120,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="168px"
        height="23px"
        position="absolute"
        top="206px"
        left="7px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={teamName}
        {...getOverrideProps(overrides, "Rev. from DVL")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="500"
        color="rgba(10,207,131,1)"
        lineHeight="23.4375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="190px"
        height="25px"
        position="absolute"
        top="174px"
        left="7px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={name}
        {...getOverrideProps(overrides, "\u6A4B\u672C\u74B0\u5948")}
      ></Text>
      <Image
        width="224px"
        height="155px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        src={imageUrl}
        {...getOverrideProps(overrides, "image")}
      ></Image>
    </View>
  );
}
