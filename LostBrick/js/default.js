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