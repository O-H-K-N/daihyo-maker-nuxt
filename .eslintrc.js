module.exports = {
  root: true,
  env: {
    browser: true,
    "jest/globals": true,
    node: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended",
  ],
  plugins: [
    "jest",
  ],
  // add your custom rules here
  rules: {
    // 単体名のコンポーネントを許容
    "vue/multi-word-component-names": "off",
    // 複数行のオブジェクトではコンマを常に強制する
    "comma-dangle": ["error", "always-multiline"],
    // クォートは常にダブル
    quotes: ["error", "double"],
    // セミコロンを常に各スタイル
    semi: ["error", "always"],
    "semi-spacing": ["error", { after: true, before: false }],
    "semi-style": ["error", "last"],
    "no-extra-semi": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
  },
};
