import { createSwaggerSpec } from "next-swagger-doc";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: "src/app/api", // define api folder under app folder
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Music app API docs NextJS",
        version: "1.0",
      },
      components: {
        securitySchemes: {
          BearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
        schemas: {
          Song: {
            type: "object",
            properties: {
              id: {
                type: "string",
              },
              name: {
                type: "string",
              },
              imageUrl: {
                type: "string",
              },
              lowUrl: {
                type: "string",
              },
              previewUrl: {
                type: "string",
              },
              artworkUrl100: {
                type: "string",
              },
              artworkUrl60: {
                type: "string",
              },
              artistName: {
                type: "string",
              },
              artistViewUrl: {
                type: "string",
              },
              collectionCensoredName: {
                type: "string",
              },
              collectionName: {
                type: "string",
              },
              collectionViewUrl: {
                type: "string",
              },
              country: {
                type: "string",
              },
              description: {
                type: "string",
              },
              primaryGenreName: {
                type: "string",
              },
              releaseDate: {
                type: "string",
              },
              trackName: {
                type: "string",
              },
              trackViewUrl: {
                type: "string",
              },
              artworkUrl10: {
                type: "string",
              },
              trackTimeMillis: {
                type: "integer",
                format: "int64",
              },
            },
          },
        },
      },
      security: [],
    },
  });
  return spec;
};
