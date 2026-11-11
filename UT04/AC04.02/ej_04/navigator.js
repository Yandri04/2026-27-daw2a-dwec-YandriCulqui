let userOS = getOS();
let browserName = getBrowserName();
let browserVersion = getBrowserVersion();

if (browserVersion < 4 || browserName === "UNKNOWN" || userOS === "Win16") {
    alert("<H2>Sorry this browser version is not supported</H2>");
} else if (browserName === "NETSCAPE") {
    location.replace("NetscapePage.html");
} else {
    location.replace("MSIEPage.html");
}

function getBrowserName() {
    let lsBrowser = navigator.appName;
    if (lsBrowser.indexOf("Microsoft") >= 0) {
        lsBrowser = "MSIE";
    } else if (lsBrowser.indexOf("Netscape") >= 0) {
        lsBrowser = "NETSCAPE";
    } else {
        lsBrowser = "UNKNOWN";
    }
    return lsBrowser;
}

function getOS() {
    let userPlat = "unknown";
    let navInfo = navigator.userAgent;

    if ((navInfo.indexOf("windows NT") !== -1)
            || (navInfo.indexOf("windows 95") !== -1)
            || (navInfo.indexOf("windows 98") !== -1)
            || (navInfo.indexOf("WinNT") !== -1)
            || (navInfo.indexOf("Win95") !== -1)
            || (navInfo.indexOf("Win98") !== -1)) {
        userPlat = "Win32";
    } else if (navInfo.indexOf("Win16") !== -1) {
        userPlat = "Win16";
    }
    //En el año 98 Apple sacó Mac OS 8.5 que sólo funcionaba en PPC
    //PPC PowerPC es una arquitectura antigua de procesador
    else if (navInfo.indexOf("Macintosh") !== -1) {
        userPlat = "PPC";
    }
    //68K es una familia de procesadores antigua
    else if (navInfo.indexOf("68K") !== -1) {
        userPlat = "68K";
    }
    return userPlat;
}

function getBrowserVersion() {
    let findIndex;
    let browserVersion = 0;
    let browser = getBrowserName();

    if (browser === "MSIE") {
        browserVersion = navigator.userAgent;
        findIndex = browserVersion.indexOf(browser) + 5;
        browserVersion = parseInt(browserVersion.substring(findIndex, findIndex + 1));
    } else {
        browserVersion = parseInt(navigator.appVersion.substring(0, 1));
    }
    return browserVersion;
}