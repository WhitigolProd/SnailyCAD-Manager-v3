import { UserStorage } from '@scm/storage';
import { NextApiRequest, NextApiResponse } from 'next';

const userStorage = new UserStorage();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    userStorage.createUser({
        username: 'test',
        password: 'test',
    });
    const user = userStorage.getUser('test');
    res.status(200).json(user);
}
