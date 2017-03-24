angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("anon/home.html",
    "<div class=\"webcam\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-6\" id=\"forBt\">\n" +
    "                <span class=\"input-group-btn\">\n" +
    "        <a href=\"/#!/search\"><button id=\"research\" type=\"button\" class=\"btn btn-success\">SEARCH!</button></a>  \n" +
    "        </span>\n" +
    "            </div>\n" +
    "            <!-- /input-group -->\n" +
    "        </div>\n" +
    "        <!-- /.col-lg-6 -->\n" +
    "    </div>\n" +
    "    <!-- /.row -->\n" +
    "\n" +
    "    <div ng-repeat=\"web in webcam.webcams\">\n" +
    "        <div class=\"container-fluid-camm\">\n" +
    "\n" +
    "\n" +
    "            <div class=\"col-xs-6 separation\">\n" +
    "\n" +
    "                <a name=\"lkr-timelapse-player\" data-id=\"{{web.id}}\" data-play=\"day\" href=\"//lookr.com/{{web.id}}\" target=\"_blank\">{{web.id}}</a>\n" +
    "                <script async type=\"text/javascript\" src=\"//api.lookr.com/embed/script/timelapse.js\"></script>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/navbar.html",
    "<nav class=\"navbar navbar-default\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\"></a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"navbar\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.home\">Home</a></li>\n" +
    "\n" +
    "            </ul>\n" +
    "            <!-- <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"anon.login\" ng-hide=\"auth.isAuthenticated()\">Login</a></li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"anon.register\" ng-hide=\"auth.isAuthenticated()\">Register</a></li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"user.dashboard\" ng-show=\"auth.isAuthenticated()\">Dashboard</a></li>\n" +
    "                    <li><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Logout</a></li>\n" +
    "                </li>\n" +
    "            </ul> -->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

  $templateCache.put("anon/register.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"register()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\">Register</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/search.html",
    "<div class=\"webcam\">\n" +
    "\n" +
    "  <div class=\"container\" id=\"forBt2\">\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-10\" id=\"ress\">\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-btn\">\n" +
    "                      <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\" ng-model=\"query\">\n" +
    "                      <button id=\"btp2\" type=\"button\" class=\"btn btn-success\" ng-click=\"search()\">Success</button>\n" +
    "                      </span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "                      <div ng-repeat=\"web in webcams\">\n" +
    "\n" +
    "\n" +
    "                        <div class=\"col-xs-5\">\n" +
    "\n" +
    "                            <a name=\"lkr-timelapse-player\" data-id=\"{{web.id}}\" data-play=\"day\" href=\"//lookr.com/{{web.id}}\" target=\"_blank\">{{web.id}}</a>\n" +
    "                            <script async type=\"text/javascript\" src=\"//api.lookr.com/embed/script/timelapse.js\"></script>\n" +
    "\n" +
    "\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            </div>\n"
  );

  $templateCache.put("user/dashboard.html",
    "Dashboard de {{user.email}}\n"
  );

  $templateCache.put("user/navbar.html",
    "<nav class=\"navbar navbar-default\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\"></a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"navbar\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.dashboard\" ng-show=\"auth.isAuthenticated()\">Dashboard</a></li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.profile\" ng-show=\"auth.isAuthenticated()\">Profile</a></li>\n" +
    "\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.home\">Website</a></li>\n" +
    "                    <li><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Logout</a></li>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

  $templateCache.put("user/profile.html",
    "Profile de {{user.email}}\n"
  );

}]);
