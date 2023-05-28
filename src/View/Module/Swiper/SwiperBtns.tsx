import React, { useMemo } from "react";
import { range } from 'ramda';
import './swiper.scss';

interface Props {
    changeSlideAction: (index: number) => any
    activeIndex: number
    elemesCount: number
}

export const SwiperBtns: React.FC<Props> = ({ changeSlideAction, elemesCount, activeIndex }) => {
    return useMemo(() => (
        <div className="swiper-btns">
            {
                range(0, elemesCount).map((i) => (
                    <button 
                        key={i + 1}
                        onClick={() => changeSlideAction(i)}>
                            {i + 1}
                    </button>
                ))
            }
        </div>
    ), [activeIndex])
}