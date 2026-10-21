import { useEffect, useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import { mainNav, ROUTES } from "../../constants/nav";
import { useContent } from "../../i18n/useContent";
import { cx } from "../../lib/cx";
import Container from "../ui/Container";
import LanguageSwitch from "../ui/LanguageSwitch";
import Logo from "../ui/Logo";
import QuoteButton from "../ui/QuoteButton";
import SmartLink from "../ui/SmartLink";

type NavLinksProps = {
  inverted: boolean;
  className?: string;
  onNavigate?: () => void;
};

const NavLinks = ({ inverted, className, onNavigate }: NavLinksProps) => {
  const { t } = useContent();
  const { pathname } = useLocation();

  return (
    <ul className={className}>
      {mainNav.map((link) => {
        const active =
          pathname === link.href || pathname.startsWith(`${link.href}/`);
        return (
          <li key={link.href}>
            <SmartLink
              href={link.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={cx(
                "group relative inline-block py-1 text-[0.95rem] font-medium transition-colors duration-200",
                inverted
                  ? "text-white/85 hover:text-white"
                  : "text-text hover:text-brand",
                active && (inverted ? "text-white" : "text-brand"),
              )}
            >
              {t.nav[link.key]}
              <span
                aria-hidden="true"
                className={cx(
                  "absolute -bottom-0.5 left-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full",
                  active ? "w-full" : "w-0",
                )}
              />
            </SmartLink>
          </li>
        );
      })}
    </ul>
  );
};

const Navbar = () => {
  const { t } = useContent();
  const { pathname } = useLocation();
  // The menu remembers the path it was opened on, so any navigation closes it.
  const [menuOpenOn, setMenuOpenOn] = useState<string | null>(null);
  const menuOpen = menuOpenOn === pathname;
  const [scrolled, setScrolled] = useState(false);
  const solid = scrolled || menuOpen;

  useEffect(() => {
    const ENTER_AT = 48;
    const EXIT_AT = 8;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled((isScrolled) => {
        if (!isScrolled && y > ENTER_AT) return true;
        if (isScrolled && y < EXIT_AT) return false;
        return isScrolled;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpenOn(null);

  return (
    <header
      className={cx(
        "sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ease-out",
        solid
          ? "border-border/70 bg-surface shadow-[0_8px_30px_rgba(11,26,61,0.08)] md:bg-surface/90 md:backdrop-blur-md"
          : "border-transparent bg-transparent shadow-none",
      )}
    >
      <Container>
        <nav
          aria-label={t.a11y.mainNavigation}
          className="flex items-center justify-between gap-6 py-3"
        >
          <Link to={ROUTES.home} className="shrink-0" onClick={closeMenu}>
            <Logo priority className="h-13 sm:h-16" />
          </Link>

          <NavLinks
            inverted={!solid}
            className="hidden items-center gap-7 lg:flex xl:gap-9"
          />

          <div className="flex items-center gap-3">
            <LanguageSwitch inverted={!solid} />
            <div className="hidden lg:block">
              <QuoteButton />
            </div>
            <button
              type="button"
              aria-label={menuOpen ? t.a11y.closeMenu : t.a11y.openMenu}
              aria-expanded={menuOpen}
              className={cx(
                "flex size-10 items-center justify-center rounded-md transition-colors lg:hidden",
                solid
                  ? "text-brand hover:bg-brand-light"
                  : "text-white hover:bg-white/10",
              )}
              onClick={() => setMenuOpenOn(menuOpen ? null : pathname)}
            >
              {menuOpen ? (
                <HiOutlineXMark className="size-6" />
              ) : (
                <HiOutlineBars3 className="size-6" />
              )}
            </button>
          </div>
        </nav>
      </Container>

      {menuOpen ? (
        <div className="border-t border-border/80 bg-surface py-5 shadow-sm lg:hidden">
          <Container>
            <NavLinks
              inverted={false}
              className="flex flex-col gap-3"
              onNavigate={closeMenu}
            />
            <QuoteButton className="mt-6 w-full" onClick={closeMenu} />
          </Container>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
