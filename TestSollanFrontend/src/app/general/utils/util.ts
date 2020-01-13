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

    static onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }

    static soryByDate(array){
        return array.sort(function(a,b){
            return new Date(b.date).getMilliseconds() - new Date(a.date).getMilliseconds();
          });
    }
}