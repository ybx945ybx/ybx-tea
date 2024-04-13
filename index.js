const bip39 = require('bip39');
const { hdkey } = require('ethereumjs-wallet');



// Count the number of mnemonics generated
let count = 0;

async function generate() {
  // Generate a new mnemonic
  const mnemonic = bip39.generateMnemonic();
  //fs.appendFileSync('mnemonic.txt', `${mnemonic}\n`);
  // Generate a private key from the mnemonic
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  const hdwallet = hdkey.fromMasterSeed(seed);
  const wallet_hdpath = "m/44'/60'/0'/0/";
  const wallet = hdwallet.derivePath(wallet_hdpath + '0').getWallet();
  const address = `0x${wallet.getAddress().toString('hex')}`;
  return { mnemonic, address }
}


module.exports = generate;
