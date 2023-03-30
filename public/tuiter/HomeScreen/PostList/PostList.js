import posts from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return (`
        <div class="wd-bm-overall-container">
            ${
                posts.map(item => {
                    return (PostItem(item));
                }).join(' ')
            }
        </div>
    `);
}

export default PostList;