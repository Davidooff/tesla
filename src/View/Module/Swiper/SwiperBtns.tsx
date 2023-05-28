import React, { useMemo } from "react";
import { range } from 'ramda';
import './swiper.scss';
import classNames from "classnames";

interface Props {
    changeSlideAction: (index: number) => any
    activeIndex: number
    elemesCount: number
}

export const SwiperBtns: React.FC<Props> = ({ changeSlideAction, elemesCount, activeIndex }) => {
    const leftPadding = activeIndex * 22;

    return useMemo(() => (
        <div className="swiper-btns">
            {
                range(0, elemesCount).map((i) => (
                    <button 
                        key={i + 1}
                        onClick={() => changeSlideAction(i)}
                        // className={classNames(
                        //     {
                        //         "swiper-btn-active": i === activeIndex
                        //     }
                        // )}
                    >
                    </button>
                ))
            }
            <button
              className="activator-btn"
              style={{
                position: 'absolute',
                top: '1.75px',
                left: `${leftPadding}px`
              }} 
            >

            </button>
        </div>
    ), [activeIndex])
}