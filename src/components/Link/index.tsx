import * as React from "preact/compat";
import {
  Link as ReactRouterLink,
  LinkProps as ReactRouterLinkProps,
  useLocation,
} from "react-router-dom";
import clsx from "clsx";

type LinkProps = ReactRouterLinkProps & {
  activeClassName?: string;
};

//todo: Handle absolute urls.
export const Link: React.FC<LinkProps> = ({
  className,
  to,
  activeClassName,
  ...linkProps
}) => {
  const { pathname } = useLocation();

  const isActive = pathname === to;
  const getActiveClassName = () => {
    return activeClassName ? `active ${activeClassName}` : "active";
  };
  return (
    <ReactRouterLink
      to={to}
      className={clsx("link", isActive && getActiveClassName(), className)}
      {...linkProps}
    />
  );
};
