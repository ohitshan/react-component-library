import React, {
  ButtonHTMLAttributes,
  ElementType,
  FunctionComponent,
  ReactNode,
} from "react";
import styled, { css, CSSObject } from "styled-components";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  label?: string;
  color?: ColorType;
  style?: CSSObject;
  shape?: "circle";
  height?: number;
  border?: boolean;
  leftSvg?: ReactNode;
  rightSvg?: ReactNode;
  gap?: number;
  fontSize?: number;
}

type ColorType = "red" | "blue" | "yellow" | "green" | "primary";

const Button = ({
  label,
  color = "primary",
  style,
  leftSvg,
  rightSvg,
  fontSize,
  ...args
}: ButtonProps) => {
  return (
    <StyledButton {...args} style={style}>
      {leftSvg && leftSvg}
      <StyledSpan>{label}</StyledSpan>
      {rightSvg && rightSvg}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<
  Pick<ButtonProps, "color" | "block" | "height" | "border" | "shape">
>`
  display: flex;
  align-items: center;
  ${({ block = false }) =>
    block
      ? css`
          display: block;
          width: 100%;
        `
      : ""}
  background: ${({ color = "primary" }) => {
    switch (color) {
      case "primary":
        return "white";
      default:
        return color;
    }
  }};
  :hover {
    cursor: pointer;
  }
  height: ${({ height }) => `${height}px`};
  border: ${({ border = true, color = "primary" }) => {
    if (border && color === "primary") {
      return "1px solid gray";
    } else {
      return "none";
    }
  }};
  padding: 20px;

  ${({ shape, height }) => {
    if (shape === "circle") {
      return css`
        border-radius: 50%;
        height: ${height}px;
      `;
    } else {
      return css`
        border-radius: 12px;
      `;
    }
  }};
`;

const StyledSpan = styled.span<
  Pick<ButtonProps, "gap" | "leftSvg" | "rightSvg" | "fontSize">
>`
  ${({ fontSize }) => {
    return css`
      font-size: ${fontSize}px;
    `;
  }}
  ${({ gap, leftSvg, rightSvg }) => {
    if (rightSvg) {
      return css`
        margin-right: ${gap || 5}px;
      `;
    } else if (leftSvg) {
      return css`
        margin-left: ${gap || 5}px;
      `;
    }
  }}
`;
