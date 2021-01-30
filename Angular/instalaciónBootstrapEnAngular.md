# Instalar Bootstrap 4 en Angular
https://www.techiediaries.com/angular-bootstrap-ui/

## Opción 1
### Ng-bootstrap

#### Dependencia Bootstrap:
npm install bootstrap --save

#### Instalación ng-bootstrap:
npm install --save @ng-bootstrap/ng-bootstrap

#### Añadir import de NgbModule en src/app/app.module.ts:
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  // [...]
  imports: [NgbModule, /* [...] */],
  // [...]
})
export class AppModule {
}

## Opción 2
### Bootstrap
#### Dependencia Bootstrap:
npm install bootstrap --save

#### Importar el css de BS en styles.css
Añadir: @import "~bootstrap/dist/css/bootstrap.css";