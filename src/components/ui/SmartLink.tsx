import type { AnchorHTMLAttributes } from "react";
import { Link, useLocation } from "react-router-dom";

export type SmartLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

const isExternal = (href: string) =>
  /^https?:\/\//.test(href) || href.endsWith(".pdf");

/**
 * One link for every destination: router paths, home-page section hashes
 * (resolved to `/#id` off the home page), external URLs and tel:/mailto:.
 */
const SmartLink = ({ href, children, ...props }: SmartLinkProps) => {
  const { pathname } = useLocation();

  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <Link to={pathname === "/" ? href : `/${href}`} {...props}>
        {children}
      </Link>
    );
  }

  if (href.startsWith("/")) {
    return (
      <Link to={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
};

export default SmartLink;
