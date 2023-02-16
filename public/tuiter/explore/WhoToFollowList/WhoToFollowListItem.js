const WhoToFollowListItem = (item) => {
    return(`
        <li class="list-group-item">
            <div class="d-flex">
                <div>
                    <img class="wd-follower-square-photo" src="../img/${item.avatarIcon}" alt="java">
                </div>
                <div class="ms-3">
                    <div class="row-1 wd-follow-name">
                        <a href="#" style="text-decoration: none; color: white;">${item.userName} <i class="fa-solid fa-circle-check"></i></a>
                    </div>
                    <div class="row-1 wd-follow-id">@${item.handle}</div>
                </div>
                <div class="ms-auto wd-follow-button-row">
                    <button type="button" class="btn btn-primary wd-follow-button-override">Follow</button>
                </div>
            </div>
        </li>
    `);
}

export default WhoToFollowListItem;