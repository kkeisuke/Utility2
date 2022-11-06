/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  roots: ['<rootDir>/tests'],
  testMatch: ['**/?(*.)spec.(ts|tsx)'],
  // https://kulshekhar.github.io/ts-jest/docs/getting-started/options
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        babelConfig: true,
        tsconfig: './tsconfig.jest.json'
      }
    ]
  }
}
