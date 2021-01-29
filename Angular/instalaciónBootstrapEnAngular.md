# Instalar Bootstrap 4 en Angular
## Ng-bootstrap

### Dependencia Bootstrap:
npm install bootstrap --save

### Instalación ng-bootstrap:
npm install --save @ng-bootstrap/ng-bootstrap

### Añadir import de NgbModule en src/app/app.module.ts:
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  // [...]
  imports: [NgbModule, /* [...] */],
  // [...]
})
export class AppModule {
}