export async function GET() {
    const companies = [
        {
            companyId: 1,
            companyName: "Test Company 1",
            companyImage: "/next.svg"
        },
        {
            companyId: 2,
            companyName: "Test Company 2",
            companyImage: "/next.svg"
        },
        {
            companyId: 3,
            companyName: "Test Company 3",
            companyImage: "/next.svg"
        },
        {
            companyId: 4,
            companyName: "Test Company 4",
            companyImage: "/next.svg"
        },
        {
            companyId: 5,
            companyName: "Test Company 5",
            companyImage: "/next.svg"
        },
        {
            companyId: 6,
            companyName: "Test Company 6",
            companyImage: "/next.svg"
        },
        {
            companyId: 7,
            companyName: "Test Company 7",
            companyImage: "/next.svg"
        },
        {
            companyId: 8,
            companyName: "Test Company 8",
            companyImage: "/next.svg"
        },
        {
            companyId: 9,
            companyName: "Test Company 9",
            companyImage: "/next.svg"
        },
        {
            companyId: 10,
            companyName: "Test Company 10",
            companyImage: "/next.svg"
        }
    ];

    return Response.json(companies);
}