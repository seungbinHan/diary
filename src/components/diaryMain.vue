<template>
  <div class="flex flex-col items-center bg-gray-300 h-screen">
    <div class="w-6/12 border text-center bg-gray-300">
      나만의 일기장!!
    </div>
    <div class="w-6/12 border pl-8 bg-gray-500">
      <button class="border rounded-lg bg-red-300 m-2"> 
        <router-link to="/diaryWrite">일기쓰기</router-link>
      </button>
      <button @click="allClear()" class="border rounded-lg bg-blue-300 m-2">모두 삭제</button>
    </div>
    <div class="flex justify-center w-6/12 ">
      <table class="border border-collapse container">
        <thead class="border">
          <th class="border w-9/12 bg-gray-50">일기 </th> <th class="border w-3/12 bg-gray-50"> 날짜 </th>
        </thead>
        <tbody v-for="(item, index) in diaryList" :key="index">
          <tr class="border">
            <td class="border" @click="diaryViewFn(index)">{{item.title}}</td><td class="border">{{item.date}}</td>  
          </tr>  
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

import {ref} from 'vue'
import { useStore } from "vuex";
import { useRouter } from 'vue-router'

export default {  
  props : ['title','content'],
  setup(props){
    const router = useRouter()
    const store = useStore();
    const diaryList = ref(store.state.diaryList)
    
    /*현재날짜 구하기*/
    const today = new Date(); 
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();
    
    /* 일기 List에 추가 */
    if( props.title != null ){
      store.commit('addDiaryList',{
        title : props.title,
        content : props.content,
        date : `${month}.${date}`
      })
    }
    
    /* 일기 모두삭제 */
    const allClear = () => {
      store.commit('allClear')
    }

    /*일기 읽기*/
    const diaryViewFn = (idx) => {
       router.push({
        name: 'diaryView',
        params: {
          idx : idx
        }
      })
    }

    return{diaryList, allClear, diaryViewFn}
  },
  components: {
  }
}
</script>
