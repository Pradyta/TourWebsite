module.exports = {
    collectCoverage: true,
	testMatch: [
      "<rootDir>/src/**/*.(test).{js,jsx,ts,tsx}",
      "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}"
    ],
	 moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__mocks__/fileMock.js',
  },
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
	testPathIgnorePatterns: ['/node_modules/', '/public/'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
	transform: {
      "\\.[jt]sx?$": "babel-jest",
	  ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css"
    },
	verbose: true,
	moduleFileExtensions: ["js", "jsx", "json"], 
}