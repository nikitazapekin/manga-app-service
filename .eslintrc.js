module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['boundaries', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals', 
  ],
  rules: {
    'boundaries/element-types': [2, { 
      default: 'disallow',  
      rules: [
        {
          from: 'shared',  
          allow: ['shared'],  
        },
        {
          from: 'entity', 
          allow: ['shared', 'entity'],  
        },
        {
          from: 'features', 
          allow: ['shared', 'entity', 'features'],  
        },
        {
          from: 'widgets',  
          allow: ['shared', 'entity', 'features', 'widgets'],  
        },
      ],
    }],
  },
  settings: {
    'boundaries/elements': [
      { type: 'shared', pattern: 'src/shared/*' },
      { type: 'entity', pattern: 'src/entity/*' },
      { type: 'features', pattern: 'src/features/*' },
      { type: 'widgets', pattern: 'src/widgets/*' },
    ],
  },
};
