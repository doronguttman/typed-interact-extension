interface IPageContentHeader {
    id: string;
    innerHtml: string;
}

interface IPageContent {
    allowHorizontalScroll: boolean;
    allowVerticalScroll: boolean;
    contentHeader: IPageContentHeader;
}

interface IMenuButton {
    buttonAction: string;
    buttonImageName?: string;
    buttonLabel: string;
    buttonState: string;
    buttonVisible: boolean;
}

interface IPageMenu {
    menuButtons: IMenuButton[];
    menuVisible: boolean;
}

interface IPageNavigation {
    navigationLeft: IMenuButton;
    navigationRight: IMenuButton;
    navigationTitle: string;
    pageReferenceName: string;
}

export interface IPage {
    language: string;
    pageContent: IPageContent;
    pageMenu: IPageMenu;
    pageNavigation: IPageNavigation;
}
