import { useRouter } from "next/router";

export default () => {
    const router = useRouter()

    return (
        <>
            <div className="container">
                <div className="row">
                    <h2>Blog post</h2>
                    <p>Post id: {router.query.id}</p>
                </div>
            </div>
        </>
    )
};