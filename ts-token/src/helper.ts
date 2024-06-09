import { readFileSync } from 'fs';
import { Keypair } from '@solana/web3.js';
// import { homedir } from 'os';

const distroName = 'Ubuntu-22.04';

// Notice the double backslashes (\\) used in the file path string. This is necessary to escape the backslash character in JavaScript strings.
const USER_KEYPAIR_PATH = `\\\\wsl$\\${distroName}\\home\\okpainmo\\.config\\solana\\id.json`;

// const USER_KEYPAIR_PATH = homedir() + '/.config/solana/id.json';

export const userKeypair = Keypair.fromSecretKey(
  Buffer.from(JSON.parse(readFileSync(USER_KEYPAIR_PATH, 'utf-8')))
);

// console.log(userKeypair);
