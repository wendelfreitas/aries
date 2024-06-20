module.exports = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  //   resolver: '<rootDir>/jest.resolver.cjs',
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/*.stories.tsx',
    '!src/main.tsx',
    '!src/index.css',
    '!src/App.tsx',
    '!src/vite-env.d.ts',
    '!src/utils/enums.ts',
  ],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  //   moduleNameMapper: {
  //     '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  //     '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
  //       'jest-transform-stub',
  //     '^@/(.*)$': '<rootDir>/src/$1',
  //   },
};
