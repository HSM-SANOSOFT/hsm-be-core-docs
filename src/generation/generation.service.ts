import { HttpStatus, Inject, Injectable, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import Handlebars from 'handlebars';
import { DocumentTemplates } from 'src/type';
import { createDocumento } from 'src/type/create_documento.type';
import wkhtmltopdf from 'wkhtmltopdf';

@Injectable()
export class GenerationService {
  private readonly logger = new Logger(GenerationService.name);
  constructor(
    @Inject('DocumentTemplates') private templates: DocumentTemplates,
  ) {}
  async createDocumento(data: createDocumento): Promise<Buffer> {
    const { type, payload } = data;

    const template = this.templates[type];
    if (!template) {
      throw new RpcException({
        status: HttpStatus.BAD_REQUEST,
        message: `Template for type ${type} not found`,
      });
    }

    this.logger.debug(`template: ${template}`);

    try {
      const compiledTemplate = Handlebars.compile(template);
      const html = compiledTemplate(payload);

      this.logger.debug(`html: ${html}`);

      const buffer = await new Promise<Buffer>((resolve, reject) => {
        const chunks: Buffer[] = [];
        wkhtmltopdf(html, {
          pageSize: 'A4',
          marginTop: '1cm',
          marginBottom: '1cm',
          marginLeft: '1cm',
          marginRight: '1cm',
          dpi: 100,
        })
          .on('error', reject)
          .on('data', (chunk: Buffer) => chunks.push(chunk))
          .on('end', () => resolve(Buffer.concat(chunks)));
      });
      this.logger.debug(`buffer: ${buffer.length} bytes`);

      if (!buffer || buffer.length === 0) {
        throw new RpcException({
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'PDF buffer is empty',
        });
      }
      return buffer;
    } catch (error) {
      if (error instanceof RpcException) {
        throw error;
      } else {
        throw new RpcException({
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Error generating document',
        });
      }
    }
  }
}
