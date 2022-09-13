const LDPoSAdapter = require('./index.js');

/**
 * clsk64b2a2884f3498ad37e4cdc9c7088dc17c0e2c09 tattoo either tennis fly nothing gun come civil ready top glare resemble
 */

const adapter = new LDPoSAdapter({
  apiURL: 'wss://test.capitalisk.com:443',
  chainSymbol: 'clsk',
  chainModuleName: 'capitalisk_chain',
});

(async () => {
  await adapter.connect({
    passphrase:
      'tattoo either tennis fly nothing gun come civil ready top glare resemble',
  });

  const { passphrase, address } = await adapter.createWallet();

  console.log(passphrase);
  console.log(await adapter.getAddressFromPassphrase({ passphrase }));
  console.log(adapter.validatePassphrase({ passphrase }));
  console.log(
    await adapter.getLatestOutboundTransactions({
      address: 'clsk64b2a2884f3498ad37e4cdc9c7088dc17c0e2c09',
    }),
  );
  console.log(
    await adapter.getAccountNextKeyIndex({
      address: 'clsk64b2a2884f3498ad37e4cdc9c7088dc17c0e2c09',
    }),
  );
  console.log(
    await adapter.getAccountBalance({
      address: 'clsk64b2a2884f3498ad37e4cdc9c7088dc17c0e2c09',
    }),
  );
})();
