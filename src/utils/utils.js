export function timerDisplay (time){
    let mins = parseInt(time /60);
    let secs = time % 60
    const paddedMinutes = ("0" + mins).slice(-2);
    const paddedSeconds = ("0" + secs).slice(-2);

    return `${paddedMinutes}
    ${paddedSeconds}`;
}