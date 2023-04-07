/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    preset: 'ts-jest',
    transform: {},
    moduleNameMapper: {
        '\\.(css)$': 'identity-obj-proxy',
    },
    collectCoverageFrom: [
        'src/utils/**/*.tsx',
    ],
    coverageReporters: ['text', 'html'],
};
