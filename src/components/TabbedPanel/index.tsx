import { MouseEventHandler, ReactElement, useState } from "react";

type TabProps = {
  title: string;
  isActive: boolean;
  onShow: MouseEventHandler<HTMLButtonElement>;
};

type PanelProps = {
  children: ReactElement;
  isActive: boolean;
};

function Tab({ title, isActive, onShow }: TabProps) {
  return (
    <button
      onClick={onShow}
      className={`uppercase text-sm ${
        isActive ? "text-black border-b-2 border-black" : "text-gray-400"
      }`}
    >
      {title}
    </button>
  );
}

function Panel({ children, isActive }: PanelProps) {
  return isActive ? <section className="text-sm">{children}</section> : null;
}

const TabbedPanel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex gap-[24px]">
        <Tab
          title="Details"
          onShow={() => setActiveIndex(0)}
          isActive={activeIndex === 0}
        />
        <Tab
          title="Delivery"
          onShow={() => setActiveIndex(1)}
          isActive={activeIndex === 1}
        />
        <Tab
          title="Fit"
          onShow={() => setActiveIndex(2)}
          isActive={activeIndex === 2}
        />
        <Tab
          title="Share"
          onShow={() => setActiveIndex(3)}
          isActive={activeIndex === 3}
        />
      </div>
      <Panel isActive={activeIndex === 0}>
        <p className="flex flex-col gap-[24px]">
          The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
          lavishness by night and by day: a blazer in a linen blend shot with
          lurex for a shimmering surface that shines like a star in the sky. it
          has a straight fit with well defined shoulders and a shawl collar
          culminating in a button and has been flawlessly finished with three
          jet pockets with a sartorial feel.
          <span>
            See the <u>EDITOR’S NOTE</u>
          </span>
          <span>
            Learn about the <u>DESIGNER</u>
          </span>
        </p>
      </Panel>
      <Panel isActive={activeIndex === 1}>
        <p>Delivery</p>
      </Panel>
      <Panel isActive={activeIndex === 2}>
        <p>Fit</p>
      </Panel>
      <Panel isActive={activeIndex === 3}>
        <p>Share</p>
      </Panel>
    </div>
  );
};

export default TabbedPanel;
