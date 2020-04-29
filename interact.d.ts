import { IExtensionContext, IErrorContext } from "./extensions";
import { IProtocolManager } from "./protocol-manager";

export interface IApplication {
    backButton?: JQuery;
    channelType: string;
    constants: any;
    extension: IExtensions;
    mPage?: JQuery;
    mode?: any;
    nextButton?: JQuery;
    options: IOptions;
    previousPage?: JQuery;
    protocolManager: IProtocolManager;
    translator: ITranslate;
    registerExtension($type$$: rendererEventTypeString, $fn$$: (ctx: IExtensionContext, page: JQuery) => JQuery): void;
    registerExtension($type$$: "loaded", $fn$$: (ctx: IExtensionContext, page: JQuery) => void): void;
    registerExtension($type$$: "onError", $fn$$: (ctx: IErrorContext) => void): void;
    changePage($target$$: any, $transition$$: any, $dir_direction$$: any, $addToPageContainer$$: any): void;
    checkForPendingPhotos(): any;
    closeSideController($page$$: any, $transitionType$$: any, $transitionDirection$$: any): void;
    fireClientEvent(navType$$2_page$$: any): void;
    gatherParams($params$$: any): any[];
    getAuthRedirectQuery(): any;
    getRenderer($type$$: any): any;
    getThemeImageByName($imageName$$: any): any;
    initUI($urlOptions$$: any, $data$$: any): any;
    isAuthenticatedSuccessfully($authQuery$$: any): any;
    isBackAvailable($page$$: any): any;
    isLoginRedirectFlow(): any;
    isNextAvailable($page$$: any): any;
    onNavigationBtnClicked($action$$: any, $page$$: any): any;
    performBackToCoverApp(): any;
    performClientActions($clientActions$$: any): any;
    performRestart(): any;
    registerEvent($type$$: string, $fn$$: any): any;
    renderPage($page$$: any, $navType$$: any): any;
    saveAuthQuery($authQuery$$: any): void;
    showInteractionsList(): any;
    showLocalhostSettingError(): any;
    uploadPhotosAndPerformNavigation($photosToUpload$$: any): any;
}

type rendererEventTypeString = "pageRenderer" |
    "callbackPageRenderer" | "chatPageRenderer" |
    "contactUsPageRenderer" | "pageFooterRenderer" |
    "pageHeaderRenderer" | "pageRenderer" |
    "sendEmailPageRenderer" | "uploadPhotosMatrixRenderer";

interface IOptions {
    mode: string;
    appExtension: string;
    layout: any;
    connection: any;
    authentication: any;
    breadCrumbsSettings: any;
    autostart: any;
    events: any;
    allowStopAndSave: boolean;
    savedInteractionsTimeframe: number;
    savedInteractionsNumberLimit: number;
    limitOfRecentRoomsInList: number;
    theme: any;
    contactUsSettings: any;
    historySettings: any;
    extensionIds: string[];
    extensionsUrls: string[];
    numOfDaysLeft: number;
    deploymentType: string;
    allowJasExpirienceLaunchpad: boolean;
    allowCollaboration: boolean;
    trial: boolean;
}

