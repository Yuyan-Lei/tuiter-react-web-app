const PostTop = (item) => {
    return (`
        <!--Section C-->
        <div class="wd-bm-C-container">
            <div class="wd-float-left">
                <span class="wd-bm-C-author">${item.author}</span>
                <span class="wd-bm-C-handle">@${item.id} · ${item.time}</span>
            </div>
            <div class="wd-float-right">
                <img
                        src="../explore/imgs/more-grey.png"
                        class="wd-more-button"
                >
            </div>
            <div class="wd-float-done"></div>
        </div>
    
        <!--Section D-->
        <div class="wd-bm-D-container">
            ${item.post}
        </div>
    `);
}

const PostContent = (item) => {
    if (item.articleTitle === ''){
        return (`
            <div class="wd-bm-EtoF-container">
                <img
                        class="img-fluid"
                        src="${item.img}">
            </div>
        `)
    } else {
        return (`
            <div class="wd-bm-EtoF-container">
                <!--photo-->
                <img
                        class="img-fluid"
                        src="${item.img}">
        
                <!--article-->
                <div class="wd-bm-F-container">
                    <span class="wd-bm-F-title">${item.articleTitle}</span>
                    <div class="wd-bm-F-grey-text">
                        <span>${item.articleContent}</span><br/>
                        <img class="wd-bm-F-link-icon" src="../img/link.png">
                        <span>${item.articleUrlText}</span>
                    </div>
                </div>
            </div>
        `)
    }
}

const PostBottom = (item) => {
    return (`
        <div class="wd-bm-G-container">
            <div class="wd-bm-G-box">
                <a href="#" class="wd-bm-G-hyperlink-container">
                    <img class="wd-bm-G-icon" src="../img/send-message.png">
                    <span class="wd-bm-G-text wd-color-grey">${item.comments}</span>
                </a>
            </div>

            <div class="wd-bm-G-box">
                <a href="#" class="wd-bm-G-hyperlink-container">
                    <img class="wd-bm-G-icon" src="../img/retweet.png">
                    <span class="wd-bm-G-text wd-color-grey">${item.retweet}</span>
                </a>
            </div>

            <div class="wd-bm-G-box">
                <a href="#" class="wd-bm-G-hyperlink-container">
                    <img class="wd-bm-G-icon" src="../img/heart.png">
                    <span class="wd-bm-G-text wd-color-grey">${item.likes}</span>
                </a>
            </div>
            
            <div class="wd-bm-G-box">
                <a href="#" class="wd-bm-G-hyperlink-container">
                    <img class="wd-bm-G-icon" src="../img/share.png">
                </a>
            </div>
            
            <div class="wd-bm-G-box">
            </div>
        </div>
    `)
}

const PostItem = (item) => {
    return (`
        <!--Section B to G-->
        <div class="wd-bm-BtoG-container wd-bm-BtoG-border-bottom">
            <!--Section B-->
            <div class="wd-bm-B-container wd-float-left">
                <img
                        class="wd-bm-B-avatar-photo"
                        src="${item.avatar}">
            </div>
    
            <div class="wd-float-right">
                ${PostTop(item)} 
                ${PostContent(item)} 
                ${PostBottom(item)} 
            </div>
            <div class="wd-float-done"></div>
        </div>
    `);
}

export default PostItem;