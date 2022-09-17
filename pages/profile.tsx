import Link from "next/link";
import { getSession } from "next-auth/react";

export default function Profile() {
  return (
    <section>
      <h3>Profile Page</h3>
      <Link href={"/"}>
        Home Page
      </Link>
    </section>
  );
}

export async function getServerSideProps({ req }: any) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        premanent: false,
      },
    };
  }
  // authorize user return session
  return {
    props: { session },
  };
}
