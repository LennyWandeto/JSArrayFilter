// Code your solution here
 function findMatching(drivers, name){
     const matched = drivers.filter((word) => word.toLowerCase()===name.toLowerCase())
     return matched
 }

 function fuzzyMatch(drivers, name){
     const matched = drivers.filter((word) => word.toLowerCase().startsWith(name.toLowerCase()))
     return matched
 }

 function matchName(drivers, name){
     const matched = drivers.filter((word) => word.name===name)
     return matched
 }