'use server'
import { revalidateTag } from "next/cache"

export const revalidate=async()=>{
    revalidateTag('blogs')
}