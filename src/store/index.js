import { createStore } from "vuex";

export default createStore({
    state:{
        pomodoroCounter:0,
        breakCounter: 0,
        remainderTime: null,
    },
    mutations:{
        incrementPomodoroCounter (state){
           state.pomodoroCounter++;
        },
        incrementBreakCounter (state){
            state.breakCounter++;
        },
        onfinish(interval){
            clearInterval(interval);
        }
        
        
    },
    actions: {
      start(playPauseBtn, interval, time, {commit}){
        playPauseBtn = !playPauseBtn;
        interval = setInterval(() => {
          time -= 1;
          if (time == 0) {
            commit('incrementPomodoroCounter');
            playPauseBtn = !playPauseBtn;
            commit('onfinish')
  
          }
        }, 1000);
      },

    }
})