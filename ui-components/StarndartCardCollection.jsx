/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { StarndartCard } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Collection } from "@aws-amplify/ui-react";
export default function StarndartCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: StarndartCard,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="center"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "StarndartCardCollection")}
    >
      {(item, index) => (
        <StarndartCard
          height="auto"
          width="auto"
          margin="0 1rem 1rem 1rem"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></StarndartCard>
      )}
    </Collection>
  );
}
