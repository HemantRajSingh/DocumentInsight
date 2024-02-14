import {Pinecone} from "@pinecone-database/pinecone"
import { downloadFromS3 } from "./s3-server";

let pinecone: Pinecone | null = null;

export const getPinecone = async () => {
    if(!pinecone) {
        pinecone = new Pinecone({
            apiKey: process.env.PINECONE_API_KEY!
        })
    }
    return pinecone
}

export async function loadS3IntoPinecone(fileKey: string) {
    console.log('downloading S3 into file system')
    const file_name = await downloadFromS3(fileKey)

}