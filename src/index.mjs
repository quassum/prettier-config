export default {
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: "es5",
  semi: true,
  tabWidth: 2,
  bracketSameLine: false,
  arrowParens: "always",
  importOrder: [
    '"use client";?',
    "^(react|react-dom)$",
    "^next.+$",
    "^@.+$",
    "^[^\\/]+$",
    "^.+\\.(svg|png|jpg|jpeg|webp)$",
    "^.+\\/.+$",
    "^[./]",
    "^[../]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
