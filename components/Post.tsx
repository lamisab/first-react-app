import { IWolf } from "../data"

interface PostProp{
    post: IWolf
}

    export function Post({post}: PostProp){
return <div className="post">
    <h2>{post.name}</h2>
    <p>{post.type}</p>
    <img src={post.imageUrl} alt="" />
    <p>{post.price}</p>
    <p>{post.ownername}</p>

</div>
}