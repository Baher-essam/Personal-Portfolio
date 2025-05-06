import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const CanonicalHead = () => {
  const { pathname } = useLocation();
  const canonicalUrl = `https://baheressam.com${pathname}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default CanonicalHead;