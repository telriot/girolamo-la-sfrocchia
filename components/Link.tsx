/* eslint-disable jsx-a11y/anchor-has-content */
import React, { RefObject } from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import NextLink from "next/link";
import MuiLink from "@material-ui/core/Link";

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

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link

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

// Link.propTypes = {
//   activeClassName: PropTypes.string,
//   as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//   className: PropTypes.string,
//   href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//   innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
//   naked: PropTypes.bool,
//   onClick: PropTypes.func,
//   prefetch: PropTypes.bool,
// };

export default React.forwardRef(
  (props: PropsInterface, ref: RefObject<HTMLAnchorElement>) => (
    <Link {...props} innerRef={ref} />
  )
);
