<template>
   <div>
  <button> روز قبل</button>
  </div>
  <div>
    <button onclick="todey()"> امروز</button>
  </div>
<div>

  <button> روز بعد</button>
</div>
  <select name="sort" id="sort">
  
    <option value="All"> همه امور</option>
    <option value="done">انجام شده</option>
    <option value="notdone">انتظار </option>
    

</select>

</template>

<script>
export default {

}
import DayListVue from './DayList.vue';
function todey()
</script>

<style>

</style>