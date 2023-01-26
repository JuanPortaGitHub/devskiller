import classNames from "classnames";
import React, { FC } from "react";

import "./Page.css";

type PageProps = Readonly<{
    className?: string;
    title: string;
    children: JSX.Element | JSX.Element[]
}>

const Page: FC<PageProps> =
    ({ className, title, children }) => (
        <section className={classNames("Page", className)}>
            <h1 className="Page__title">{title}</h1>
            {children}
        </section>
    );

export default Page;
