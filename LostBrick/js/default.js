function fullscreen() {

    var ViewManagement = Windows.UI.ViewManagement;
    var ApplicationViewWindowingMode = ViewManagement.ApplicationViewWindowingMode;
    var ApplicationView = ViewManagement.ApplicationView;

    //ApplicationView.preferredLaunchWindowingMode == ApplicationViewWindowingMode.fullScreen;

    //if (!applicationView.isFullScreen) {
        //var applicationView = Windows.UI.ViewManagement.ApplicationView;

    ApplicationViewWindowingMode.fullScreen; //: ApplicationViewWindowingMode.auto;
    //}
}