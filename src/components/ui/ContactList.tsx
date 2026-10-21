import { contactItems, type ContactChannel } from "../../constants/contact";
import { useContent } from "../../i18n/useContent";
import { cx } from "../../lib/cx";
import IconBadge from "./IconBadge";
import SmartLink from "./SmartLink";

type ContactListProps = {
  inverted?: boolean;
  channels?: ContactChannel[];
  size?: "sm" | "md";
  className?: string;
};

const ContactList = ({
  inverted = false,
  channels,
  size = "sm",
  className,
}: ContactListProps) => {
  const { t } = useContent();
  const items = channels
    ? contactItems.filter((item) => channels.includes(item.channel))
    : contactItems;

  return (
    <ul className={cx(size === "md" ? "space-y-5" : "space-y-4", className)}>
      {items.map((item) => (
        <li key={item.channel}>
          <SmartLink
            href={item.href}
            className={cx(
              "flex items-center gap-3 transition-colors",
              inverted
                ? "text-white/85 hover:text-white"
                : "text-text hover:text-brand",
            )}
          >
            <IconBadge Icon={item.Icon} size={size} />
            <span className="flex flex-col">
              <span
                className={cx(
                  "text-xs",
                  inverted ? "text-white/55" : "text-text-muted",
                )}
              >
                {t.contactChannels[item.channel]}
              </span>
              <span
                className={cx(
                  "font-medium tabular-nums",
                  size === "md" ? "text-base" : "text-sm",
                )}
              >
                {item.value}
              </span>
            </span>
          </SmartLink>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
