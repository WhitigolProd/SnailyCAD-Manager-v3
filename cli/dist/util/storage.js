const configPath = '/SnailyCADManagerData/config.json';
import fs from 'fs';
class Storage {
    // Initialize the storage constructor.
    key;
    value;
    currentStorage = fs.readFileSync(configPath, 'utf8');
    constructor(key) {
        this.key = key;
    }
    // Set the storage item.
    setItem(value) {
        const storage = JSON.parse(this.currentStorage);
        storage[this.key] = value;
        fs.writeFileSync(configPath, JSON.stringify(storage, null, 4), 'utf8');
    }
    // Get the storage item.
    getItem() {
        const storage = JSON.parse(this.currentStorage);
        return storage[this.key];
    }
    // Remove the storage item.
    removeItem() {
        const storage = JSON.parse(this.currentStorage);
        delete storage[this.key];
        fs.writeFileSync;
    }
    // Clear the storage.
    clear() {
        fs.writeFileSync(configPath, '{}', 'utf8');
    }
    // Get all the storage items.
    getAll() {
        return JSON.parse(this.currentStorage);
    }
    // Check if the storage item exists.
    hasItem() {
        const storage = JSON.parse(this.currentStorage);
        return storage.hasOwnProperty(this.key);
    }
}
export function Config(key) {
    return new Storage(key);
}
export { configPath };
