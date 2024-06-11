import cloudflareLoader from "@utils/imageLoader";

export default function Image({
  className,
  src,
  alt,
}: {
  className: string;
  src: string;
  alt?: string;
}) {
  if (import.meta.env.MODE === "production") {
    src = cloudflareLoader({ src, width: "auto" });
  }
  return (
    <>
      <img src={src} className={className} alt={alt ?? ""} />
    </>
  );
}
