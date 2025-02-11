import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/StudentScorePage',
    name: 'StudentScorePage',
    component: () => import('../views/StudentScorePage.vue')
  },
  {
    path: '/StudentWelcomePage',
    name: 'StudentWelcomePage',
    component: () => import('../views/StudentWelcomePage.vue')
  },
  {
    path: '/ScoreRetabulationPage',
    name: 'ScoreRetabulationPage',
    component: () => import('../views/ScoreRetabulationPage.vue')
  },
  {
    path: '/ClassSchedulePage',
    name: 'ClassSchedulePage',
    component: () => import('../views/ClassSchedulePage.vue')
  },
  {
    path: '/ApplyExemptionPage',
    name: 'ApplyExemptionPage',
    component: () => import('../views/ApplyExemptionPage.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/CourseSelect',
    name: 'CourseSelect',
    component: () => import('../views/CourseSelect.vue')
  },
  {
    path: '/Setting',
    name: 'Setting',
    component: () => import('../views/Setting.vue')
  },
  {
    path: '/CreateCourse',
    name: 'CreateCourse',
    component: () => import('../views/CreateCourse.vue')
  },
  {
    path: '/InstructSchedule',
    name: 'InstructSchedule',
    component: () => import('../views/InstructSchedulePage.vue')
  },
  {
    path: '/InstructSelect',
    name: 'InstructSelect',
    component: () => import('../views/InstructSelect.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/GradeEdit',
    name: 'GradeEdit',
    component: () => import('../views/GradeEdit.vue')
  },
  {
    path: '/AttendanceInfoStudent',
    name: 'AttendanceInfoStudent',
    component: () => import('../views/AttendanceInfoStudent.vue')
  },
  {
    path: '/UploadAttendance',
    name: 'UploadAttendance',
    component: () => import('../views/UploadAttendance.vue')
  },
  {
    path: '/AttendanceInfoTeacher',
    name: 'AttendanceInfoTeacher',
    component: () => import('../views/AttendanceInfoTeacher.vue')
  },
  {
    path: '/AttendanceScore',
    name: 'AttendanceScore',
    component: () => import('../views/AttendanceScore.vue')
  },
  {
    path: '/ApplyLeavePage',
    name: 'ApplyLeavePage',
    component: () => import('../views/ApplyLeavePage.vue')
  },
  {
    path: '/LeaveVerifyPage',
    name: 'LeaveVerifyPage',
    component: () => import('../views/LeaveVerifyPage.vue')
  },
  {
    path: '/TrainingPlan',
    name: 'TrainingPlan',
    component: () => import('../views/TrainingPlan.vue')
  },
  {
    path: '/EditTrainingPlan',
    name: 'EditTrainingPlan',
    component: () => import('../views/EditTrainingPlan.vue')
  },
  {
    path: '/DropClass',
    name: 'DropClass',
    component: () => import('../views/DropClass.vue')
  },
]

const router = new VueRouter({
  routes
})


// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/Login' 
  || to.path==='/' 
  || to.path==='/Register'
  || to.path==='/license'
  || to.path==='/forgetPassword'
  ) {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
    if (token === null || token === '') {
      //前往登录页
      this.$router.replace('/Login');     
    } else {
      next();
    }
  }
});

export default router
