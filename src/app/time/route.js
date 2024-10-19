export async function GET() {
    return Response.json({
        currentDate : new Date().toLocaleDateString(),
    })
}