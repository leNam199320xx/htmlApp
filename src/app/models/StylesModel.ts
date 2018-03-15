export interface StylesModel {
    element: HTMLElement;
    id: string;
    class: {
        name: string;
        styles: CSSStyleDeclaration;
    };
}
