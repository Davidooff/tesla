import { useEffect, useState } from "react";
import TextLayout from "../Module/TextLayout";
import { ImageBg } from "../Module/Background/ImageBg";
import { VideoBg } from "../Module/Background/VideoBg";
import "./default-styles.scss";

export interface DataElement {
  title: string;
  description: string;
  btns: { title: string; link: string; type: string }[];
}

interface ViewEl {
  data: DataElement;
  color: string;
  video?: string;
  img?: string;
}

const data: ViewEl[] = [
  {
    data: {
      title: "Model S",
      description: "Plaid",
      btns: [{ title: "Order Now", link: "/model-s", type: "empty-a-btn" }],
    },
    color: "white",
    video:
      "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Test_Drive-NA-Desktop.mp4",
  },
  {
    data: {
      title: "Model X",
      description: "Plaid",
      btns: [
        { title: "Order Now", link: "/model-s", type: "a-btn-gray" },
        { title: "Order Now", link: "/model-s", type: "a-btn-black" },
      ],
    },
    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/h_2560,w_4096,c_fit,f_auto,q_auto:best/Homepage-Model-3-Desktop-LHD",
    color: "black",
  },
  {
    data: {
      title: "Model X",
      description: "Plaid",
      btns: [
        { title: "Order Now", link: "/model-s", type: "a-btn-gray" },
        { title: "Order Now", link: "/model-s", type: "a-btn-black" },
      ],
    },
    color: "black",
    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/h_2400,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-Y-Global-Desktop",
  },
];

function Mian() {
  const [content, setContent] = useState(data[0]);
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    window.onscroll = () => {
      let a = window.scrollY / window.innerHeight;
      let scrol = a % 1;
      let nextOpacity = (scrol * 2 - 1) ** 2;
      setOpacity(nextOpacity);
      setContent(data[Math.round(a)]);
    };
  }, []);

  return (
    <>
      <div className="content" style={{ opacity, color: content.color }}>
        <TextLayout data={content.data} />
      </div>
      {data.map((el) => {
        return (
          <>
            {el.img && <ImageBg url={el.img} />}
            {el.video && <VideoBg url={el.video} />}
          </>
        );
      })}
    </>
  );
}
export default Mian;