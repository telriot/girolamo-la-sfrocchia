/* eslint-disable jsx-a11y/anchor-has-content */
import React, { RefObject } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import MuiLink from "@material-ui/core/Link";
import clsx from "clsx";

interface PropsInterface {
  as: string | object;
  href: string | object;
  [propName: string]: any;
}

const NextComposed = React.forwardRef(function NextComposed(
  props: PropsInterface,
  ref: RefObject<HTMLAnchorElement>
) {
  const { as, href, ...other } = props;

  return (
    <NextLink href={href} as={as}>
      <a ref={ref} {...other} />
    </NextLink>
  );
});

function Link(props) {
  const {
    href,
    activeClassName = "active",
    className: classNameProps,
    innerRef,
    naked,
    ...other
  } = props;

  const router = useRouter();
  const pathname = typeof href === "string" ? href : href.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  });

  if (naked) {
    return (
      <NextComposed
        className={className}
        ref={innerRef}
        href={href}
        {...other}
      />
    );
  }

  return (
    <MuiLink
      component={NextComposed}
      className={className}
      ref={innerRef}
      href={href}
      {...other}
    />
  );
}

export default React.forwardRef(
  (props: PropsInterface, ref: RefObject<HTMLAnchorElement>) => (
    <Link {...props} innerRef={ref} />
  )
);
