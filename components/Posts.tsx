import { posts } from "../data";
import { Post } from "./Post";

export function Posts(){
const postDiv = posts.map((post) => <Post post={post}/>);
return <div>
    {postDiv}
</div>
}