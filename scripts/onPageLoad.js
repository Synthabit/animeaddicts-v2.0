window.addEventListener("load", function() {
    renderSiteBodyOnLoad();
});

function renderSiteBodyOnLoad() {
    Object.assign(document.body.style, {opacity: "100%"});
}