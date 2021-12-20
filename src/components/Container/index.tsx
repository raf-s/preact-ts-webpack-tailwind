import React from "preact/compat";
import clsx from "clsx";

type ContainerProps = React.JSX.HTMLAttributes<HTMLDivElement> & {
  fluid?: boolean;
};

export const Container: React.FC<ContainerProps> = ({
  fluid,
  className,
  children,
  ...divProps
}) => {
  return (
    <div
      className={clsx(fluid ? "container-fluid" : "container", className)}
      {...divProps}
    >
      {children}
    </div>
  );
};
