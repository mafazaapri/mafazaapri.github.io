import React from "react";
import { Helmet } from "react-helmet";

export default function PageMetadata(props) {
  return (
    <Helmet>
      <title>{props.title} - Mafaza Apri</title>
      <meta name="description" content={props.desc} />
    </Helmet>
  );
}
