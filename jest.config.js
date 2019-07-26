module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/server/model', '/client/store/*.js'],
  testEnvironment: 'node',
  setupFiles: ['./client/setupTest/setupTest.js'],
  snapshotSerializers: ['enzyme-to-json/serializer']
};