interface IMapping {
    ERR_LARGE_FILE: string;
    MSG_PLEASE_SELECT_A_CHOICE: string;
    LBL_CHAT: string;
    MSG_MESSAGE_REQUIRED: string;
    MSG_NAVIGATION_TIMEOUT: string;
    MSG_TAKE_NEW_PHOTO: string;
    MSG_EMAIL_INVALID: string;
    BTN_REQUEST_CALLBACK: string;
    LBL_HOURS: string;
    BTN_NEW_ROOM: string;
    LBL_EMAIL: string;
    MSG_SENDING_MAIL: string;
    HEADER_MOBILE: string;
    MSG_ERROR_FAILED_TO_CONNECT: string;
    MSG_WAIT_TIME_NOT_AVIALABLE: string;
    MSG_LICENSE_EXPIRED: string;
    HEADER_EMAIL: string;
    LBL_SCHEDULE_CALLRETURN: string;
    HEADER_CUSTOMER: string;
    MSG_DEVICE_NOT_SUPPORT_SHARING: string;
    MSG_N_A_DUE_TO_CALENDAR_SCHEDULE: string;
    MSG_LOADING: string;
    BTN_NEXT: string;
    MSG_ERROR_NON_VISUAL_INTERACTION_TITLE: string;
    MSG_ERROR_LICENCE_TITLE: string;
    BTN_HELP: string;
    BTN_DONE: string;
    LBL_REMOVE: string;
    MSG_ERROR_OUT_OF_RANGE: string;
    LBL_YESTERDAY: string;
    MSG_CALLBACK_THANKS: string;
    LBL_SELF_SERVICE: string;
    BTN_SEND: string;
    MSG_INPUT_VALUE: string;
    BTN_CLICK_TO_CALL: string;
    MSG_ERROR_SERVER_RUNTIME: string;
    LBL_NO: string;
    BTN_END_INTERACTION: string;
    BTN_RETRY: string;
    LBL_ESTIMATED_WAIT_TIME: string;
    MSG_ERROR_VALIDATION: string;
    BTN_LEAVE_BUTTON: string;
    MSG_BAD_CREDENTIALS: string;
    LBL_NO_AGENT_AVAILABLE: string;
    LBL_PREVIEW: string;
    HEADER_AGENT_ID: string;
    LBL_COMING_SOON: string;
    LBL_COLLABORATION: string;
    BTN_START_OVER: string;
    LBL_OK: string;
    HEADER_STATUS: string;
    MSG_ERROR_COOKIES_DISABLED: string;
    BTN_RELOAD_INTERACTION: string;
    MSG_ERROR_LICENCE_BODY: string;
    LBL_MAILTO: string;
    MSG_CONFIRM_EXIT: string;
    MSG_INTERACTION_LINK_EXPIRED: string;
    MSG_QUIT_AND_SAVE_CONFIRM: string;
    BTN_CLOSE_ROOMS: string;
    LBL_SAVE: string;
    LBL_PHONE: string;
    MSG_ERROR_NON_VISUAL_INTERACTION_BODY: string;
    LBL_EMAIL_US: string;
    LBL_CALL: string;
    MSG_DELETE_PHOTO: string;
    MSG_EMAIL_REQUIRED: string;
    MSG_NO_CHAT_AGENTS: string;
    MSG_VIEW_FULL_SIZE_PHOTO: string;
    LBL_CONTACT_US: string;
    LBL_TRANSFER: string;
    LBL_TODAY: string;
    MSG_INTERACTION_END: string;
    MSG_ERROR_CHAT: string;
    MSG_LIKE_TO_RETRY: string;
    LBL_NAME: string;
    Q_CLOSE_ROOM: string;
    BTN_CLOSE: string;
    BTN_BACK: string;
    LBL_QUIT: string;
    BTN_CALL_NOW: string;
    MSG_SESSION_EXPIRED_INACTIVITY: string;
    LBL_CALLRETURN: string;
    LBL_CANCEL: string;
    BTN_MORE: string;
    MSG_UPLOAD_SUCCESS: string;
    MSG_UPLOADING_PHOTOS: string;
    LBL_INTERACTIONS: string;
    LBL_SELECT: string;
    MSG_TYPE_MESSAGE: string;
    LBL_CUSTOMER_TYPING: string;
    TOAST_TRANSFER: string;
    MSG_QUIT_CONFIRM: string;
    HEADER_DATE: string;
    MSG_UPLOAD_FAILED: string;
    TXT_CONTACT_US_MAIL_SUBJECT: string;
    MSG_EMAIL_SENT: string;
    MSG_ERROR_MANDATORY_FIELDS: string;
    LBL_MORE: string;
    BTN_EXIT_CONTINUE_LATER: string;
    LBL_PHONE_NUMBER: string;
    LBL_SCHEDULE_MESSAGE: string;
    TAB_ROOMS: string;
    LBL_COLLABORATION_ROOM: string;
    LBL_ERROR: string;
    LBL_MINUTES: string;
    LBL_YES: string;
    MSG_WILL_CALLBACK: string;
}

interface ITranslate {
    dictionary: { [languageCode: string]: IMapping }
    strings: IMapping;
}

interface IExtensions {
    callbackPageRenderer: ((ctx: IExtensionContext, page: JQuery) => JQuery)[];
    chatPageRenderer: ((ctx: IExtensionContext, page: JQuery) => JQuery)[];
    contactUsPageRenderer: ((ctx: IExtensionContext, page: JQuery) => JQuery)[];
    loaded: ((ctx: IExtensionContext, page: JQuery) => void)[];
    pageFooterRenderer: ((ctx: IExtensionContext, page: JQuery) => JQuery)[];
    pageHeaderRenderer: ((ctx: IExtensionContext, page: JQuery) => JQuery)[];
    pageRenderer: ((ctx: IExtensionContext, page: JQuery) => JQuery)[];
    sendEmailPageRenderer: ((ctx: IExtensionContext, page: JQuery) => JQuery)[];
    uploadPhotosMatrixRenderer: ((ctx: IExtensionContext, page: JQuery) => JQuery)[];
}
