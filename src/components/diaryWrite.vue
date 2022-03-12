<template>
  <div class="flex flex-col items-center bg-gray-300 h-screen">
    <div class="w-6/12 border text-center  bg-gray-300">
      나만의 일기장!!
    </div>
    <div class="flex justify-center w-6/12 ">
      <table class="border border-collapse container bg-gray-500">
        <thead class="border">
          <th class="border w-9/12 ">일기 </th>
        </thead>
        <tbody class="border">
          <tr class="border ">
            <td class="border">
              <input type="text" class="container  bg-gray-50"  v-model="title">
            </td>
          </tr>  
          <tr class="border">
            <td class="border">
                <input type="text" class="container h-40  bg-gray-50" v-model="content">
            </td>
          </tr>  
        </tbody>
      </table>
    </div>
    <div>
        <button class="border rounded-lg bg-red-300 mt-4" v-on:click="completAndMove()" >
            작성완료
        </button>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import {ref} from 'vue'
 
export default {
  setup () {
    const router = useRouter()
    const title = ref('');
    const content = ref('');

    const completAndMove = () => {
      router.push({
        name: 'diaryMain',
        params: {
          title: title.value,
          content: content.value
        }
      })
    }
    return{ title, content, completAndMove}
  }
}
</script>