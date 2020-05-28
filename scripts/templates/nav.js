// Consider: This will not work in internet explorer.
var date = "5-27-2020"

var INTERNAL = INTERNAL || (function() {
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
                                <img src="${_args[1]}img/AnimeAddicts-Logo.jpg" alt="LOGO">
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
                            <li><a href="#">EVENTS</a></li>
                            <li><a href="#">NEWS</a></li>
                            <li><a href="#">WIKI</a></li>
                        </ul><!-- nav-list -->  
                    </div><!-- container -->
                </nav><!-- nav -->
            `);
        }
    }
}());