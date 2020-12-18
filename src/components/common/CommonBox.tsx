import React, { ReactNode } from "react";

interface CommonBoxProps {
  data: number;
  detail: string;
  IconCom?: ReactNode;
}

const CommonBox = (props: CommonBoxProps) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {props.IconCom}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div>{props.detail}</div>
        <div>{props.data}</div>
      </div>
    </div>
  );
};

export default CommonBox;
