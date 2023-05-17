import { DataElement } from "../../Pages/Mian";

type Props = {
  data: DataElement;
};

function TextLayout({ data }: Props) {
  return (
    <>
      <div>
        <h2 className="title">{data.title}</h2>
        <span className="under-title">{data.description}</span>
      </div>
      <div className="btns">
        {data.btns.map((el) => {
          return (
            <a href={el.link} className={el.type}>
              <span>{el.title}</span>
            </a>
          );
        })}
      </div>
    </>
  );
}
export default TextLayout;
