import { Injectable } from '@nestjs/common';

@Injectable()
export class DocGenHasService {
    async generateFile() {
        await console.log('Generating file...');
        return 'File generated';
    }
}