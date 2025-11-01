import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      "dark-blue": string;
      white: string;
      grey100: string;
      grey200: string;
      grey400: string;
      grey500: string;
      purple50: string;
      purple300: string;
      purple500: string;
    };
  }
}
