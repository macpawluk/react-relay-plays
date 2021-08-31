import fs from 'fs';
import { printSchema } from 'graphql';
import path from 'path';
import { schema } from '../data/schema';

const schemaPath = path.resolve(__dirname, '../../client/data/schema.graphql');

fs.writeFileSync(schemaPath, printSchema(schema));

console.log('Wrote' + schemaPath);
