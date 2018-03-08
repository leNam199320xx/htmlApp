import {
    Component, ComponentFactoryResolver, Injectable, Inject, ReflectiveInjector, ViewContainerRef
} from '@angular/core';
import { BodyContentComponent } from '../app/content/body/body.component';
import { HeaderContentComponent } from '../app/content/header/header.component';
import { ButtonContentComponent } from '../app/content/Button/button.component';
import { MainContentComponent } from '../app/content/main/main.component';
import { GridContentComponent } from '../app/content/grid/grid.component';

@Injectable()
export class LoaderService {
    rootViewContainer: ViewContainerRef;
    bodyComponent: BodyContentComponent;
    headerComponent: HeaderContentComponent;
    mainComponent: MainContentComponent;
    gridComponent: GridContentComponent;

    constructor(@Inject(ComponentFactoryResolver) public factoryResolver) { }

    addBodyComponent() {
        const factory = this.factoryResolver.resolveComponentFactory(BodyContentComponent);
        const component = factory.create(this.rootViewContainer.parentInjector);
        this.rootViewContainer.insert(component.hostView);
        this.bodyComponent = <BodyContentComponent>component._component;
    }

    clearComponent() {
        if (this.rootViewContainer) {
            this.rootViewContainer.clear();
        }
    }
}
