<template>
    <div class="timeline">
        <timeline timeline-theme="#ffdc00">
            <timeline-title>JAN2018-AUG2018</timeline-title>
            <timeline-item bg-color="#9dd8e0">
                <p>Traniee at Edwisor 💻</p>
            </timeline-item>
            <timeline-title bg-color="#f2d7e1">B.E in COMPUTER SCIENCE(2014-2018)</timeline-title>
            <timeline-item bg-color="#ffdc00">
                <p>K.S.R COLLEGE OF TECHNOLOGY,TIRUCHENGODE.🎓 </p>
            </timeline-item>
            <timeline-title bg-color="#07b7fc">Solo Learn 🎓(2017-18)</timeline-title>
            <timeline-item>CERTIFICATION IN JQUERY TUTORIAL-2017
            </timeline-item>
            <timeline-item>CERTIFICATION IN JAVASCRIPT TUTORIAL-2017</timeline-item>
            <timeline-item>CERTIFICATION IN CSS FUNDAMENTALS-2017</timeline-item>
            <timeline-item>CERTIFICATION IN HTML FUNDAMENTALS-2016</timeline-item>
            <timeline-title bg-color="#07b7fc">HIGH SCHOOL (2010-2014)</timeline-title>
            <timeline-item bg-color="#ffdc00">
                <p>M.A.M SCHOOL,METTUR 👦 </p>
            </timeline-item>
            <timeline-title bg-color="#07b7fc">PREPARATORY EDUCATION (2000-2010)</timeline-title>
            <timeline-item bg-color="#ffdc00">
                <p>M.A.M SCHOOL,METTUR 👦 </p>
            </timeline-item>
            <timeline-title>HELLO WORLD- 1996</timeline-title>
            <timeline-item>
                Born 👶
            </timeline-item>
        </timeline>
    </div>
</template>
<script>
import { Timeline, TimelineItem, TimelineTitle } from "vue-cute-timeline";

export default {
    name: "Time",
    components: { Timeline, TimelineItem, TimelineTitle }
};
</script>
<style lang="scss" scoped>
.timeline p {
  color: #ffffff;
}
.timeline-title {
  color: rgb(255, 220, 0) !important;
  font-size: 2rem;
}
.timeline-item {
  color: #edeeef !important;
}
</style>
