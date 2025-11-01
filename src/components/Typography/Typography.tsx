import styled from "styled-components";
import type { DefaultTheme } from "styled-components";

interface TypographyProps {
  color?: keyof DefaultTheme["colors"];
  children: React.ReactNode;
}

export const TextPreset1 = styled.p<TypographyProps>`
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: 0px;
  margin: 16px 0;

  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.grey500};
`;
export const TextPreset2 = styled.p<TypographyProps>`
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: 0px;
  margin: 0;

  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.grey500};
`;
export const TextPreset3 = styled.p<TypographyProps>`
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: 0px;
  margin: 0;

  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.grey500};
`;
export const TextPreset4 = styled.p<TypographyProps>`
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 11px;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: 0px;
  margin: 0;

  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.grey500};
`;
