import "./promoImage.scss";

interface Props {
    title: string;
    sub_title: string;
    btns: {
        title: string;
        type: string;
    }[];
    promo_img: string;
}

function PromoText(props: Props) {
    return (
        <section className="promo-image">
            <aside className="left-aside">
                <h2>{props.sub_title}</h2>
                <h1>{props.title}</h1>
                <div className="btns">
                    {props.btns.map((btn, index) => {
                        return (
                            <a className={btn.type}>
                                <span>{btn.title}</span>
                            </a>
                        );
                    })}
                </div>
            </aside>
            <aside className="right-aside">
                <img src={props.promo_img} alt="" />
            </aside>
        </section>
    );
}

export default PromoText;
