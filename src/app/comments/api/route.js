export async function GET (){
    return Response.json({
        comment
    })
}

export async function POST (request){
    const newComment = await request.json();
    comment.push({
        id: comment.length + 1,
        title: newComment.title,
    })
    return Response.json({
        comment,
        massage : 'comment added successfully',
    })
}


const comment = [
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