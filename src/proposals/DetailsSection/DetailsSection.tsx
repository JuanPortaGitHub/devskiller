import React, { FC } from "react";
import classNames from "classnames";

import "./DetailsSection.css";

type DetailsSectionProps = Readonly<{
  children?: React.ReactNode;
  className?: string;
  name: string;
}>;

const DetailsSection: FC<DetailsSectionProps> = ({
  className,
  name,
  children,
}) => (
  <section className={classNames("DetailsSection", className)}>
    <div className="DetailsSection__name">{name}</div>
    <div className="DetailsSection__content">{children}</div>
  </section>
);

export default DetailsSection;
