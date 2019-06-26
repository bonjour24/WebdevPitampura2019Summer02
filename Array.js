"use strict";
prompt("OPEN CONSOLE FOR THE REQUIRED OUTPUTS!")
function distinct()
{
    let n=prompt("Enter size of array :");
    let ans=[]
    for(let x=0;x<n;x++)
        ans[x]=prompt('Enter element');

    let filtered=ans.filter(function(item,pos)
    {
        return ans.indexOf(item)==pos;
    });
    console.log(filtered);
}
function max()
{
    let n=prompt("Enter size of array :");
    let one=[];
    for(let i=0;i<n;i++)
        one[i]=prompt('Enter element :');
    let maxed=one.reduce(function(a,b)
    {
        if(a>b)  return a;
        else return b;
    });
    console.log(maxed);
}
function min()
{
    let n=prompt("Enter size of array :");
    let one=[];
    for(let i=0;i<n;i++)
        one[i]=prompt('Enter element :');
    let minimum=one[0];
    one.forEach(function(a)
    {
        if(minimum>a)
            minimum=a;
    });
    console.log(minimum);
}
let arr=[
    {
        name:'Divyansh',
        github_id:'silent-lad'},
    {name:'Abhishek',
    github_id:'abhishek97'},
    {
        name:'Dhruv',
        github_id:'iamdhruvgupta'
    }
]
function git_display()
{
    let ans=[]
    for(let i=0;i<arr.length;i++)
        ans.push(arr[i].name);
    console.log(ans);
}
// let n=prompt("Enter size of array" );
// let arr=[n];
// for(let i=0;i<n;i++)
//     arr[i]=prompt("Enter the element:");
// let ans=arr.reduce((a,b)=> a>);
// document.getElementById("back").innerHTML+=ans;
