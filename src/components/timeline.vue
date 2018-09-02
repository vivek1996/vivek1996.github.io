<template>
    <div class="timeline">
        <timeline timeline-theme="#ffdc00">
            <timeline-title>2018</timeline-title>
            <timeline-item bg-color="#9dd8e0">
                <p>Graduated B.E in CS 🎓</p>
            </timeline-item>
            <timeline-item bg-color="#9dd8e0">
                <small>Jan to Aug</small>
                <p>Traniee at Edwisor 💻</p>
            </timeline-item>
             <timeline-title bg-color="#f2d7e1">2014</timeline-title>
            <timeline-item bg-color="#ffdc00">
                <p>student at  K.S.R Engineering college👦 </p>
            </timeline-item>
            <timeline-title bg-color="#f2d7e1">2000-2014</timeline-title>
            <timeline-item bg-color="#ffdc00">
                <p>completed Schoolings 👦 </p>
            </timeline-item>
            <timeline-title bg-color="#ffdc00">1996</timeline-title>
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
  color: white;
}
.timeline-title {
  color: rgb(219, 20, 80) !important;
  font-size: 2rem;
}
.timeline-item {
  color: #edeeef !important;
}
</style>
