import React, { forwardRef } from "react";
import { ContainerPropsType, Ref } from "./container";

export default function Container(props: ContainerPropsType) {
    const { id, className, role, children } = props;
    return (
        <div id={id} className={className} role={role}>
            {children}
        </div>
    );
}

const ForwardContainer = forwardRef<Ref, ContainerPropsType>(function Container(
    props,
    ref
) {
    const { id, className, children } = props;

    return (
        <div id={id} className={className} ref={ref}>
            {children}
        </div>
    );
});

export { ForwardContainer };
