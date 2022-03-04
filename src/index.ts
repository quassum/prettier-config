import { RequiredOptions } from "prettier";

// TODO: Import this interface from @trivago/prettier-plugin-sort-imports
export interface PrettierOptions extends RequiredOptions {
  importOrder: string[];
  importOrderCaseInsensitive: boolean;
  // should be of type ParserPlugin from '@babel/parser' but prettier does not support nested arrays in options
  importOrderParserPlugins: string[];
  importOrderSeparation: boolean;
  importOrderGroupNamespaceSpecifiers: boolean;
  importOrderSortSpecifiers: boolean;
}

const config: Partial<PrettierOptions> = {
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: "es5",
  semi: true,
  tabWidth: 2,
  bracketSameLine: false,
  arrowParens: "always",
  importOrder: [
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

export default config;
