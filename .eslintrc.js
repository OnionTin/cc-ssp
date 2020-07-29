module.exports = {
  root: true,
  env: {
    browser: true,
    node:true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: [
    'vue'
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    eqeqeq: 0,
    "no-irregular-whitespace":"off",//这禁止掉 空格报错检查
    'no-trailing-spaces': ["error", { "skipBlankLines": true }], // 换行后多余空格报错
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "none",
        "tabWidth": 2, // 缩进空格个数
        "printWidth":120, // 如果超过当前数量
        "proseWrap": "never", // 如果超出printWidth属性的行数要求换行
        "useTabs": false,
      }
    ]
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)"],
      env: {
        mocha: true
      }
    }
  ]
}
