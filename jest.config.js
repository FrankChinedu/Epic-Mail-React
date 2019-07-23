module.exports = {
  testPathIgnorePatterns: ['/node_modules/'],
  testEnvironment: 'node',
  setupFiles: ['./client/setupTest/setupTest.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
