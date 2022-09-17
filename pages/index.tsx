import Head from "next/head";
import Link from "next/link";
import { NextPage } from "next/types";
import { getSession, useSession, signOut } from "next-auth/react";
const Home: NextPage = () => {
  const { data: session } = useSession();
  function handleSignOut() {
    signOut();
  }
  return (
    <div className="container">
      <Head>
        <title>Home Page</title>
      </Head>
      {session ? User({ session, handleSignOut }) : Guest()}
    </div>
  );
};

// Guest
function Guest() {
  return (
    <main>
      <h3>Guest Homepage</h3>

      <div>
        <Link href={"/login"}>
          <a>
            Sign In
          </a>
        </Link>
      </div>
    </main>
  );
}

// Authorize User
function User({ session, handleSignOut }: any) {
  return (
    <main>
      <h3>Authorize User Homepage</h3>

      <div>
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>

      <div>
        <button
        
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>

      <div>
        <Link href={"/profile"}>
          <a>
            Profile Page
          </a>
        </Link>
      </div>
    </main>
  );
}
export default Home;

export async function getServerSideProps({ req }: any) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
