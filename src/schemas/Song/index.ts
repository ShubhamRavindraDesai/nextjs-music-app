import swaggerJSDoc from "swagger-jsdoc";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Your API Documentation",
      version: "1.0.0",
      description: "API documentation for your project",
    },
  },
  apis: ["./pages/api/**/*.js"],
  components: {
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
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
