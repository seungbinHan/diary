<template>
  <div class="flex flex-col items-center bg-gray-300 h-screen">
    <div class="w-6/12 border text-center bg-gray-300">
      나만의 일기장!!
    </div>
    <div class="flex justify-center w-6/12">
      <table class="border border-collapse container  bg-gray-200">
        <thead class="border">
          <th class="border w-9/12 bg-gray-200" >일기 </th>
        </thead>
        <tbody class="border">
          <tr class="border">
            <td class="border">
              {{title}}
            </td>
          </tr>  
          <tr class="border">
            <td class="border">
              {{content}}
            </td>
          </tr>  
        </tbody>
      </table>
    </div>
    <div>
        <button class="border rounded-lg bg-red-300">
          <router-link to="/">메인으로</router-link>
        </button>
      </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  props : ['idx'],
  setup (props) {
    const store = useStore();
    const title = store.state.diaryList[props.idx].title
    const content = store.state.diaryList[props.idx].content

    return{ title, content}
  }
}
</script>