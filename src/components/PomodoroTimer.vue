<template>
  <div>
    <div class="timer-container">
      <div class="timer-tag"><i class="bi bi-highlighter"></i> Focus</div>
      <div class="timer-time">
        {{ displayTime }}
      </div>
      <div class="timer-controls">
        <button class="control-btn" @click="reset"><i class="bi bi-arrow-clockwise"></i></button>
        <button v-if="!clicked" class="control-btn" @click="start">
          <i class="bi bi-play-fill"></i>
        </button>
        <button v-if="clicked" class="control-btn" @click="pause">
          <i class="bi bi-pause-fill"></i>
        </button>
        <button class="control-btn" @click="switchToBreakTimer">
          <i class="bi bi-fast-forward-fill"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { timerDisplay } from "@/utils/utils";
import sound from "../assets/timersound.mp3"

const pomodoroTime = 0.1;
export default {
  name: "PomodoroTimer",
  props: ["toggleTimers"],
  data() {
    return {
      currentTime: pomodoroTime * 60,
      clicked: false,
      timerInterval: null,
      timerSound :  new Audio(sound)
    };
  },
  computed: {
    displayTime() {
      return timerDisplay(this.currentTime);
    },
  },
  methods: {
    switchToBreakTimer: function () {
      this.toggleTimers();
    },
    start: function () {
      this.clicked = !this.clicked;
      this.timerInterval = setInterval(() => {
        this.currentTime -= 1;
        if (this.currentTime == 0) {
          this.$store.commit('incrementPomodoroCounter');
          this.timerSound.play();
          this.clicked = !this.clicked;
          this.onfinish();

        }
      }, 1000);
    },
    pause : function(){  
      this.onfinish()
      this.clicked = !this.clicked;
    },
    reset:function(){
     this.currentTime = pomodoroTime * 60;
     this.onfinish();
    },
    onfinish: function () {
      clearInterval(this.timerInterval);
    },
  },
};
</script>

<style scoped>
.timer-container {
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fae7ec;
}
.timer-tag {
  border: 2px solid #3f1414;
  color: #3f1414;
  padding: 5px 10px;
  border-radius: 50px;
}
.timer-time {
  max-width: 100px;
  font-size: 180px;
  font-weight: bold;
  color: #3f1414;
  line-height: 140px;
  margin: 20px 87px 20px 0px;
}
.control-btn {
  margin: 20px;
  background-color: #f9dbe1;
  border-radius: 10px;
  border: none;
  padding: 10px 20px;
  color: #3f1414;
}
.control-btn:nth-child(2) {
  background-color: #f9b0bb;
  padding: 12px 22px;
}
</style>
