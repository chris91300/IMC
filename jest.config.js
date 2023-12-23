const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
  

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',

   // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  
  transform: {

    "^.+\\.tsx?$": "ts-jest"

  },
  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.

  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",


  // Module file extensions for importing

  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)