<template>
<div>
  <div class="header">
     <p class="counter pomodoro-counter"> Number of completed pomodoros: {{$store.state.pomodoroCounter}}</p>
    <p class="counter break-counter">Number of breaks: {{$store.state.breakCounter}}</p>
  </div>
  <!-- POMODORO TIMER  -->
  <PomodoroTimer v-if="mainTimerShow" :toggleTimers="toggleTimers"/>
  <!-- BREAK TIMER  -->
  <BreakTimer v-if="!mainTimerShow" :toggleTimers="toggleTimers"/>
</div>  
</template>

<script>
import BreakTimer from './components/BreakTimer.vue';
import PomodoroTimer from './components/PomodoroTimer.vue';

export default {
  name: 'App',
  data(){
    return {
      mainTimerShow: true,
 }
  },
  components: {
    BreakTimer,
    PomodoroTimer
  },
  computed: {
  },
  methods: {
    toggleTimers: function(){
      console.log("clicked")
      this.mainTimerShow = !this.mainTimerShow;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;900&display=swap');
.header{
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  padding-top:10px;
  height: 10vh;

}
.counter{
  padding:  10px 20px;
  border-radius: 20px;
}
.pomodoro-counter{
  background-color: #f9b0bb
}
.break-counter{
  background-color: #98db92
}
</style>
