Package.describe({
  name: 'nekonium:blocks',
  summary: 'Provides informations about the current and last 50 blocks',
  version: '0.3.3',
  git: 'http://github.com/nekonium/meteor-package-blocks'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('underscore', ['client', 'server']);
  api.use('mongo', ['client', 'server']);

  // api.use('frozeman:persistent-minimongo@0.1.3', 'client');
  api.use('nekonium:web3@0.20.604', ['client', 'server']);

  api.export(['EthBlocks'], ['client', 'server']);

  api.addFiles('blocks.js', ['client', 'server']);
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('ethereum:blocks');
//   api.addFiles('blocks-tests.js');
// });

