export const Fetch = async ({
    url,
    tags = []
}: FetchType) => {
    const data = await fetch('http://localhost:3000/api/' + url, { cache: 'force-cache', next: { tags } })
    return data.json()
}

interface FetchType {
    url: string
    tags: string[]
}