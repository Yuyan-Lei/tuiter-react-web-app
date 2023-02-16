import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./Posts.js";

const PostSummaryList = () => {
    return(`
        <div class="mt-2 list-group">
            ${
                posts.map(item => {
                    return (PostSummaryItem(item));
                }).join(' ')
            }
        </div>
    `)
};

export default PostSummaryList;