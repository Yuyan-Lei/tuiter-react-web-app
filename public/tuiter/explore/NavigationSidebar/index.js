import sidebarItem from "./sidebarItem.js";
import items from "./items.js";

const NavigationSidebar = (active) => {
    return(`
   <div class="list-group flex-column">
     <a class="list-group-item list-group-item-action" href="/">
       <i class="fab fa-twitter"></i>
     </a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
       ${
            items.map(item => {
                return (sidebarItem(item, active));
            }).join(' ')
        }
   </div>
   <a class="btn btn-primary wd-button-round-border mt-2"
       style="width: 100%;"
       href="tweet.html" role="button">
            Tweet
    </a>
 `);
}
export default NavigationSidebar;