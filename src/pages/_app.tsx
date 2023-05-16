import { wrapper } from "@/store";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ReactElement, ReactNode } from "react";
import { ReactReduxContext } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  const router = useRouter();
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <PersistGate
          persistor={(store as any).__persistor}
          loading={<div>Loading</div>}
        >
          {getLayout(<Component {...pageProps} key={router.asPath} />)}
        </PersistGate>
      )}
    </ReactReduxContext.Consumer>
  );
}

export default wrapper.withRedux(App);
