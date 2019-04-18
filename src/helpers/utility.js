export var utility= {}

export function makeFacilityStrBelowLevel(ou,level){
    return ou.ancestors.reduce(function(str,obj){
        if(obj.level>level){
            str = str + obj.name + " / " ;
        }
        return str;
    },"")  + ou.name;    
}

export function makeFacilityPathMap(ous,level){
    return ous.reduce(function(map,ou){
        map[ou.id] = makeFacilityStrBelowLevel(ou,level);
        return map;
    },[]);    
}

export function makeCommaSeparatedIdList(list,key){
    return list.reduce((str, obj) => {
        if(str == null){
            str = obj[key]
        }else{
            str = str + ','+obj[key]
        }
        return str;
    },null); 
}

