import { IApplication } from "./interact";
import { IPage } from "./paging";

export interface IProtocolManager {
    JAS_TIMEOUT: number;
    accessToken: any;
    accountId: string;
    app: IApplication;
    applicationKey: string;
    baseUrl: string;
    curPage: IPage;
    designerId: string;
    errorHandler: IErrorHandler;
    imei: string;
    interactionVar: any;
    isProgressBarVisible: boolean;
    jasUrl: string;
    lastPage: any;
    mode: any;
    objectId: string;
    objectInstanceId: string;
    objectStepId: string;
    port: number;
    queryString: any;
    retryOpts: any;
    scheme: string;
    securityToken: any;
    server: string;
    silent: boolean;
    spaceId: any;
    tenant: string;
    theme: string;
    userId: string;
    allocatePhoneNumber($group$$: string, $success$$: (arg: any) => void): void;
    buildUrl($scheme$$: "http" | "https", $server$$: string, $port$$: number): string;
    checkChatAvailability($queue$$: string, $availabilityHandler$$: (arg: any) => void): void;
    createInstance($renderFunction$$: Function, $clientActionsFunction$$: Function[]): void;
    createInstanceForHiddens(): void;
    freePhoneNumber($phoneNum$$: string, $success$$: (arg: any) => void): void;
    getAgentAppSettings($successCallback$$: (appSettings: any) => void): void;
    getAllVars($success$$: (variables: Record<string, any>) => void, $fail$$?: () => void): void;
    getCallAvailablity($appkey$$: string, $cb$$: (callAvailability: any) => void): void;
    getChatMessages($chatMessageHandler$$: (chatMessage: any) => void): void;
    getInteractionList($loginDone$$: (interactionList: IInteractionList) => void): void;
    getVar($varname$$: string, $success$$: (value: any) => void, $fail$$?: () => void): void;
    getVars<T extends string>(vars: T[], $success$$: (vars: Record<T, any>) => void, $fail$$?: () => void): void;
    hideProgressBar(): void;
    initImei(): void;
    notifyServer($navType$$: string, $params$$: any, $success$$: () => void, $failure$$: () => void): void;
    performNavigation($navType$$: string, $params$$?: any, $variables$$?: Record<string, any>): void;
    requestChat($queue$$: string, $chatRequestHandler$$: (chatResponse: any) => void): void;
    restore(): void;
    retrieveEWT($sender$$: string, $queueName$$: string, $retrieveEWTSucess$$: ($sender$$: string, ewtMessage: any) => void, $retrieveEWTFailure$$: ($sender$$: string, ewt: any) => void): any;
    retryLastRequest(): void;
    save(): void;
    saveRequest($func$$: Function, $argsArray$$: any[]): void;
    sendChatMessage($text$$: string, $messageSentHandler$$: () => void): void;
    sendContactUsEmail($name$$: string, $phoneNumber$$: string, $emailFrom$$: string, $message$$: string, $success$$: () => void): void;
    setRequestHeader($xhr$$: JQueryXHR): void;
    setVar($varname$$: string, $value$$: any): void;
    setVars(vars: Record<string, any>, success?: () => void, fail?: (xhr: JQueryXHR) => void): Promise<void>;
    showProgressBar($message$$?: string): void;
    terminateChat($terminatedHandler$$: () => void): void;
    uploadResource($blob$$: Blob, $elementId$$: string, $file_local_path$$: string, $callback$$: () => void, $PhotosToUpload$$: any[], $photoRef$$: string): FormData;
}

interface IErrorHandler {
    app: IApplication;
    $displayError($responseError$$: string): void;
    onError($xhr$$: JQueryXHR, $status$$: string): void;
}

export interface IInteractionList {
    resources: IResource;
}

interface IResource {
    spaces: ISpace[];
    pageTitle: string;
}

interface ISpace {
    spaceMessage?: string;
    spaceInteractions?: ISpaceInteraction[];
    subSpaces?: ISpace[];
    spaceTitle?: string;
}

interface ISpaceInteraction {
    id: string;
    interactionName: string;
    description: string;
}
