// import { mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata';
// import { keypairIdentity } from '@metaplex-foundation/umi';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { userKeypair } from './helper';
console.log(userKeypair);

const umi = createUmi('https://api.devnet.solana.com');

const keypair = umi.eddsa.createKeypairFromSecretKey(userKeypair.secretKey);

// umi.use(keypairIdentity(keypair)).use(mplTokenMetadata());

// const metadata = {
//   name: 'Solana Gold',
//   symbol: 'GOLDSOL',
//   uri: 'https://raw.githubusercontent.com/solana-developers/program-examples/new-examples/tokens/tokens/.assets/spl-token.json',
// };

// const mint = generateSigner(umi);

// createFungible(umi, {
//   mint,
//   authority: umi.identity,
//   name: metadata.name,
//   symbol: metadata.symbol,
//   uri: metadata.uri,
//   sellerFeeBasisPoints: percentAmount(0),
//   decimals: 9,
// }).sendAndConfirm(umi);

/* ** health check start ** */
// function healthCheck() {
//   console.log('*** app running: watching for file reloads with tsx***');
// }

// healthCheck();
/* ** health check end ** */
