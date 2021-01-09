require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi forget tell tissue regret mean assume good kite metal genuine'; 
let testAccounts = [
"0xabed0e6209b466c3b0ad25da3f49bec0e20e2f7ce5b5b46ab9f80f8d691ee83a",
"0x975e7c80eeba7868575dcd8efcd0e512bbf251920e3430c0393dc0693c08ecaa",
"0xc9c013af9f233fdee6fc5f378e188bf879fa06de7693833136d1d23f2df8f750",
"0x2e2e90d769e103f3ef86bea1148734bf4022889128256bded81cbcb63424b066",
"0x6879f7b377495ba74b7c1d8fe1f1a3e2c1c16130353d0b7f299a9327edd95239",
"0x386b1f26ee1ef07fa402d6cdc02f0ca8fe6c1cfc039ae3cc1b2d6a118aa4a2fa",
"0x9fa04431cb0f2aedd32549dc8babb67121a2216a14dd722cd7242064192fcbbd",
"0x8588587aeb48cce9123e38b1a7811e73991162e12b4278f1a4446b072602bb23",
"0xea1404edff0edf09b7099f1520138dd0c727055d1f918035634ac22616c4adf1",
"0x4621f0b22b76bfe120cb5ee98e944b7a6f2f472196c499288bf9b6aa144d365f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
