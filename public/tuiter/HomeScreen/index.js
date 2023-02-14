import NavigationSidebar from "../explore-a5/NavigationSidebar";
import PostList from "./PostList/PostList.js";
import WhoToFollowList from "../explore-a5/WhoToFollowList";

function homeComponent() {
    $('#wd-explore').append(`
       <h2>Home</h2>
    <div class="row mt-2">
       <div class="col-2 col-md-2 col-lg-1 col-xl-2 bg-warning">
            ${NavigationSidebar()}
       </div>
       <div class="col-10 col-lg-7 col-xl-6 bg-primary">
            ${PostList()}
       </div>
       <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 bg-danger">
            ${WhoToFollowList()}
       </div>
    </div>

   `);
}

$(homeComponent);