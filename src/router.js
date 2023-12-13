import HomeComp from './components/HomeComp';
import UserDetail from './components/UserDetail.vue';
import UserEdit from './components/UserEdit.vue';
import UserStart from './components/UserStart.vue';
import UserApp from './components/UserApp';
// import appHeader from './components/appHeader'


export const routes=[
    {path:'/',           component: HomeComp ,name:'home' },
    // {path:'/',components:{
    //     default: HomeComp,
    //     'Header-top':appHeader

    // }},
    {path:'/UserDetail', component: UserDetail ,beforeEnter:(to,from,next)=>{
        console.log('inside component setup');
        next();
    }},
    // {path:'/UserDetail',components:{
    //     default:UserDetail,
    //     'Header-bottom':appHeader

    // }},
    {path:'/UserEdit',   component:UserEdit, children:[
        {path:'', component:UserStart},
        {path:':id',component:UserDetail},
        {path:':id/UserApp',component:UserApp ,name:'Myuserapp'},
    ]

    },
    {path:'/userStart',  component:UserStart},
    {path:'/redirect-me', redirect:'/' } ,
    {path:'*', redirect:'/'}
]