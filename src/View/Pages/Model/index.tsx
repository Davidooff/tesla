import { useParams } from "react-router-dom";
import Product, { ProductPresentProps } from "../../Sections/ProductPresent";
import "./model.scss";
import Future from "../../Sections/Future";
import ImgAndDesc from "../../Sections/ImgAndDesc";
import PromoText from "../../Sections/PromoText";
import PromoImage from "../../Sections/PromoImage";

const data = [
    {
        productPresent: {
            title: "Halo",
            under_title: "Wazap",
            badges: [
                {
                    title: "378",
                    after_title: "mans",
                    under_title: "was in u're mums mause",
                },
                {
                    title: "Ya bi trubku",
                    after_title: "Kuril",
                    under_title: "Eslib bil mariacom",
                },
            ],
            btns: [
                {
                    type: "a-btn-white",
                    title: "Moriak",
                },
                {
                    type: "a-btn-black",
                    title: "Ne moriak",
                },
            ],
            background:
                "url(https://digitalassets.tesla.com/tesla-contents/image/upload/h_2560,w_4096,c_fit,f_auto,q_auto:best/Homepage-Model-3-Desktop-LHD)",
        },
    },
    {
        future: {
            title: "Halo",
            url: "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-S-Interior-Hero-Desktop-LHD",
        },
    },
    {
        imgAndDescription: {
            data: [
                {
                    title: "Stay Connected",
                    desc: "Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging. lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
                    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-S-Interior-Hero-Desktop-LHD",
                },
                {
                    title: "HStay Connectedalo",
                    desc: "lorem ipsum dolor Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.",
                    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-S-Interior-Hero-Desktop-LHD",
                },
                {
                    title: "Stay Connected",
                    desc: "Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.",
                    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-S-Interior-Hero-Desktop-LHD",
                },
            ],
        },
    },
    {
        promoText: {
            title: "Stay Connected",
            sub_title: "Plaid",
            btns: [
                {
                    title: "Stay Connected",
                    type: "a-btn-white",
                },
                {
                    title: "Stay Disconnected",
                    type: "a-btn-black",
                },
            ],
            promo_text:
                "Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation. Chat with a Tesla Advisor to learn more about Model S or schedule a demo drive today. ",
        },
    },
    {
        promoImage: {
            title: "Stay Connected",
            sub_title: "Plaid",
            btns: [
                {
                    title: "Stay Connected",
                    type: "a-btn-white",
                },
                {
                    title: "Stay Disconnected",
                    type: "a-btn-black",
                },
            ],
            promo_img:
                "https://digitalassets.tesla.com/tesla-contents/image/upload/h_998,w_1800,c_fit,f_auto,q_auto:best/Model-S-Order-Hero-Desktop-Mobile-LHD",
        },
    },
];

function Model() {
    const { id } = useParams();

    return (
        <>
            {data.map((section, key) => {
                return (
                    <>
                        {section.productPresent && (
                            <Product key={key} {...section.productPresent} />
                        )}
                        {section.future && <Future {...section.future} />}
                        {section.imgAndDescription && (
                            <ImgAndDesc {...section.imgAndDescription} />
                        )}
                        {section.promoText && (
                            <PromoText {...section.promoText} />
                        )}
                        {section.promoImage && (
                            <PromoImage {...section.promoImage} />
                        )}
                    </>
                );
            })}
        </>
    );
}

export default Model;
