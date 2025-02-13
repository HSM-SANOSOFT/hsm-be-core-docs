import { Injectable } from '@nestjs/common';

@Injectable()
export class DocGenHasService {
    async generateFile() {
        console.log('Generating file...');
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async operation
        return 'File generated';
    }
}