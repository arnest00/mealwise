import Dexie from 'dexie';

export const db = new Dexie('mealwiseDB');

db.version(1).stores({
  recipes: 'id, name, category'
});
