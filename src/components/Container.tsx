import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <div className="max-w-[1440px] px-0 mx-auto">{children}</div>
  );
};

export default Container;