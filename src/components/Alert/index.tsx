import React from "preact/compat";
import { ColourVariants } from "~/types/ColourVariants";
import { BootstrapSize } from "~/types/BootstrapSize";
import { JSXInternal } from "preact/src/jsx";
import clsx from "clsx";

type AlertProps = JSXInternal.HTMLAttributes<HTMLDivElement> & {
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
