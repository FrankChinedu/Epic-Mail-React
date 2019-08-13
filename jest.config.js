module.exports = {
  testPathIgnorePatterns: ['/node_modules/'],
  testEnvironment: 'jsdom',
  setupFiles: ['./client/setupTest/setupTest.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  coveragePathIgnorePatterns: ['/server/model/', '/client/utils/', '/server/helpers/']
};
