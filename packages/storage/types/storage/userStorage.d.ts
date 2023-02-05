interface User {
    username: string;
    password: string;
}
export declare class UserStorage {
    private filePath;
    private users;
    constructor();
    private persist;
    createUser(user: User): void;
    updateUser(username: string, user: User): void;
    deleteUser(username: string): void;
    getUser(username: string): User | undefined;
    getUsers(): User[];
}
export {};
