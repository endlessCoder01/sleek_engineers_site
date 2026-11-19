import Image from "next/image";
import logo from "../../public/sleek-engineering-logo-transparent.png";
import styles from "./BrandLogo.module.css";

type BrandLogoProps = {
  large?: boolean;
  decorative?: boolean;
};

export default function BrandLogo({
  large = false,
  decorative = false,
}: BrandLogoProps) {
  return (
    <span className={`${styles.logo}${large ? ` ${styles.large}` : ""}`}>
      <Image
        className={styles.image}
        src={logo}
        alt={decorative ? "" : "Sleek Engineering"}
        fill
        sizes={large ? "(max-width: 760px) 180px, 224px" : "96px"}
      />
    </span>
  );
}
