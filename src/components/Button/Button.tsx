import React, { ButtonHTMLAttributes, ReactNode } from "react";
import styled, { css, CSSObject, keyframes } from "styled-components";
import Arrow from "../../../assets/Arrow.svg";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  label?: string;
  color?: ColorType;
  style?: CSSObject;
  shape?: "circle" | "square";
  height?: number;
  border?: boolean;
  leftSvg?: ReactNode;
  rightSvg?: ReactNode;
  gap?: number;
  fontSize?: number;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

type ColorType = "red" | "blue" | "yellow" | "green" | "primary";

const Button = ({
  label,
  color = "primary",
  shape = "square",
  style,
  leftSvg,
  rightSvg,
  fontSize = 24,
  loading = false,
  disabled,
  onClick,
  ...args
}: ButtonProps) => {
  return (
    <StyledButton
      {...args}
      style={style}
      color={color}
      shape={shape}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {leftSvg && leftSvg}
      <StyledSpan fontSize={fontSize}>{label}</StyledSpan>
      {rightSvg && rightSvg}
      {loading && (
        <StyledImage
          src={Arrow}
          width={fontSize}
          height={fontSize}
          alt="12"
          color="black"
        />
        // <StyledLoading
        //   fill="gray"
        //   style={{ marginLeft: 10 }}
        //   width={fontSize}
        //   height={fontSize}
        // />
      )}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<
  Pick<
    ButtonProps,
    "color" | "block" | "height" | "border" | "shape" | "loading" | "disabled"
  >
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
  background: ${({ color }) => {
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

  :disbaled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  ${({ loading }) => {
    if (loading) {
      return css`
        opacity: 0.5;
      `;
    }
  }}
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

const rotate = keyframes`
  0% {
    rotate: 0;
  }
  100% {
    rotate: 360deg;
  }
`;

const StyledImage = styled.img`
  animation: 1s ${rotate} infinite linear;
`;
