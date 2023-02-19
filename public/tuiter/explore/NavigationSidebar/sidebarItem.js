const sidebarItem = (item, active) => {
    return(`
     <a class="list-group-item list-group-item-action ${active === item.name ? 'active' : ''}" 
        style="display:flex; align-items:center;"
        href="${item.hyperlink}">
       <i class="${item.icon} fa-fw"></i>
       <span class="wd-nav-bar-text d-none d-xl-inline">${item.name}</span>
     </a>
 `);
}
export default sidebarItem;