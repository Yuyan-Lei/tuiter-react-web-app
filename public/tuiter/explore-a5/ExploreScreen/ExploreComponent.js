import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="row">
           <!-- search field and cog -->
           <div
                    class="px-2 pt-1 mb-2"
                    style="
                        display: flex;
                        align-items: center;">
                <!--    search bar input field  -->
                <div class="wd-search-bar wd-float-left">
                    <form style="display: flex; align-items: center; height: 100%">
                        <label for="search-bar"
                               style="display: flex; align-items: center;"
                        >
                        <i class="fa fa-search wd-search-bar-img"></i>
                        </label>
                        <input class="wd-search-bar-input wd-color-grey"
                            id="search-bar" type="text" placeholder="Search Twitter">
                    </form>
                </div>
                <!--    search bar settings icon  -->
                <a href="explore-settings.html" class="wd-float-right">
                    <i class="fa fa-gear fa-2xl"></i>
                </a>

                <div class="wd-float-done"></div>
            </div>
        </div>
        
        <ul class="nav mb-2 nav-tabs">
          <!-- tabs -->
          <li class="nav-item wd-nav-item-override-select">
            <a class="nav-link active wd-color-black" aria-current="page" href="for-you.html">For you</a>
          </li>
          <li class="nav-item wd-nav-item-override">
            <a class="nav-link" href="trending.html">Trending</a>
          </li>
          <li class="nav-item wd-nav-item-override">
            <a class="nav-link" href="news.html">News</a>
          </li>
          <li class="nav-item wd-nav-item-override">
            <a class="nav-link" href="sports.html">Sports</a>
          </li>
          <li class="nav-item wd-nav-item-override d-sm-none d-md-block">
            <a class="nav-link" href="entertainment.html">Entertainment</a>
          </li>
        </ul>
        
        <!-- image with overlaid text -->
        <div class="pt-2"></div>
            <div class="position-relative">
                <img src="../img/spacex.jpg" class="img-fluid" alt="...">
                <div class="position-absolute bottom-0 start-0 p-2"
                        style="
                    color: black;
                    font-size: 35px;
                    font-weight: 800;
                    font-family: system-ui;">SpaceX's Starship</div>
        </div> 
        
        ${PostSummaryList()}
    `);
}

export default ExploreComponent;
