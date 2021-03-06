/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { StarndartCard } from "../models";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type StarndartCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    starndartCard?: StarndartCard;
    imagePath?: String;
    title?: String;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function StarndartCard(props: StarndartCardProps): React.ReactElement;
