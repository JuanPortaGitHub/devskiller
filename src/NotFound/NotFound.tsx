import React, { FC } from "react";

import "./NotFound.css";

const NotFound: FC =
    () => (
        <div data-testid="not-found" className="NotFound">
            <div className="NotFound__content">
                not found<br/>
                :-(
            </div>
        </div>
    );

export default NotFound;
