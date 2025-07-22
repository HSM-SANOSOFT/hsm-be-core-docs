import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import Handlebars from 'handlebars';
import { DocumentTemplates } from 'src/type';
import { createDocumento } from 'src/type/create_documento.type';
import wkhtmltopdf from 'wkhtmltopdf';

@Injectable()
export class GenerationService {
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

    try {
      const compiledTemplate = Handlebars.compile(template);
      const html = compiledTemplate(payload);
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
      return buffer;
    } catch {
      throw new RpcException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Error generating document',
      });
    }
  }
}
