import { socialConfig } from "../lib/social";
import styles from "./SocialLinks.module.css";

type SocialIconName = "whatsapp" | "phone" | "instagram" | "tiktok" | "x";

function internationalDigits(value: string) {
  const digits = value.trim().replace(/\D/g, "").replace(/^00/, "");
  return /^[1-9]\d{6,14}$/.test(digits) ? digits : "";
}

function profileUrl(value: string) {
  if (!value.trim()) return "";

  try {
    const url = new URL(value.trim());
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : "";
  } catch {
    return "";
  }
}

function SocialIcon({ name }: { name: SocialIconName }) {
  const filled = name === "tiktok" || name === "x";

  return (
    <svg
      className={`${styles.icon}${filled ? ` ${styles.filledIcon}` : ""}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {name === "whatsapp" && (
        <>
          <path d="M21 11.5a9 9 0 0 1-13.4 7.85L3 21l1.65-4.6A9 9 0 1 1 21 11.5Z" />
          <path d="m8.2 7.3 1.3 2.2-.9 1.2a8.1 8.1 0 0 0 3.5 3.5l1.2-.9 2.2 1.3c.3.2.4.6.2.9-.5.9-1.1 1.3-2 1.2-3.6-.5-6.5-3.4-7-7-.1-.9.3-1.5 1.2-2 .3-.2.7-.1.9.2Z" />
        </>
      )}
      {name === "phone" && (
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.79a2 2 0 0 1-.45 2.11L8.08 9.89a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.33 1.83.56 2.79.69A2 2 0 0 1 22 16.92Z" />
      )}
      {name === "instagram" && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle className={styles.instagramDot} cx="17.5" cy="6.5" r="1" />
        </>
      )}
      {name === "tiktok" && (
        <path d="M16.6 2h-3.3v13.1a2.9 2.9 0 1 1-2.5-2.9V8.9a6.2 6.2 0 1 0 5.8 6.2V8.5a9.2 9.2 0 0 0 5.3 1.7V6.9A5.3 5.3 0 0 1 16.6 2Z" />
      )}
      {name === "x" && (
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.3-8.5L1 2h6.5L12 8.7 18.9 2Zm-1.1 18h1.7L6.6 3.9H4.8L17.8 20Z" />
      )}
    </svg>
  );
}

export default function SocialLinks() {
  const phone = internationalDigits(socialConfig.phoneNumber);
  const whatsapp = internationalDigits(socialConfig.whatsappNumber);
  const contacts: { name: string; icon: SocialIconName; href: string; external: boolean }[] = [
    { name: "WhatsApp", icon: "whatsapp", href: whatsapp ? `https://wa.me/${whatsapp}` : "", external: true },
    { name: "Phone", icon: "phone", href: phone ? `tel:+${phone}` : "", external: false },
    { name: "Instagram", icon: "instagram", href: profileUrl(socialConfig.instagramUrl), external: true },
    { name: "TikTok", icon: "tiktok", href: profileUrl(socialConfig.tiktokUrl), external: true },
    { name: "X", icon: "x", href: profileUrl(socialConfig.xUrl), external: true },
  ];

  return (
    <div className={styles.links} role="group" aria-label="Contact and social media">
      {contacts.map((contact) => contact.href ? (
        <a
          className={styles.link}
          key={contact.icon}
          href={contact.href}
          aria-label={contact.name}
          title={contact.name}
          target={contact.external ? "_blank" : undefined}
          rel={contact.external ? "noopener noreferrer" : undefined}
        >
          <SocialIcon name={contact.icon} />
        </a>
      ) : (
        <div
          className={`${styles.link} ${styles.pending}`}
          key={contact.icon}
          role="img"
          aria-label={contact.name}
          title={contact.name}
        >
          <SocialIcon name={contact.icon} />
        </div>
      ))}
    </div>
  );
}