// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { StarndartCard } = initSchema(schema);

export {
  StarndartCard
};