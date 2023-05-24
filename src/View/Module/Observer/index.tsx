import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

const Observer = ({ children }: { children: ReactNode }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div ref={ref} className={inView ? "show hidden" : "hidden"}>
      {children}
    </div>
  );
};

export default Observer;
