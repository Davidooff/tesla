import { useParams } from "react-router-dom";
import Product, { ProductPresentProps } from "../../Sections/ProductPresent";
import "./model.scss";

const data = [
    {
        productPresent: {
            title: "Halo",
            under_title: "Wazap",
            badges: [
                {
                    title: "Ya bi trubku",
                    after_title: "Kuril",
                    under_title: "Eslib bil mariacom",
                },
                {
                    title: "Ya bi trubku",
                    after_title: "Kuril",
                    under_title: "Eslib bil mariacom",
                },
            ],
            btns: [
                {
                    type: "a-white-btn",
                    title: "Moriak",
                },
                {
                    type: "a-black-btn",
                    title: "Ne moriak",
                },
            ],
            background:
                "url(https://digitalassets.tesla.com/tesla-contents/image/upload/h_2560,w_4096,c_fit,f_auto,q_auto:best/Homepage-Model-3-Desktop-LHD)",
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
                    </>
                );
            })}
        </>
    );
}

export default Model;
