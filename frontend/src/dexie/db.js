// db.js
import Dexie from 'dexie';

const db = new Dexie('ScriptCreationDB');
db.version(1).stores({
  scriptCreationData: '++id, currentStage, menu, loglineData'
});

export default db;
