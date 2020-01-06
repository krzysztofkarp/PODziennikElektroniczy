export class Util{



    static clone<T>(object: T): T {
        return object ? JSON.parse(JSON.stringify(object)) : object;
    }

    static compareFields(obj1: any, obj2: any, fields:string[]){
        let results = {};
        fields.forEach(f => {
            results[f] = obj1[f] === obj2[f];
        });

        return results;
    }
}