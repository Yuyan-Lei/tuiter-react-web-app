import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./Posts.js";

const PostSummaryList = () => {
    return(`
        <div class="list-group">
            ${
                posts.map(item => {
                    return (PostSummaryItem(item));
                }).join(' ')
            }
        </div>
    `)
};

export default PostSummaryList;