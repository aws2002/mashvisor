import Image from "next/image";
import styles from "../../styles/main.module.scss";
export default function Layout({ children }: any) {
  return (
    <div>
      <div className={styles.pointer_events_none}>
        <Image
          alt="Mountains"
          src="/assets/Vector.png"
          layout="fill"
          objectFit="fill"
          objectPosition={"bottom"}
          priority
          quality={100}
        />
      </div>
      {children}
    </div>
  );
}
