import { useState } from "react";
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";

const PostForm = ({ create }) => {
    const [post, setPost] = useState({ title: "", body: "" });

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now(),
        };
        create(newPost);
        setPost({ title: "", body: "" });
    };

    return (
        <form>
            <MyInput
                type="text"
                placeholder="Title"
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
            <MyInput
                type="text"
                placeholder="Description"
                value={post.body}
                onChange={(e) => setPost({ ...post, body: e.target.value })}
            />
            <MyButton onClick={addNewPost}>Create</MyButton>
        </form>
    );
};

export default PostForm;
