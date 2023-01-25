import type { NextApiRequest, NextApiResponse } from 'next';
import appStorage from '../../../../../cli/dist/util/storage/appStorage';
import path from 'path';
import fs from 'fs';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const cadDir = appStorage.get('cadDir');
    if (!cadDir || cadDir === '') {
        return res.status(500).json({
            error: 'CAD directory not set',
        });
    }

    const cadJSON = fs.readFileSync(path.join(cadDir, '/package.json'));
    const cadParsed = JSON.parse(cadJSON.toString());
    const cadVersion = cadParsed.version;

    res.status(200).json({
        version: cadVersion,
    });
}
