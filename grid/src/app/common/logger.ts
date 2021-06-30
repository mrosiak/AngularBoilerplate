export class Logger {    
    public static log(){
        return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            console.log(target.constructor.name + "."+propertyKey+"() has been called and logged using decorator");
        };
    }
}