import { ImageBg } from "../../Module/Background/ImageBg";
import Observer from "../../Module/Observer";
import "./future.scss";

interface Props {
    title: string;
    url: string;
}

function Future(props: Props) {
    const { title, url } = props;
    return (
        <section className="future">
            <Observer>
                <h1 className="title">{title}</h1>
            </Observer>
            <div className="image-container">
                <div className="line-gradient"></div>
                <ImageBg url={url} />
            </div>
        </section>
    );
}

export default Future;
