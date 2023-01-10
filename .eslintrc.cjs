module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'linebreak-style': 0,
    'no-unused-vars': 0, // 사용하지 않는 변수 경고 표시 제거
    'react/prop-types': 'off', // PropTypes를 사용한 유형 검사 안 함
    'react/react-in-jsx-scope': 0, // import 'React' from 'react' 생략할 수 있게
    'react/default-props-match-prop-types': 0,
    'react/require-default-props': 0, // Optional Parameter에 defaultProps 선언 안 함
    '@typescript-eslint/semi': 'error', // ts type에서 중괄호 끝 세미콜론 추가
    '@typescript-eslint/member-delimiter-style': 'error', // ts type 객체 프로퍼티 타입정의 마지막 세미콜론 추가
    '@typescript-eslint/no-non-null-assertion': 0, // 단언 연산자 사용
    semi: [1, 'always'],
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    'no-plusplus': 0,
    'no-param-reassign': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
