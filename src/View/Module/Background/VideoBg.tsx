import React, { useMemo } from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  url: string;
}

export const VideoBg: React.FC<Props> = ({ url, children }) => {
  return useMemo(
    () => (
      <section>
        <video autoPlay muted loop id="myVideo">
          <source src={url} type="video/mp4" />
          {children}
        </video>
      </section>
    ),
    [url]
  );
};
