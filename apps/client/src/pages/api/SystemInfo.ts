import type { NextApiRequest, NextApiResponse } from 'next';
import { platform, arch } from 'os';
type SystemInfo = {
    platform: string;
    arch: string;
};
const getSystemInfo = async () => {
    const systemInfo: SystemInfo = {
        platform: platform(),
        arch: arch(),
    };
    return systemInfo;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const systemInfo = await getSystemInfo();
    res.status(200).json({
        platform: systemInfo.platform,
        arch: systemInfo.arch,
    });
}
