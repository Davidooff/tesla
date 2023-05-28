import "./default-styles.scss";
import { VideoBg } from "../Module/Background/VideoBg";
import { Routes, Route } from "react-router-dom";
import { Footer } from "../Sections/Footer";
import { Swiper } from "../Module/Swiper";
import Model from "./Model";
import Main from "./Main/index";

function Mian() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/model/:id" element={<Model />} />
                <Route
                    path="/2"
                    element={
                        <Swiper>
                            <VideoBg
                                url="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Test_Drive-NA-Desktop.mp4"
                                startTime={0}
                            />
                            <VideoBg
                                url="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-X-Interior-Carousel-1-Cinematic-Display-Desktop-Global.mp4"
                                startTime={0}
                            />
                            <VideoBg
                                url="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Range_Desktop-mp4.mp4"
                                startTime={0}
                            />
                            <VideoBg
                                url="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-X-Interior-Carousel-5-Console-Grade-Gaming-Desktop-Global.mp4"
                                startTime={0}
                            />
                        </Swiper>
                    }
                />
            </Routes>
            <Footer />
        </>
    );
}
export default Mian;
