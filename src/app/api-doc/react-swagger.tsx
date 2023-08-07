"use client";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import React from "react";

interface ReactSwaggerProps {
  spec: Record<string, any>;
}

const ReactSwagger = ({ spec }: ReactSwaggerProps): JSX.Element => {
  return <SwaggerUI spec={spec} />;
};

export default ReactSwagger;
