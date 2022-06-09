import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SampleCardMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StarndartCardMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class SampleCard {
  readonly id: string;
  readonly name?: string | null;
  readonly team_name?: string | null;
  readonly image_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SampleCard, SampleCardMetaData>);
  static copyOf(source: SampleCard, mutator: (draft: MutableModel<SampleCard, SampleCardMetaData>) => MutableModel<SampleCard, SampleCardMetaData> | void): SampleCard;
}

export declare class StarndartCard {
  readonly id: string;
  readonly title?: string | null;
  readonly desc1?: string | null;
  readonly desc2?: string | null;
  readonly image_url?: string | null;
  readonly imagePath?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<StarndartCard, StarndartCardMetaData>);
  static copyOf(source: StarndartCard, mutator: (draft: MutableModel<StarndartCard, StarndartCardMetaData>) => MutableModel<StarndartCard, StarndartCardMetaData> | void): StarndartCard;
}