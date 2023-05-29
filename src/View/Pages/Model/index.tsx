import { useParams } from "react-router-dom";
import Product, { ProductPresentProps } from "../../Sections/ProductPresent";
import "./model.scss";
import Future from "../../Sections/Future";

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
                    </>
                );
            })}
        </>
    );
}

export default Model;
