import {
    Component,
    ComponentFactoryResolver,
    Injectable,
    Inject,
    ReflectiveInjector
} from '@angular/core';
import { BodyContentComponent } from '../app/content/body/body.component';
import { HeaderContentComponent } from '../app/content/header/header.component';
import { ViewContainerRef } from '@angular/core';

@Injectable()
export class LoaderService {
    rootViewContainer: ViewContainerRef;
    bodyComponent: BodyContentComponent;
    constructor(@Inject(ComponentFactoryResolver) public factoryResolver) { }

    setRootViewContainerRef(viewContainerRef) {
        this.rootViewContainer = viewContainerRef;
    }

    addBodyComponent(name: string = '') {
        const factory = this.factoryResolver.resolveComponentFactory(BodyContentComponent);
        const component = factory.create(this.rootViewContainer.parentInjector);
        this.rootViewContainer.insert(component.hostView);
        component._component.headerSelect = 'large';
        this.bodyComponent = <BodyContentComponent>component._component;
    }
    clearComponent() {
        if (this.rootViewContainer) {
            this.rootViewContainer.clear();
        }
    }
}
