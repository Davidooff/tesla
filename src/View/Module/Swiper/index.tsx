import React, { ReactElement, cloneElement, useCallback, useEffect, useRef, useState } from "react";
import { SwiperBtns } from "./SwiperBtns";

type ReactComponent = React.ReactNode;

interface SwiperComponent {
  videoTime: number;
  element: ReactComponent;
}

interface Props {
  children: ReactComponent[];
}

export const Swiper: React.FC<Props> = ({ children }) => {
  const [content, setContent] = useState<ReactComponent[]>(
      children
  );
  

  const [activeIndex, setIsActiveIndex] = useState<number>(0);

  const changeSlideAction = useCallback((slideIndex: number) => {
    setIsActiveIndex(slideIndex);
  }, [activeIndex]);

  const changeActiveIndexOnEnd = useCallback(() => {
    if (activeIndex === content.length - 1) {
      changeSlideAction(0);
    } else {
      changeSlideAction(activeIndex + 1);
    }
  }, [activeIndex]);

  return (
    <div>
      {cloneElement(content[activeIndex] as ReactElement, {
        callBackOnEnd: changeActiveIndexOnEnd,
      })}
      <SwiperBtns
        changeSlideAction={changeSlideAction}
        activeIndex={activeIndex}
        elemesCount={children.length}
      />
    </div>
  );
};
