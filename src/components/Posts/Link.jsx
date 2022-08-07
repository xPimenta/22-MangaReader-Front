import { LinkWrapper } from "./styles";

export default function Link({ linkData }) {
  const { image, title, description, url } = linkData;

  const openInNewTab = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <LinkWrapper onClick={openInNewTab}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <h3>{url}</h3>
      </div>
      <img src={image} alt="thumbnail" />
    </LinkWrapper>
  );
}
