import React, { ButtonHTMLAttributes, ReactNode } from "react";
import styled, { CSSObject } from "styled-components";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color?: ColorType;
  size?: string;
  style?: CSSObject;
}

type ColorType = "red" | "blue" | "yellow" | "green";

const Button = ({ label, ...args }: ButtonProps) => {
  return <StyledButton {...args}>{label}</StyledButton>;
};

export default Button;

const StyledButton = styled.button<Pick<ButtonProps, "color">>`
  padding: 10px;
  background: ${({ color }) => {
    switch (color) {
      default:
        return color;
    }
  }};
`;
