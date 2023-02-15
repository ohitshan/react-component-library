import { InputHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";
import SvgArrow from "../Svgr/Arrow";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  addonBefore?: ReactNode;
  addonAfter?: ReactNode;
}

const Input = ({
  addonBefore = <SvgArrow fill="black" />,
  addonAfter = <SvgArrow fill="black" />,
  ...args
}: InputProps) => {
  return (
    <StyleInputGroup>
      {addonBefore && (
        <StyledPrefix addonBefore={addonBefore}>{addonBefore}</StyledPrefix>
      )}
      <StyledInput
        {...args}
        addonBefore={addonBefore}
        addonAfter={addonAfter}
      ></StyledInput>
      {addonAfter && (
        <StyledSuffix addonAfter={addonAfter}>{addonAfter}</StyledSuffix>
      )}
    </StyleInputGroup>
  );
};

export default Input;

const StyledInput = styled.input<
  Pick<InputProps, "addonBefore" | "addonAfter">
>`
  padding: 8px;
  font-size: 14px;
  border-radius: 12px;
  border: 1px solid black;
  ${({ addonBefore, addonAfter }) => {
    if (addonBefore && addonAfter) {
      return css`
        border-radius: 0;
        border-left: none;
        border-right: none;
      `;
    } else if (addonBefore) {
      return css`
        border-radius: 0 12px 12px 0;
        border-left: none;
      `;
    } else if (addonAfter) {
      return css`
        border-radius: 12px 0 0 12px;
        border-right: none;
      `;
    }
  }}
`;

const StyledPrefix = styled.div<Pick<InputProps, "addonBefore" | "addonAfter">>`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 12px;
  border: 1px solid black;
  ${({ addonBefore }) => {
    if (addonBefore) {
      return css`
        border-radius: 12px 0 0 12px;
        border-right: none;
      `;
    }
  }}
`;

const StyledSuffix = styled(StyledPrefix)`
  ${({ addonAfter }) => {
    if (addonAfter) {
      return css`
        border-radius: 0 12px 12px 0;
        border-left: none;
      `;
    }
  }}
`;

const StyleInputGroup = styled.div`
  display: flex;
`;
