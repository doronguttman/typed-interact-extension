import { IApplication } from "./interact";

declare global {
    class ErrorHandler {
        constructor($app$$: IApplication);
        public $displayError($responseError$$: any): any;
        public onError($xhr$$: XMLHttpRequest, $status$$: any): any;
        _displayError($responseError$$: any): any;
        _getActionHandler($actionUrl$$: string, $errorResponse$$: any): any;
        _getCommunicationError(): any;
        _getCookiesDisabledError(): any;
        _getErrorHandler($xhr$$: XMLHttpRequest): any;
        _getLinkExpiredError(): any;
        _getNonVisualInteractionError(): any;
        _handleAccessTokenError($xhr$$: XMLHttpRequest): any;
        _handleApplicationDeniedError($JSCompiler_object_inline_responseError_0_xhr$$: any): any;
        _handleBadCredentials($xhr$$: XMLHttpRequest): any;
        _handleGeneralError($xhr$$: XMLHttpRequest): any;
        _handleTrialExpiredError($xhr$$: XMLHttpRequest): any;
        _handleUrlTokenError($xhr$$: XMLHttpRequest): any;
    }

    function initExtensions(extensionName: string, initCallback: (app: IApplication) => void): void;
    const mobilewebappInstance: IApplication;

    const NAVIGATION: {
        BACK_FROM_hELP: string;
        BACK_TO_COVER_APP: string;
        BACK_TO_LOGIN: string;
        CALLBACK_REQUEST: string;
        CALL_DIALED: string;
        CALL_INITIATED: string;
        CALL_TRANSFER: string;
        CURRENT: string;
        FINISH: string;
        HELP: string;
        JUMP_TO: string;
        LOGIN_REDIRECT: string;
        MAILTO_REQUEST: string;
        NEXT: string;
        NONE: string;
        PREVIOUS: string;
        RELOAD_ELEMENT: string;
        RELOAD_INSTANCE: string;
        RETRY: string;
        SAVE_UNFINISHED: string;
        START_OVER: string;
        TERMINATED_BY_USER: string;
    }

    const HEADERS: {
        SERVER_VERSION: string;
        PROTOCOL_VERSION: string;
        APPLICATION_VERSION: string;
        JMA_MODULE_VERSION: string;
        JMA_VERSION: string;
        DEVICE_OS: string;
        DEVICE_OS_VERSION: string;
        DEVICE_TYPE: string;
        OS_PALTFORM_VERIOSN: string;
        DEVICE_NAME: string;
        IMEI: string;
        APPLICATION_KEY: string;
        TENANT_ID: string;
        UNAUTHENTICATED_REASON: string;
        ENVIRONMENT_NAME: string;
        SECURITY_TOKEN: string;
        USER_ID: string;
        ACCESS_TOKEN: string;
        OBJECT_VERSION: string;
        OBJECT_STEP_ID: string;
        OBJECT_ID: string;
        SPACE_ID: string;
        OBJECT_INSTANCE_ID: string;
        SESSION_ID: string;
        FILE_LOCAL_ADDRESS: string;
        BROWSER: string;
        BROWSER_VERSION: string;
        LATITUDE: string;
        LONGITUDE: string;
        LOCALE: string;
        WIFI: string;
        TIME_ZONE: string;
        CONTENT_TYPE: string;
        CONTENT_LENGTH: string;
        ACCEPT: string;
        REQUEST_TIMESTAMP: string;
        TIMESTAMP: string;
        CLIENT_TYPE: string;
        RUN_MODE: string;
        CHANNEL_TYPE: string;
        ETAG: string;
        IF_NONE_MATCH: string;
        IF_MODIFIED_SINCE: string;
        CACHE_CONTROL: string;
        LAST_MODIFIED: string;
        SCREEN_HEIGHT: string;
        SCREEN_WIDTH: string;
    }
}