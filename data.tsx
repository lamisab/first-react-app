export interface IWolf{
    id:string;
    name:string;
    type:string;
    imageUrl:string;
    date:Date;
    price:number;
    ownername:string;
}
export const posts: IWolf[] =[
{  id:'1',
    name:'Roy',
    type:'wolf',
    imageUrl:'https://images.unsplash.com/photo-1572363420552-058bd41af8c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29sZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    date: new Date('2022-10-08'),
    price:40000,
    ownername:'FAHAD'},

   {
    id:'2',
    name:'Dan',
    type:'haski',
    imageUrl:'https://media.istockphoto.com/photos/portrait-of-dog-husky-picture-id465063720?b=1&k=20&m=465063720&s=170667a&w=0&h=TFL3dznUBjILyrAoWugmlMPrBNwrZTE7M-ILIqn-2xc=',
    date: new Date('2022-09-09'),
    price:0,
    ownername:'SULTAN ABDULLAH'},

    {    id:'3',
    name:'Lolia',
    type:'haski',
    imageUrl:'https://media.istockphoto.com/photos/huskies-on-a-beach-picture-id1178985648?b=1&k=20&m=1178985648&s=170667a&w=0&h=b4aSLH665WFim263rKnmvCMd4cLNe1t9t1qck7C5bq0=',
    date: new Date('2022-09-09'),
    price:0,
    ownername:'MOHAMMAD FAHAD'},

    {    id:'4',
    name:'blk',
    type:'wolf',
    imageUrl:'https://images.unsplash.com/photo-1547407139-3c921a66005c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29sZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    date: new Date('2022-09-09'),
    price:0,
    ownername:'AHMAD ABDULLAH'},

    {    id:'5',
    name:'joey',
    type:'dog',
    imageUrl:'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    date: new Date('2022-09-09'),
    price:0,
    ownername:'DANIEAL'}

]