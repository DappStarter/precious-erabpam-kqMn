require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remain purity gesture bean blue swap'; 
let testAccounts = [
"0x26a24fd4df1347de064fc00acf4151971eac5f3a8d40d9435bead8bc5d116e8e",
"0x6dc129c8755257a42ec14682c0d8777e34d9a4f40a41da2194d5804cb3c10468",
"0x66b2a1919aaf8a591ecb9d20336d1bab79c504ea3a7cf29929fa81f64990b1ff",
"0x7caf4d717acfe981ccc08993e1a477e312b1885c7b3c9273d5bb9c4a7fac98be",
"0xd594e778a75737867c7af3ee4550acc7a102ef29551c80b25d5a7239108dfd6c",
"0x566242983ce10f6198193374278ef8664dff5fbc93263a21a555800b2e93baee",
"0x13fb0a2374522ec6c955b084c0fe2c5d2dfedcf53e6e50bbc5e70eb019fb1b01",
"0xb144fa82efcf2aa6f0b94cb95f027d74b3c0e32f1f6d1abc91223856c59be196",
"0x2bcd42a55be5be5065e3075bc38aa8492f7a794d6298e41959a52f2cac39d8d9",
"0x2781004865c80eef28a652efc5bd6a28d56fafe7288795db09d53565f9a25355"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

