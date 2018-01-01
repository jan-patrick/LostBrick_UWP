function fullscreentwo() {

    var ViewManagement = Windows.UI.ViewManagement;
    var ApplicationViewWindowingMode = ViewManagement.ApplicationViewWindowingMode;
    var ApplicationView = ViewManagement.ApplicationView;

    //ApplicationView.preferredLaunchWindowingMode == ApplicationViewWindowingMode.fullScreen;

    //if (!applicationView.isFullScreen) {
        //var applicationView = Windows.UI.ViewManagement.ApplicationView;

    ApplicationViewWindowingMode.fullScreen; //: ApplicationViewWindowingMode.auto;
    //}
}


function fullscreen()
{
    "use strict";

    var ViewManagement = Windows.UI.ViewManagement;
    var FullScreenSystemOverlayMode = ViewManagement.FullScreenSystemOverlayMode;
    var ApplicationView = ViewManagement.ApplicationView;

    var view = ApplicationView.getForCurrentView();
    if (view.isFullScreenMode) {
        view.exitFullScreenMode();
    } else {
        view.tryEnterFullScreenMode();
    }
}