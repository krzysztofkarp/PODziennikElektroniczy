import { Observable } from "rxjs";
import { Router } from "@angular/router";

export class GuardUtil {

    static mapWithRedirection(observable:Observable<boolean>,pathIfNotAllowed:string,router:Router) {
        return observable.map(value => {
            if(!value) {
                router.navigate([pathIfNotAllowed]);
            }
            return value;
        });
    }
}
