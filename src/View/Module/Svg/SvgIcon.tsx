import React from "react";

interface Props {
    path: string,
    icon: string,
    className?: string
}

export const SvgIcon: React.FC<Props> = ({ icon, path, className = '' }) => (
        <svg className={`svg-icon${className.length > 0 ? ` ${className}` : ""}`}>
            <use href={`/img/${path}.svg#${icon}`} />
        </svg>
);
