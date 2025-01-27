window.saveToIndexedDB = saveToIndexedDB;
window.getFromIndexDB = getFromIndexDB;
window.deleteIndexDB = deleteIndexDB;

const dbPromise = idb.openDB('thoughtscape', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('responses')) {
      db.createObjectStore('responses', { keyPath: 'url' });
    }
  },
});

async function saveToIndexedDB(storeName, data) {
  try {
    const db = await dbPromise;
    await db.put(storeName, data);
  } catch (error) {
    console.error('Error saving to IndexedDB:', error);
  }
}

async function getFromIndexDB(storeName, data) {
  try {
    const db = await dbPromise;
    return await db.get(storeName, data);
  } catch (error) {
    console.error('Error saving to IndexedDB:', error);
  }
}

async function deleteIndexDB(storeName, data) {
  try {
    const db = await dbPromise;
    await db.delete(storeName, data);
  } catch (error) {
    console.error('Error saving to IndexedDB:', error);
  }
}
