module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "amd": true,
        "node": true,
        "commonjs": true
    },
    
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "eslint-plugin"
    ],
    "rules": {
        "semi": [2, "never"],
        "eqeqeq": [2, "smart"],
        "quotes": [2, "single", "avoid-escape"],
        "object-property-newline": [2, { "allowMultiplePropertiesPerLine": true }],
        "one-var": [2, { "initialized": "never" }],
        "operator-linebreak": [2, "after", { "overrides": { "?": "before", ":": "before" } }],
        "padded-blocks": [2, "never"],
        "quotes": [2, "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
        "rest-spread-spacing": [2, "never"],
        "semi": [2, "never"],
        "semi-spacing": [2, { "before": false, "after": true }],
        "space-before-blocks": [2, "always"],
        "space-before-function-paren": [2, "always"],
        "space-in-parens": [2, "never"],
        "space-infix-ops": 2,
        "space-unary-ops": [2, { "words": true, "nonwords": false }],
        "spaced-comment": [2, "always", { "line": { "markers": ["*package", "!", ","] }, "block": { "balanced": true, "markers": ["*package", "!", ","], "exceptions": ["*"] } }],
        "template-curly-spacing": [2, "never"],
        "unicode-bom": [2, "never"],
        "use-isnan": 2,
        "valid-typeof": 2,
        "wrap-iife": [2, "any", { "functionPrototypeMethods": true }],
        "yield-star-spacing": [2, "both"],
        "yoda": [2, "never"],
        "standard/object-curly-even-spacing": [2, "either"],
        "standard/array-bracket-even-spacing": [2, "either"],
        "standard/computed-property-even-spacing": [2, "even"],
        "promise/param-names": 2        
    },
};