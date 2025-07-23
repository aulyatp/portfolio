import "./Media.css";

interface MediaProps {
  src?: string;
  alt?: string;
  isVideo?: boolean;
  children?: React.ReactNode;
}

export default function Media({ src, alt = "", isVideo = false, children }: MediaProps) {
  return <div className="media">{children ? children : isVideo ? <video src={src} controls className="media__media" /> : <img src={src} alt={alt} className="media-element" />}</div>;
}
