module.exports = {
  name: 'ionic-angular-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ionic-angular-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
