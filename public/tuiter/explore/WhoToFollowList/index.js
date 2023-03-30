import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
               <li class="list-group-item" style="font-weight: 800; font-size: 20px">
                  Who to follow
               </li>
           <!-- continue here -->
                ${
                    who.map(item => {
                        return (WhoToFollowListItem(item));
                    }).join(' ')
                }
           </ul>
`); }

export default WhoToFollowList;