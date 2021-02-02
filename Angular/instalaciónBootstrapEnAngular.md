# BOOTSTRAP 4
https://www.techiediaries.com/angular-bootstrap-ui/

## Opción 1 Ng-bootstrap

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

#### En cada componente en que se quiera usar NgBootstrap, importar:
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

## Opción 2
### Bootstrap CSS
#### Dependencia Bootstrap:
npm install bootstrap --save

#### Importar el css de BS en styles.css
Añadir: @import "~bootstrap/dist/css/bootstrap.css";

## Formularios Bootstrap
### Importar FormsModule y ReactiveFormsModule en app.module.ts
import { FormsModule, ReactiveFormsModule } from ‘@angular/forms’;

# FONT-AWESOME
## Instalación
npm install font-awesome --save

## Añadir a angular.json
"styles": [
    "src/styles.css",
    "node_modules/font-awesome/css/font-awesome.css"
],
