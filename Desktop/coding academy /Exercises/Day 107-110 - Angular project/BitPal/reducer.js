

const arr=[1,2,3,3,3]

const sum=arr.reduce((acc,val)=>{
acc+=val
return acc
},0)

const reversedArr=arr.reduce((acc,val)=>{
acc.unshift(val)
return acc
},[])

const arrCountMap=arr.reduce((acc,val)=>{
if(!acc[val]) acc[val]=1
else acc[val]++
return acc
},{ })

console.log(sum) // 12
console.log(reversedArr) //[3,3,3,2,1]
console.log(arrCountMap) //{1 : 1 , 2: 1 , 3: 3 }