import { Pinecone } from '@pinecone-database/pinecone'

let pinecone: Pinecone | null

export const getPinecone = async () => {
    if(!pinecone) {
        pinecone = new Pinecone({
            environment: process.env.PINECONE_ENVIRONMENT!,
            apiKey: process.env.PINECONE_API_KEY!
        })
    }
    return pinecone
}

export async function loadS3IntoPinecone(fileKey: string) {
    
}