import React from "react";
import "./Media.css";

interface MediaProps {
  src?: string;
  alt?: string;
  isVideo?: boolean;
  children?: React.ReactNode;
}

export default function Media({ src, alt = "", isVideo = false, children }: MediaProps) {
  const isIframeOrVideo = React.isValidElement(children) && (children.type === "iframe" || children.type === "video");

  const isImageGrid = Array.isArray(children) && children.every((child) => React.isValidElement(child));

  const mediaClass = isImageGrid ? "media media--grid" : "media";

  return (
    <div className={mediaClass}>
      {children ? isIframeOrVideo ? <div className="media__media">{children}</div> : children : isVideo ? <video src={src} controls className="media__media" /> : <img src={src} alt={alt} className="media-element" />}
    </div>
  );
}
