"use server"

import { client } from "@/sanity/lib/client";


// -------------------------------------------------------create
export async function createComment(commentData: any){
    const res = await client.create(commentData);
}