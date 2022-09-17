import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import '@mashvisor/design-system/dist/style.css';
export default function MyApp({ Component, pageProps }: any) {
  const Layout = Component.Layout || EmptyLayout;
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
const EmptyLayout = ({ children }: any) => <div>{children}</div>;
