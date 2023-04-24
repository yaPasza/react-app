import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchById(params.id);
        fetchComments(params.id);
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    <h1>
                        {post.id}. {post.title}
                    </h1>
                    <h3>{post.body}</h3>
                    <h1>Comments</h1>
                    {isComLoading ? (
                        <Loader />
                    ) : (
                        comments.map((comment) => {
                            <div>
                                <h1>{comment.name}</h1>
                                <h3>{comment.email}</h3>
                                <p>{comment.body}</p>
                            </div>;
                        })
                    )}
                </div>
            )}
        </>
    );
};

export default PostIdPage;
