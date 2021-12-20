import * as React from "preact/compat";
import {
  Link as ReactRouterLink,
  LinkProps as ReactRouterLinkProps,
} from "react-router-dom";
import clsx from "clsx";

type LinkProps = ReactRouterLinkProps;

//todo: Handle absolute urls.
export const Link: React.FC<LinkProps> = ({ className, ...linkProps }) => {
  return <ReactRouterLink className={clsx("link", className)} {...linkProps} />;
};
