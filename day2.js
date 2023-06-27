//?set time out method

// setTimeout(()=>{
//     console.log('1')
// },3000)
// console.log('2')

// setTimeout(()=>{
//     console.log('1')
// },0)
// console.log('2')

//!setinterval
//   var no=1
//  const interid=setInterval(function(){
//     if(no==5){
//       clearInterval(interid)
//     }
//     console.log(no);
//     no++;
//  },3000)

// for of loop

// var arr = [2,3,4,5]
// for(var ele of arr){
//     (ele%2==0)?console.log( `${ele} is EVEN`):console.log(ele ,' is ODD')
// }

//delete element in array

// let arr=[1,2,3,4,5]
// delete arr[2]
// console.log(arr)

//splice -- to add or remove elements
//slice -- print the elemnts in the array

// delete usng splice
// splice syntax .splice(position,deletion,adding new element)

// let arr=[1,2,3,4,5]
// arr.splice(2,1)
// console.log(arr)

//adding using splice

// let arr=[1,2,3,4,5]
// arr.splice(2,0,'jeethu')
// console.log(arr)

//creating array using new method

// let arr=new Array(5) // by using this method only indexing method can be used to fill the empty arrray
// console.log(arr)
// arr.push(2)
// console.log(arr)
// arr.push(3,5)
// console.log(arr)
// arr.splice(0,0,'jee',2,3,4)
// console.log(arr)
// arr[4]=55
// console.log(arr)

//for each

// let arr=[1,2,3,4]
// arr.forEach(ele=>(ele*2))

//* const mul=(arr,num)=>{
//     var flag=[] // creating dummy array for returning
//     arr.forEach(ele=>flag.push(ele*num)) //for each only do functions dont return
//     return flag
// }
// const res=mul([1,2,3],3)
// console.log(res);

//by using map

// const mul=(arr,num)=>
//     arr.map(ele=>(ele*num))//map directly maps with each element

// const res=mul([1,2,3],3)
// console.log(res);

// !odd or even using map function

// const oddeven = (arr) => {
//   return arr.map((ele) => (ele % 2 == 0 ? "even" : "odd"));
// };
// const res = oddeven([1, 2, 3]);
// console.log(res);
//op = [odd,even,odd]

// ?filter operation 

// const filtereven=(array)=> array.filter(el=>el%2!=0)

// const res=filtereven([1,2,3,4,5,6,7,8])
// console.log(res)
// //op-- {2,4,6,8}

// const filtereven=(array)=> array.filter(el=>el%2==0)

// const res=filtereven([1,2,3,4,5,6,7,8])
// console.log(res)

//? copy paste the array into another array

// const aa=[1,2,3]
// const bb=aa
// bb[1]='jeethu'
// console.log(bb,aa);

//! spread operator is used to copy and point thr\e array seperatly

// const arr1=[1,2,3]
// const arr2=[...arr1]
// arr2[2]='jeethu'
// console.log(arr2,arr1);

//! key structure

//  const j=[1,2,3,4,5,5]

// const[a,b,c]=j
// console.log(a);
// console.log(b);

// const[,a,b,,]=j
// console.log(a);
// console.log(b);
//! destructure -- removing elemnts from the array
// const[a,b,...rest]=j
// console.log(rest);
// console.log(b);

//! objects
//? like dictionary in python

// var myself={
//   name: "jeethu",
//   rollno: 305,
//   dept:"cse",
//   parents:{
//     mother:1,
//     father:1
//   }
// }
// myself.parent=2
// console.log(myself.name,myself.dept,myself.parents)
// console.log(myself.name,myself.dept,myself.parents.mother)
// console.log(myself['name']);

// const std={
//   name:'ram',
//   cls:'A',
//   marks:{
//     eng:90,
//     mat:95,
//     sci:75,
//     sub:70
//   }
// }

// const printmarks=(obj,sub)=>{
//   return `${obj.name}'s ${sub} mark is ${obj.marks[sub]}`

// }
// console.log(printmarks(std,'sci'))

//! important 
// console.log(2*true);
// console.log('2'*true);
// console.log(2+false);
// console.log('2'+true);


//?destrucure in objects

// const obj={
//   id:1,
//   name:'jeethu',
//   age:'20'
// }
//!allice 
// const{age,name:n,id,height:h=5.9}=obj
// console.log(id,age,n,h);

//! for in loop

// for(var key in obj){
//   console.log(`key is ${key} and value is ${obj[key]}`);
// }

// const address=obj.address||{} //{} is coded to avoid the error in the code 
// console.log(address.state);

//? to set object in address 

// const{address={state:'TN'}}=obj
// console.log(address.state);

// console.log(obj?.address?.state || 'TN')
//?obj?.address?.state -->to check wheather the objecvt is present inside or not

// var user=[{
//   name:'jeethu',
//   age:20,
//   height:5

// },{
//   name:'Ram',
//   age:21,
//   height:7
// }]
//? by using for of loop
// for(var obj of user){
//   obj.age+=2
// }
// console.log(user);

//? by using for in loop
// for(var index in user){
//   user[index].age+=2
// }
// console.log(user)

//? by using map
// user = user.map(ele=>{
//   ele.age+=2 
//   return  ele})
// console.log(user);

//?by using map spread operator
// user=user.map(ele=>({...ele,age:ele.age+2}))//ele.age=> to get value 
                    // spreading the array //setting the age to +2
// console.log(user);

//adduser(id,obj)
// edituser(id,key,val)
//delete user(id)
// get user(id)

//! array manipulation using objects 

// var user=[{
//   id:4,
//   name:'jeethu',
//   age:20,
//   height:5

// },{
//   id:5,
//   name:'Ram',
//   age:21,
//   height:7
// }]

// const getuser=(id)=>{
//     for(var ind of user){
//       if(ind.id==id)
//       console.log(ind); 
//     }
// }

// const getuser=(id)=>user.find(ele=>ele.id==id)
// console.log(getuser(4));//printing returned function
// getuser(4)//function called

//  const edituser=(id,key,value)=>{
//         for(var ind of user){
//            if(ind.id==id){
//             ind[key]=value
//             console.log(ind);
//            }
           
//          }
//  }

// const edituser=(id,key,value)=>{
//  var uu= user.findIndex(ele=>ele.id==id)
//  if(uu==-1){
//   console.log( 'id not found');
//   return user
//  }
//  user[uu][key] =value
//  return user
// }


//  console.log(edituser(5,'age',3)); 
//  console.log('after edit');
//  console.log(user);


// const deleteuser=(id)=>
// {
//   for(var ind of user){
//     if(ind.id==id){
//       user.splice(ind,1)
//      console.log('deleted');
//     }
//   }
// }

// const deleteuser=(id)=>{
//   const a=user.findIndex(ele=>ele.id==id)
//   user.splice(a,1)
//   return user
// }
//  deleteuser(5)

// console.log(user);


// const adduser=(obj)=>{
//     user.push(obj)
//     return user;
// }

//  console.log(adduser({name:'gopi',age:12,loc:'udt'}));
 //adduser({name:'gopi',age:12,loc:'udt'})
 






