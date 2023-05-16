import { Fragment, FunctionComponent, ReactNode } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { appUrl } from "../../utils/constants";

type ComponentProps = {
  children?: ReactNode;
  host?: string | null;
  title?: string;
  description?: string;
  image?: string;
};

const HeadTags: FunctionComponent<ComponentProps> = ({
  children,
  host,
  title,
  description,
  image,
}) => {
  const { pathname } = useRouter();
  const metaHost = host || appUrl;
  const metaTitle = title || "My company.com";
  const metaDescription = description || "";
  const metaImageUrl = image || "";
  const metaImageType = image || "image/jpeg";
  const metaImageRatios = [
    { width: 500, height: 267 },
    { width: 300, height: 160 },
    { width: 100, height: 53 },
    { width: 750, height: 400 },
    { width: 1000, height: 533 },
  ];
  return (
    <Head>
      {/* Google recommends using Unicode/UTF‑8 where possible */}
      <meta charSet="UTF-8" />
      {/* mobile-friendly */}
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no"
      />
      {/* Title tag */}
      <title>{metaTitle}</title>
      {/* Description shown on search pages */}
      <meta name="description" content={metaDescription} />
      {/* Asking robots to index pages and crawls to subpages */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <link rel="shortcut icon" type="image/x-icon" href="" />
      {/* Open Graph start */}
      {host ? <link rel="canonical" href={`https://${metaHost}`} /> : null}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:type" content="website" />
      {host ? (
        <meta property="og:url" content={`https://${metaHost}${pathname}`} />
      ) : null}
      <meta property="og:description" content={metaDescription} />
      <meta property="og:determiner" content="the" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:site_name" content="mycompany" />
      {metaImageRatios.map(({ width, height }, index) => {
        return (
          <Fragment key={`${index}_${width}_${height}_${index}`}>
            <meta
              property="og:image"
              content={`${metaImageUrl}?format=${width}w`}
            />
            <meta property="og:image:width" content={`${width}`} />
            <meta property="og:image:height" content={`${height}`} />
          </Fragment>
        );
      })}
      <meta property="og:image:type" content={metaImageType} />
      <meta property="og:image:alt" content="mycompany banner image" />
      {/* Open Graph end */}
      {/* Twitter card start */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:image" content={`${metaImageUrl}?format=300w`} />
      <meta property="twitter:image:alt" content=" mycompany banner image" />
      {/* Twitter card end */}

      {/* Rest of the child elements according to page */}
      {children}
    </Head>
  );
};

export default HeadTags;
