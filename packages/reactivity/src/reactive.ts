import { isObject } from "@vue/share"
const  mutableHandlers = {
    get(target,key){
        //进行依赖收集
        return Reflect.get(target,key)
    },
    set(target,key,value){
        //进行依赖更新
        return Reflect.set(target,key,value)
    },
    
}

export function reactive(target){
    return  createReactive(target)

}
function  createReactive(target){
    if(!isObject(target)){
        return 
    }
    const proxy =  new Proxy(target,mutableHandlers)
    return proxy

}