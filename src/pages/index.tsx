import { MouseEventHandler, ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectedSize } from "@/store/selectors";
import { selectSize } from "@/store/slices/appStateSlice";
import DefaultLayout from "@/layouts/DefaultLayout";
import HeadTags from "@/components/HeadTags";
import { wrapper } from "@/store";
import Button from "@/components/Button";

export default function Home() {
  const dispatch = useDispatch();
  const selectedButton = useSelector(selectedSize);

  function onClickHandler(event: any) {
    const { name = "" } = event.target as HTMLInputElement;
    dispatch(selectSize(name));
  }

  return (
    <div className="flex min-w-screen flex-row bg-white">
      <section className="flex min-h-screen flex-col flex-initial bg-red"></section>
      <main className="flex min-h-screen flex-col flex-1 bg-green"></main>
      <section className="flex min-h-screen flex-col flex-initial bg-blue">
        <Button
          size="small"
          text="XS"
          name="XS"
          onClick={onClickHandler}
          selected={selectedButton === "XS"}
        />
        <Button
          size="small"
          text="S"
          name="S"
          onClick={onClickHandler}
          selected={selectedButton === "S"}
        />
        <Button
          size="small"
          text="M"
          name="M"
          onClick={onClickHandler}
          disabled
          selected={selectedButton === "M"}
        />
        <Button
          size="small"
          text="L"
          name="L"
          onClick={onClickHandler}
          selected={selectedButton === "L"}
        />
        <Button
          size="small"
          text="XXL"
          name="XXL"
          onClick={onClickHandler}
          selected={selectedButton === "XXL"}
        />
      </section>
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

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    return {
      props: {},
    };
  }
);
