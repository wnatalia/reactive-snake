module.exports = {
  collectCoverageFrom: [
    "src/**/*.{js,jsx}"
  ],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "^actions(.*)$": "<rootDir>/src/redux/actions/$1",
    "^components(.*)$": "<rootDir>/src/components/$1",
    "^constants(.*)$/": "<rootDir>/src/constants$1",
    "^containers(.*)$": "<rootDir>/src/containers/$1",
    "^helpers(.*)$": "<rootDir>/src/redux/helpers/$1",
    "^reducers(.*)$":  "<rootDir>/src/redux/reducers/$1",
    "^saga(.*)$":  "<rootDir>/src/redux/saga/$1",
    "^types(.*)$":  "<rootDir>/src/redux/types/$1"
  },
  "setupFilesAfterEnv": [
    "<rootDir>/src/setupTests.js"
  ]
};
