import "./productPresent.scss";

export interface ProductPresentProps {
    title: string;
    under_title?: string;
    badges?: {
        title: string;
        after_title: string;
        under_title: string;
    }[];
    btns: {
        type: string;
        title: string;
    }[];
    background: string;
}

function Product(props: ProductPresentProps) {
    return (
        <section
            className="product-present"
            style={{ backgroundImage: props.background }}
        >
            <div>
                <h1 className="title">{props.title}</h1>
                {props.under_title && (
                    <h2 className="under_title">{props.under_title}</h2>
                )}
            </div>
            <div>
                <div className="badges">
                    {props.badges &&
                        props.badges.map((badge, index) => {
                            return (
                                <div key={index} className="badge">
                                    <div className="badge_title">
                                        {badge.title}{" "}
                                        <span>{badge.after_title}</span>
                                    </div>
                                    <div className="badge_under-title">
                                        {badge.under_title}
                                    </div>
                                </div>
                            );
                        })}
                </div>
                <div className="btns">
                    {props.btns &&
                        props.btns.map((btn, index) => {
                            return (
                                <a key={index} className={btn.type}>
                                    <span>{btn.title}</span>
                                </a>
                            );
                        })}
                </div>
            </div>
            <div className="gradient-line"></div>
        </section>
    );
}

export default Product;
