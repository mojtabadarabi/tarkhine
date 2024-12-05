import { Fetch } from "."

export const getPosts = async () => {
    return Fetch({ tags: ['blogs'], url: 'blogs' })
}