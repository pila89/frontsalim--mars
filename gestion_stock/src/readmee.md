npm i -g  @angular /cli @latest
ng new 
bg generate 
ng add
ng update
ng build/ng test /ng lint/ng deploy
//
standalone:true,
imports:[Routemodule],
//
ng build --prod
En Angular, les composants dynamiques sont créés en utilisant le service ComponentFactoryResolver,
//
Tips #1 - utilisez 'default' pour taper moins de code 😎

Réduisez le boilerplate de votre routing Angular en utilisant le mot clé default afin de signifier à typescript quel objet vous exportez par défaut. Ainsi, plus besoin de préciser then(m => m.MyModule), c'est toujours ça de pris ! 🤓

Je peux faire ça avec un composant :
@Component({
  standalone: true,
  template: `...`
})
export default class DashboardComponent {}

Et aussi avec mes routes :
export default [
  {
    path: '',
    component: AboutComponent
  }  
] as Route[];

Puis j'ai le droit d'import sans utiliser then() !
export const appRoutes: Route[] = [
   {
     path: '',
     component: AppComponent,
   },
   {
     path: 'dashboard',
     loadComponent: () => import('./dashboard/dashboard.component'),
   }, 
   {
     path: 'about',
     loadChildren: () => import('./about/about.routes'),
   }, 
]
//
 Tips #2 - Où "provider" vos Injectable ? 😎

👉  providedIn: 'root' pour une donnée disponible partout au sein de l'app. Utilisez ça pour les données dont vous avez besoin à plusieurs endroits
@Injectable({ providedIn: 'root' })
export class AuthService {...}

@Component({...})
export class MyFeatureComponent {
  private readonly authService = inject(AuthService); 
}

@Injectable({...})
export class MyFeatureGuard{
  private readonly authService = inject(AuthService); 
}


👉 Dans la propriété providers d'un composant pour une donnée disponible seulement au niveau du composant
@Injectable()
export class MyFeatureService {...}

@Component({
  selector: 'app-my-feature',
  standalone: true,
  providers: [MyFeatureService]
  template: `...`,
})
export class MyFeatureComponent {...}


👉 Dans la propriété providers d'une route pour une donnée disponible seulement au niveau d'une route.  En faisant cela, je scope le service à cet endroit là, donc si MyFeatureComponent ou MyFeatureGuard injecte le service et l'utilise alors ils utiliseront en fait la même data
// my-feature/my-feature.service.ts
@Injectable()
export class MyFeatureService{...}

// my-feature/my-feature.routes.ts
export const featureRoutes: Route[] = [
  {
     path: '',
     component: MyFeatureComponent,
     providers: [MyFeatureService],
     canActivate: [MyFeatureGuard] 
  }
]
//
Tips #3 - functional guard avec paramètre  😎

Grâce à la nouvelle fonction inject() d'Angular 14, vous pouvez créer des guard fonctionnels qui prennent un ou plusieurs paramètres.

On créé d'abord un guard qui return true ou false si le rôle passé en paramètre correspond à celui du user en cours
export function hasUserRoleGuard(role: UserRole): CanActivateFn {
  return (route, state) => {
    const currentUserRole$ = inject(UserStore).role$;

    return currentUserRole$.pipe(map(userRole => userRole === role));
  }
}


Puis on l'utilise dans un canActivate en lui passant le paramètre approprié !
export const schoolRoutes: Route[] = [
  {
    path: 'teachers-room',
    component: TeachersRoomComponent,
    canActivate: [hasUserRoleGuard('teacher')]
  },
  {
    path: 'director-room',
    component: DirectorComponent,
    canActivate: [hasUserRoleGuard('director')]
  },
]

//
Tips #4 - Utilisez le " | async " au lieu de .subscribe()  😎

Une bonne pratique à toujours mettre en place : utilisez obs$ | async dans vos templates au lieu de obs$.subscribe(...) dans votre code typescript.

// ✅ GOOD
@Component({
  standalone: true,
  imports: [NgFor, AsyncPipe],
  template: `
    <ul>
      <li *ngFor="let product of products$ | async">
        ...
      </li>
    </ul>
  `
})
export default class ProductsComponent {
  private productsService = inject(productsService);

  readonly products$ = this.productsService.products$;
}

// ❌ BAD
@Component({
  standalone: true,
  imports: [NgFor],
  template: `
    <ul>
      <li *ngFor="let product of products">
        ...
      </li>
    </ul>
  `
})
export default class ProductsComponent implement OnInit {
  private productsService = inject(productsService);

  products: Product[] = [];

  ngOnInit() {
    this.productsService.products$
      .subscribe(products => this.products = products)
  }
}


Il y a plusieurs problèmes avec le second code comparé au premier :
- On doit parcourir tout le code pour comprendre ce qu'il advient de products ce qui nuit à la compréhension
- Utiliser .subscribe manuellement devrait entraîner le fait de unsubscribe pour éviter les fuites mémoires, c'est donc une action à faire en plus. Le | async unsubscribe automatiquement à la destruction de notre composant alors autant en profiter !
- La Change Detection de Angular peut nous jouer des tours et dans certains cas products pourrait ne pas se mettre correctement à jour
- C'est plus verbeux pour un code moins efficace

Théoriquement vous ne devriez jamais avoir à utiliser subscribe() dans vos applications Angular, ce qui est une bonne chose car ça vous force à avoir du code réactif ! 
