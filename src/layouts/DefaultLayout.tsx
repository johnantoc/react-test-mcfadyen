import { ReactElement } from "react";
import Header from "@/components/Header";

type Props = {
  children: ReactElement | ReactElement[];
};

function DefaultLayout({ children }: Props) {
  return (
    <div className="flex min-w-screen flex-col relative">
      <Header />
      {children}
    </div>
  );
}

DefaultLayout.defaultProps = {
  children: null,
};

export default DefaultLayout;
