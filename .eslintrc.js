module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    "parser": "babel-eslint"
  },
  extends: [
    "plugin:vue/essential",
    "@vue/prettier"
  ],
  // required to lint *.vue files
  plugins: [
    "prettier"
  ],
  rules: {
    "prettier/prettier":"error",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // 4 空格缩进
    "indent": ["error", 4],
    "vue/script-indent": [
      "error",
      4,
      {
        baseIndent: 1
      }
    ],
    "vue/no-unused-components": 0,
    // 字符串优先使用双引号
    "quotes": ["error", "double"],
    "object-curly-spacing": ["error", "always"],
    // 函数左括号前的空格
    "space-before-function-paren": [
      "error",
      {
        // 匿名函数没有
        anonymous: "never",
        // 具名函数没有
        named: "never",
        // 箭头函数有
        asyncArrow: "always"
      }
    ]
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }, {
      files: ["*.vue"],
      rules: {
        "indent": "off"
      }
    }
  ]
};
