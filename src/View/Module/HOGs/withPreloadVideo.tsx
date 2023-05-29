import { preloadVideo } from "@remotion/preload";
import React, { useEffect } from "react";

type ComponentUrls = string[];

const withPreloadVideo = <P extends object>(Component: React.ComponentType<P>, urls: ComponentUrls) => (props: any) => {
    useEffect(() => {
        for (const url of urls) {
            preloadVideo(url);
        }
    }, []);
    return (
        <Component {...props} />
    )
}
