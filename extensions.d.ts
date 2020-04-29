import { IPage } from "./paging";
import { IProtocolManager } from "./protocol-manager";

export interface IExtensionContext {
    pageElement?: IPage;
    pm: IProtocolManager;
    page?: IPage;

    getApplicationName(): string;
    getEnvironmentName(): string;
    getFlowName(): string;
    getInteractionId(): string;
    getPage(): IPage;
    getVariable: IProtocolManager["getVar"];
    getVariables: IProtocolManager["getVars"];
    setVariable: IProtocolManager["setVar"];
    setVariablesAsync: IProtocolManager["setVars"];
}

export interface IErrorContext {
    alert: {
        alertTitle: string;
        alertMessageBody: string;
        alertButtons: {
            alertButtonClientAction: {
                action: string;
            };
            alertButtonTitle: string;
        }[];
    }
    errorId: string;
}
