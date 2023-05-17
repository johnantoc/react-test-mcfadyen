import { ReactElement } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { selectedSize } from "@/store/selectors";
import { selectSize } from "@/store/slices/appStateSlice";
import DefaultLayout from "@/layouts/DefaultLayout";
import HeadTags from "@/components/HeadTags";
import { wrapper } from "@/store";
import Button from "@/components/Button";
import TabbedPanel from "@/components/TabbedPanel";
import ImageCarousel from "@/components/ImageCarousel";
import { tags, sizes } from "@/utils/constants";

export default function Home() {
  const dispatch = useDispatch();
  const selectedButton = useSelector(selectedSize);

  function onClickHandler(event: any) {
    event.stopPropagation();
    const { name = "" } = event.target as HTMLInputElement;
    if (name !== "") dispatch(selectSize(name));
  }

  return (
    <>
      <main className="flex flex-col lg:flex-row grow min-w-screen bg-white justify-center relative px-4 lg:px-10">
        {/** Tabbed Details Panel section */}
        <section
          id="tabbedDetails"
          className="flex flex-col flex-initial w-full lg:w-1/4 h-fit order-3 lg:order-1 static lg:sticky lg:top-[70px] pt-[40px] lg:pt-0 min-h-[300px]"
        >
          <TabbedPanel />
        </section>

        {/** Images Carousel section */}
        <section
          id="imageSection"
          className="flex flex-col w-full order-1 lg:order-2 lg:w-2/4 relative"
        >
          <div className="sticky flex top-[70px] justify-end h-[20px] z-[9999]">
            <Image
              src="/assets/images/Unfilled.svg"
              alt="favorites"
              height={20}
              width={18}
              style={{
                objectFit: "contain",
                marginRight: "40px",
              }}
            />
          </div>
          <ImageCarousel />
        </section>

        {/** Details section with add to cart CTA */}
        <section
          id="shoppingDetails"
          className="flex flex-col gap-[24px] flex-initial w-full h-fit lg:w-1/4 pt-10 order-2 lg:order-3 static lg:sticky lg:top-[70px]"
        >
          <div className="flex flex-col gap-[4px]">
            <h1 className="text-3xl lg:text-5xl">JONATHAN SIMKHAI</h1>
            <span className="text-sm">
              Lurex Linen Viscose Jacket in Conchiglia
            </span>
            <span className="text-sm font-bold font-['Roboto-bold']">$225</span>
          </div>
          <div className="flex flex-col gap-[4px]">
            <span className="text-sm uppercase">
              <span className="text-sm font-bold font-['Roboto-bold'] pr-[6px]">
                Color
              </span>
              Conchiglia
            </span>
            <div className="flex relative gap-[4px] flex-wrap">
              <Image
                src="/assets/images/image409.png"
                alt=""
                width={51}
                height={63}
                style={{ objectFit: "contain", border: "1px solid black" }}
              />
              <Image
                src="/assets/images/image414.png"
                alt=""
                width={51}
                height={63}
                style={{ objectFit: "contain", border: "1px solid #E5E5E5" }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[12px]">
            <span className="text-sm uppercase">
              <span className="text-sm font-bold font-['Roboto-bold'] pr-[6px]">
                Size
              </span>
              {selectedButton}
            </span>
            <div
              className="flex flex-wrap gap-[4px]"
              onClickCapture={onClickHandler}
            >
              {sizes.map((size) => (
                <Button
                  key={size.id}
                  size="small"
                  text={size.value}
                  name={size.value}
                  disabled={!size.available}
                  selected={selectedButton === size.value}
                />
              ))}
            </div>
          </div>
          <Button
            text="add to bag"
            name="add"
            className="h-[48px] bg-black text-white hover:bg-black/70 active:bg-white active:text-black"
          />
          <span className="text-sm">
            Get 4 interest-free payments of $196.25 with Klarna LEARN MORE
          </span>
          <span className="text-sm">Speak to a Personal Stylist CHAT NOW</span>
        </section>
      </main>

      {/** Rest of the page section */}
      <section
        id="editorNotes"
        className="flex flex-col gap-[16px] w-full items-center py-24"
      >
        <ul className="flex w-full justify-center gap-[24px]">
          {tags.map((tag) => (
            <li key={tag} className="underline">
              {tag}
            </li>
          ))}
        </ul>
        <span className="text-sm uppercase pt-24">a note from the editor</span>
        <span className="text-xl lg:text-3xl w-full lg:w-1/2 text-center px-[18px]">
          The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
          lavishness by night and by day: a blazer in a linen blend shot with
          lurex for a shimmering surface that shines like a star in the sky.{" "}
        </span>
        <span className="text-sm ">
          -- By <span className="text-sm underline pr-[6px]"> MINNA SHIM,</span>
          Fashion Editor
        </span>
      </section>
    </>
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
