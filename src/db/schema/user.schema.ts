import { InferModel } from 'drizzle-orm';
import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  phone: varchar('phone', { length: 256 }),
});

export type Photo = InferModel<typeof users, 'select'>;
export type InsertPhoto = InferModel<typeof users, 'insert'>;
