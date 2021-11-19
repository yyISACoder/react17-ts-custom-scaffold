module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        'airbnb-typescript',
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    "parser": '@typescript-eslint/parser',
    "parserOptions": {
        "project": './tsconfig.json',
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "import",  //解决 Definition for rule 'import/extensions' was not found.eslint(import/extensions) ，Definition for rule 'import/no-extraneous-dependencies' was not found.eslint(import/no-extraneous-dependencies)
        '@typescript-eslint',
    ],
    "rules": {
        "@typescript-eslint/jsx-uses-react": "off",
        "@typescript-eslint/react-in-jsx-scope": "off",
        "@typescript-eslint/semi": "off"
    }   
};
