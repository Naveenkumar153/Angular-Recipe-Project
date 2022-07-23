import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { RecipeDetailComponent } from "./pages/recipe/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./pages/recipe/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./pages/recipe/recipe-start/recipe-start.component";
import { RecipeComponent } from "./pages/recipe/recipe.component";
import { ShopListComponent } from "./pages/Shop/shop-list/shop-list.component";

const appRoutes:Routes = [
    { path:'',redirectTo:'recipes',pathMatch:'full' },
    { 
        path:'recipes',component:RecipeComponent,children:[
            { path:'',component:RecipeStartComponent },
            { path:'new',component:RecipeEditComponent },
            { path:':id',component:RecipeDetailComponent },
            { path:':id/edit',component:RecipeEditComponent }
        ]
    },
    { path:'shopping-list',component:ShopListComponent },

]


@NgModule({
    declarations:[],
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule],
})

export class AppRoutingModule {

}