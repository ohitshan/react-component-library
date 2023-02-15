import { ReactNode, useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import SvgArrow from "../Svgr/Arrow";

interface DropdownProps {
  label: string;
  options: Array<ListType>;
}

interface ListType {
  label: ReactNode;
  key: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options = [{ label: "12", key: "1234" }],
}) => {
  const [showList, setShowList] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      setShowList(false);
    });
  }, []);

  return (
    <Container theme={{ height: divRef.current?.clientHeight }}>
      <StyledDiv
        ref={divRef}
        onClick={(e) => {
          e.stopPropagation();
          setShowList(!showList);
        }}
      >
        {label}
        <SvgContainer showList={showList}>
          <SvgArrow fill="black" width={24} height={24} />
        </SvgContainer>
      </StyledDiv>
      {showList && (
        <StyledList theme={{ height: divRef.current?.clientHeight }}>
          {options.map(({ key, label }) => {
            return <StyledLi key={key}>{label}</StyledLi>;
          })}
        </StyledList>
      )}
    </Container>
  );
};

export default Dropdown;

const Container = styled.div`
  position: relative;
`;

const StyledDiv = styled.div`
  top: 0;
  display: flex;
  padding: 12px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 12px;
  justify-content: space-between;
  align-items: center;
`;

interface SvgProps {
  showList: boolean;
}

const growDown = keyframes`
  0% {
      transform: scaleY(0)
  }
  80% {
      transform: scaleY(1.1)
  }
  100% {
      transform: scaleY(1)
  }
`;

const SvgContainer = styled.div<SvgProps>`
  width: 24px;
  height: 24px;
  ${({ showList }) => {
    if (showList) {
      return css`
        transform: rotate(-180deg);
        transition: 0.5s;
      `;
    }
  }}
`;

const StyledList = styled.ul`
  box-sizing: border-box;
  position: absolute;
  top: ${({ theme }) => theme.height + 1}px;
  left: 0;
  list-style-type: none;
  border: 1px solid black;
  width: 100%;
  margin: 0;
  border-radius: 12px;
  padding: 0;
  animation: ${growDown} 300ms ease-in-out forwards;
  transform-origin: top center;
  overflow: hidden;
`;

const StyledLi = styled.li`
  padding: 12px;
  :hover {
    background: gray;
  }
`;
