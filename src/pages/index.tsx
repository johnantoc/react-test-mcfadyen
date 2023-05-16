import DefaultLayout from "@/layouts/DefaultLayout";
import HeadTags from "@/components/HeadTags";
import { ReactElement } from "react";

export default function Home() {
  return (
    <div className="flex min-w-screen flex-row bg-white">
      <section className="flex min-h-screen flex-col flex-1 bg-red"></section>
      <main className="flex min-h-screen flex-col flex-1 bg-green"></main>
      <section className="flex min-h-screen flex-col flex-1 bg-blue"></section>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>
      <HeadTags />
      {page}
    </DefaultLayout>
  );
};
