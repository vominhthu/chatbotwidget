export default {
    testEnvironment: "jest-environment-jsdom",
    transform: {
        "^.+\\.jsx?$": "babel-jest",
    },
    moduleNameMapper: {
        "\\.(css|scss)$": "<rootDir>/src/__mocks__/styleMock.js",
        "^~/(.*)$": "<rootDir>/src/$1",
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
