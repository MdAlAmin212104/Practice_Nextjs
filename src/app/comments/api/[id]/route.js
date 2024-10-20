export async function PATCH(request, {params}){
    const body = await request.json()
    const index = comments.findIndex(c => c.id === parseInt(params.id))
    comments[index] = {
        title: body.title,
    }
    return Response.json({
        massage : 'comments updated',
        comments,
    })
}

const comments = [
    {
        id: 1,
        title: 'this is comment 1',
    },
    {
        id: 2,
        title: 'this is comment 2',
    },
    {
        id: 3,
        title: 'this is comment 3',
    },
    {
        id: 4,
        title: 'this is comment 4',
    },
]