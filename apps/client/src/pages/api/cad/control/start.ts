import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Process a POST request
    } else {
        res.status(405).json({
            message: 'Method not allowed',
        });
    }
}
