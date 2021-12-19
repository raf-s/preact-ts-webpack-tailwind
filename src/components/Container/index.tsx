import { FunctionComponent } from "preact";
import clsx from "clsx";
import { JSXInternal } from "preact/src/jsx";

type ContainerProps = JSXInternal.HTMLAttributes<HTMLDivElement> & {
  fluid?: boolean;
};

export const Container: FunctionComponent<ContainerProps> = ({
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
