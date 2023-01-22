import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const rootPath = path.join(
    dirname(fileURLToPath(import.meta.url)),
    '../../../../'
);

export default rootPath;
