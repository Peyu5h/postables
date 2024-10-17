import React, { useRef, useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

interface Position {
  left: number;
  width: number;
  opacity: number;
}

export const Tablist = ({
  onTabChange,
}: {
  onTabChange: (tab: string) => void;
}) => {
  return <SlideTabs onTabChange={onTabChange} />;
};

const SlideTabs = ({ onTabChange }: { onTabChange: (tab: string) => void }) => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 1,
  });
  const [activeTab, setActiveTab] = useState("Individuals");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);

  const tabs = ["Individuals", "Influencers", "Business"];

  useEffect(() => {
    // Set initial position to the active tab
    const activeTabElement = tabsRef.current[tabs.indexOf(activeTab)];
    if (activeTabElement) {
      setPosition({
        left: activeTabElement.offsetLeft,
        width: activeTabElement.offsetWidth,
        opacity: 1,
      });
    }
  }, [activeTab]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    const currentIndex = tabs.indexOf(activeTab);
    let newIndex = currentIndex;

    switch (event.key) {
      case "ArrowRight":
        newIndex = (currentIndex + 1) % tabs.length;
        break;
      case "ArrowLeft":
        newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        break;
      default:
        return;
    }

    setActiveTab(tabs[newIndex]);
    onTabChange(tabs[newIndex]);
  };

  return (
    <ul
      onMouseLeave={() => {
        setHoveredTab(null);
      }}
      onKeyDown={handleKeyDown}
      className="relative flex w-fit rounded-2xl border-2 border-muted bg-secondary p-1"
      role="tablist"
    >
      {tabs.map((tab, index) => (
        <Tab
          key={tab}
          ref={(el) => {
            if (el) {
              tabsRef.current[index] = el;
            }
          }}
          setPosition={setPosition}
          active={activeTab === tab}
          onClick={() => {
            setActiveTab(tab);
            onTabChange(tab);
          }}
          onHover={() => setHoveredTab(tab)}
        >
          {tab}
        </Tab>
      ))}

      <Cursor
        position={position}
        hoveredTab={hoveredTab}
        activeTab={activeTab}
        tabsRef={tabsRef}
        tabs={tabs}
      />
    </ul>
  );
};

interface TabProps {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  active: boolean;
  onClick: () => void;
  onHover: () => void;
}

const Tab = React.forwardRef<HTMLLIElement, TabProps>(
  ({ children, setPosition, active, onClick, onHover }, ref) => {
    return (
      <li
        ref={ref}
        onMouseEnter={() => {
          if (ref && "current" in ref && ref.current) {
            const { offsetLeft, offsetWidth } = ref.current;
            setPosition({
              left: offsetLeft,
              width: offsetWidth,
              opacity: 1,
            });
          }
          onHover();
        }}
        onClick={onClick}
        className={`relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase md:px-5 md:py-3 md:text-base ${
          active ? "text-white" : "text-mutedGray hover:text-white"
        }`}
        role="tab"
        aria-selected={active}
        tabIndex={active ? 0 : -1}
      >
        {children}
      </li>
    );
  },
);

Tab.displayName = "Tab";

interface CursorProps {
  position: Position;
  hoveredTab: string | null;
  activeTab: string;
  tabsRef: React.MutableRefObject<(HTMLLIElement | null)[]>;
  tabs: string[];
}

const Cursor: React.FC<CursorProps> = ({
  position,
  hoveredTab,
  activeTab,
  tabsRef,
  tabs,
}) => {
  const targetPosition = React.useMemo(() => {
    if (hoveredTab) {
      const hoveredTabElement = tabsRef.current[tabs.indexOf(hoveredTab)];
      if (hoveredTabElement) {
        return {
          left: hoveredTabElement.offsetLeft,
          width: hoveredTabElement.offsetWidth,
        };
      }
    }
    return position;
  }, [hoveredTab, position, tabsRef, tabs]);

  return (
    <motion.li
      animate={{
        left: targetPosition.left,
        width: targetPosition.width,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute z-0 h-7 rounded-2xl bg-foreground text-white md:h-12"
    />
  );
};
