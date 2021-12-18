import * as React from "react";
import clsx from "clsx";
import { BootstrapSize } from "../../types/BootstrapSize";
import { ColourVariants } from "../../types/ColourVariants";

type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
  variant: ColourVariants;
  size?: BootstrapSize;
};

export const Alert: React.FC<AlertProps> = ({
  variant,
  className,
  size,
  children,
  ...divProps
}) => {
  return (
    <div
      className={clsx(
        "alert",
        `alert-${variant}`,
        size && `alert-${size}`,
        className
      )}
      {...divProps}
    >
      {children}
    </div>
  );
};
