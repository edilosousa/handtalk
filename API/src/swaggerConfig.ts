import path from 'path';
import swaggerJSDoc, { Options } from 'swagger-jsdoc';

const options: Options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation Handtalk',
      version: '1.0.0',
      description: 'Documentação da API',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor local',
      },
    ],
  },
  apis: [path.resolve(__dirname, '../dist/controllers/*.js')], 
};

console.log(path.resolve(__dirname,'../dist/controllers/'))

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
