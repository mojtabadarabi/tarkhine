import { GetRequestBody } from "@/utils/api";

export async function GET() {
    return Response.json(GetRequestBody({
        message: 'successfull', data: [
            {
                id: 0,
                title: 'Title1'
            },
            {
                id: 1,
                title: 'Title2'
            },
            {
                id: 2,
                title: 'Title3'
            },
            {
                id: 3,
                title: 'Title4'
            },
        ]
    }))
}