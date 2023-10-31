import React from "react";
import "./sectionhoc.css";

interface WithTitleProps {
  title?: string;
  children?: any;
}

const withTitle = (WrapperComponent: React.FC<WithTitleProps>) => {
  return ({ title, children }: WithTitleProps) => {
    return (
      <WrapperComponent title={title}>
        <h5 className="prop__title">{title}</h5>
        {children}
        <hr />
      </WrapperComponent>
    );
  };
};

const SectionHoc: React.FC<WithTitleProps> = withTitle(
  ({ children }: WithTitleProps) => {
    return <div style={{ margin: "20px 6px" }}>{children}</div>;
  }
);

export default SectionHoc;
