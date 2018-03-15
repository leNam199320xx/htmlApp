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

    constructor(@Inject(ComponentFactoryResolver) public factoryResolver: ComponentFactoryResolver) { }

    addBodyComponent() {
        this.clearComponent();
        const factory = this.factoryResolver.resolveComponentFactory(BodyContentComponent);
        const component = factory.create(this.rootViewContainer.injector);
        this.rootViewContainer.insert(component.hostView);
    }

    clearComponent() {
        if (this.rootViewContainer) {
            this.rootViewContainer.clear();
        }
    }
}
