import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface User {
    username: string;
    password: string;
}

export class UserStorage {
    private filePath = path.join(__dirname, '../../.storage/users.json');
    private users: User[];

    constructor() {
        this.users = [];

        try {
            const data = fs.readFileSync(this.filePath, 'utf-8');
            this.users = JSON.parse(data);
        } catch (error) {
            fs.writeFileSync(this.filePath, '[]', 'utf-8');
        }
    }

    private persist(): void {
        fs.writeFileSync(this.filePath, JSON.stringify(this.users), 'utf-8');
    }

    public createUser(user: User): void {
        const existingUser = this.getUser(user.username);

        if (!existingUser) {
            this.users.push(user);
            this.persist();
        } else {
            console.error(
                `User with username "${user.username}" already exists`
            );
        }
    }

    public updateUser(username: string, user: User): void {
        const index = this.users.findIndex((u) => u.username === username);

        if (index !== -1) {
            this.users[index] = user;
            this.persist();
        } else {
            console.error(`User with username "${username}" not found`);
        }
    }

    public deleteUser(username: string): void {
        const index = this.users.findIndex((u) => u.username === username);

        if (index !== -1) {
            this.users.splice(index, 1);
            this.persist();
        } else {
            console.error(`User with username "${username}" not found`);
        }
    }

    public getUser(username: string): User | undefined {
        return this.users.find((u) => u.username === username);
    }

    public getUsers(): User[] {
        return this.users;
    }
}
