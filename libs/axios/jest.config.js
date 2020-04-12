module.exports = {
  name: 'axios',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/axios',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
  coverageReporters: ['html', 'lcov']
};
