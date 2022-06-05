/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function StarndartCard(props) {
  const {
    starndartCard,
    imagePath = "https://www.nmrevolution.org/blog2/wp-content/uploads/2018/10/181016-all-in-one-seo01.png",
    title = "\u672A\u8A2D\u5B9A",
    overrides,
    ...rest
  } = props;
  const imageOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "",
  });
  const fourbdsThreebaTwoCommaFiveThreeZerosqftActiveOnClick =
    useNavigateAction({ target: "_blank", type: "url", url: "" });
  const eightThreeTwoThreeFourthAveCommaSeattleCommaWANineEightOneTwoTwoOnClick =
    useNavigateAction({ target: "_blank", type: "url", url: imagePath });
  return (
    <Flex
      gap="0"
      direction="column"
      width="210px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="20px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(239,240,240,1)"
      {...rest}
      {...getOverrideProps(overrides, "StarndartCard")}
    >
      <Image
        height="160px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        src={imagePath}
        onClick={() => {
          imageOnClick();
        }}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="16px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="8px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text Group")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(10,207,131,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={title}
            {...getOverrideProps(overrides, "$99 USD")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={starndartCard?.title}
            onClick={() => {
              fourbdsThreebaTwoCommaFiveThreeZerosqftActiveOnClick();
            }}
            {...getOverrideProps(overrides, "4bds 3 ba 2,530 sqft - Active")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={imagePath}
            onClick={() => {
              eightThreeTwoThreeFourthAveCommaSeattleCommaWANineEightOneTwoTwoOnClick();
            }}
            {...getOverrideProps(overrides, "832 34th Ave, Seattle, WA 98122")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
