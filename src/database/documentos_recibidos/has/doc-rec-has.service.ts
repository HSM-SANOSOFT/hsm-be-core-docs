import { Injectable } from "@nestjs/common";
import { Express } from "express";

@Injectable()
export class DocRecHasService {
    async receiveFile(file: Express.Multer.File): Promise<any> {
        if (!file) {
            throw new Error("No file provided");
        }

        return {
            originalname: file.originalname,
            mimetype: file.mimetype,
            size: file.size,
            encoding: file.encoding,
            destination: file.destination,
            filename: file.filename,
            path: file.path,
        };
    }
}
