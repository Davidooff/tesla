import Observer from "../../Module/Observer";
import "./imgAndDesc.scss";

interface Props {
    data: {
        img: string;
        title: string;
        desc: string;
    }[];
}

function ImgAndDesc(props: Props) {
    return (
        <section className="img-and-description">
            <div className="content">
                {props.data.map((item, index) => {
                    return (
                        <Observer>
                            <div
                                key={index}
                                className={
                                    index % 2 == 0
                                        ? "img-and-description_el reverse"
                                        : "img-and-description_el"
                                }
                            >
                                <img src={item.img} alt={item.title} />
                                <div>
                                    <h2>{item.title}</h2>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </Observer>
                    );
                })}
            </div>
        </section>
    );
}

export default ImgAndDesc;
