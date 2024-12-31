module.exports = {
    transform: {
        "^.+\\.jsx?$": "babel-jest"
    },
    moduleFileExtensions: ["js", "jsx"],
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"], // Укажите путь к файлу setupTests.js
    // testMatch: ["**/?(*.)+(test).jsx"], // Если хотите использовать, раскомментируйте
};