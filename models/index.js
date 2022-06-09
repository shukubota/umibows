// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SampleCard, StarndartCard } = initSchema(schema);

export {
  SampleCard,
  StarndartCard
};