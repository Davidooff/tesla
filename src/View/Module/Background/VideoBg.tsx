import React, { useEffect, useMemo, useRef } from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  url: string;
  startTime?: number;
  callBackOnEnd?: () => any;
}

export const VideoBg: React.FC<Props> = ({ url, children, startTime, callBackOnEnd }) => {
  const videoRef = useRef();  

  useEffect(
    () => {
      (videoRef.current as any).addEventListener("ended", callBackOnEnd);
    },
    [url]
  );

  useEffect(() => {
    (videoRef.current as any).load();
    (videoRef as any).current.currentTime = startTime || 0;
  }, [url]);

  return useMemo(
    () => (
      <section>
        <video
          autoPlay
          muted
          id="myVideo"
          ref={videoRef as any}
          preload="auto"
        >
          <source src={url} type="video/mp4" />
          {children}
        </video>
      </section>
    ),
    [url]
  );
};
