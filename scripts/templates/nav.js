// Consider: This will not work in internet explorer.
var date = "6-7-2020 : 5"
var NAV = NAV || (function() {
    var _args = {}; // private
    return {
        init : function(Args) {
            _args = Args;
        },
        writeNav : function() {
            document.write(`
                <nav class="nav">
                    <div class="container">
                        <div class="brand">
                            <a href="${_args[0]}index.html">
                                <img src="${_args[1]}img/Anime_Addicts_Logo_Ken_Clean.png" alt="LOGO">
                            </a>
                            <!-- Remove this in production -->
                            <!-- v -->
                            <p id="prototype-notice">${date}</p>
                            <!-- ^ -->
                        </div>
                        <div id="nav-hamburger">             
                            <svg viewBox="0 0 100 100  " width="40" height="35">
                                <rect y="25"width="100" height="10" rx="0"></rect>
                                <rect y="50" width="100" height="10" rx="0"></rect>
                                <rect y="75" width="100" height="10" rx="0"></rect>
                            </svg>
                        </div>
                        <ul class="nav-list">
                            <li><a href="${_args[2]}anime-list.html">ANIME LIST</a></li>
                            <li><a href="${_args[2]}events.html">EVENTS</a></li>
                            <li><a href="${_args[2]}news.html">NEWS</a></li>
                            <li><a href="${_args[2]}gallery.html">GALLERY</a></li>
                            <li><a href="${_args[2]}members.html">MEMBERS</a></li>
                            <li><a href="${_args[2]}wiki.html">WIKI</a></li>
                        </ul><!-- nav-list -->  
                    </div><!-- container -->
                </nav><!-- nav -->
            `);
        }
    }
}());
