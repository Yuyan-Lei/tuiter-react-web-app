const PostSummaryItem = (item) => {
    return (`
        <div class="wd-trending-post-container list-group-item">
            <div class="wd-float-left wd-trending-post-text-container">
                <!-- Grey title  -->
                <div class="wd-trending-grey-small-text">${item.topic}</div>
                <!-- Author and Date  -->
                <div class="wd-trending-author-center">
                    <span class="wd-trending-author-bold-white-text">${item.userName}</span>
                    <i class="fa-solid fa-circle-check" style="color: white"></i>
                    <span class="wd-trending-date-grey"> - ${item.time}</span>
                </div>
                <!-- Article Title  -->
                <div class="wd-trending-title">${item.title}</div>
            </div>
            <!-- Right Picture  -->
            <div class="wd-float-right ms-auto">
                <img class="wd-round-square-photo"
                     src="${item.image}">
            </div>
            <div class="wd-float-done"></div>
        </div>
    `)
}

export default PostSummaryItem;