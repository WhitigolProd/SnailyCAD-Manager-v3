import * as url from 'url';
const RootDir = url.fileURLToPath(new URL('.', import.meta.url));

export default RootDir;
