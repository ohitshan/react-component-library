import { InputHTMLAttributes, ReactNode, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import SvgArrow from "../Svgr/Arrow";

interface TableProps {
  columns: Array<ColumnType>;
  dataSource: Array<any>;
}
interface ColumnType {
  key: string;
  title: ReactNode;
  dataIndex: string;
}

const Table = ({
  columns = [
    { key: "13", title: <div>name</div>, dataIndex: "name" },
    { key: "12", title: "age", dataIndex: "age" },
    { key: "14", title: "gender", dataIndex: "gender" },
  ],
  dataSource = [
    { key: "12", name: "han", age: 12, gender: "male" },
    { key: "13", name: "seok", age: 23, gender: "female" },
  ],
}: TableProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [column, setColumn] = useState([...columns]);
  useEffect(() => {
    let dragging: boolean = false;

    window.addEventListener("mousedown", (event) => {
      let element = event.target as HTMLElement;
      if (element?.tagName !== "TH") return;
      setIsDragging(true);
      dragging = true;
      document.querySelectorAll(`#${element.id}`).forEach((item) => {
        const target = item as HTMLElement;
        console.log(target.clientWidth);
        target.style.position = "absolute";
        target.style.minWidth = `${target.clientWidth}`;
      });
      console.log(element.id);
    });

    window.addEventListener("mousemove", (event) => {});
    // window.addEventListener("mouseover", (event) => {
    //   if (!dragging) return;
    //   // console.log(event.target.innerHTML);
    // });

    window.addEventListener("mouseup", (event) => {
      setIsDragging(false);
      dragging = false;
    });
  }, []);

  return (
    <StyledTable>
      <thead>
        <tr>
          {column?.map((item, i) => (
            <StyledTh key={item.key} id={`tableCol${i}`}>
              {item.title}
            </StyledTh>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataSource?.map((item) => (
          <tr key={item.key}>
            {columns.map((col, i) => (
              <StyledTd key={col.key} id={`tableCol${i}`}>
                {item[col.dataIndex]}
              </StyledTd>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;

const StyledTable = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  position: relative;
`;

const StyledTd = styled.td`
  border: 1px solid black;
  padding: 12px;
`;

const StyledTh = styled.th`
  border: 1px solid black;
  padding: 12px;
  cursor: grabbing;
  background: #ffe683;
`;
