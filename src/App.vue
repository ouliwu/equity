<template>
  <div class="eq-app-container">
    <div class="eq-app-header">
      <EqHeader></EqHeader>
    </div>
    <div class="eq-app-main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="sq-app-tabbar">
      <!-- 用于渲染底部的tabbar -->
      <EqFooter></EqFooter>
    </div>
  </div>
</template>

<script>
import EqHeader from '@/components/EqHeader'
import EqFooter from '@/components/EqFooter'
export default {
  components: {
    EqHeader,
    EqFooter
  }
}
</script>

<style lang="scss">
html,
body,
div,
span,
h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
address,
em,
img,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
// HTML5 display-role reset for older browsers
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
  font-size: 12px;
}
ol,
ul {
  list-style: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
html,
body {
  margin: 5px;
  height: 100%;
  overflow: hidden;
}
.eq-app {
  &-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  &-main {
    flex: 1;
    overflow-x: hidden;
  }
}
</style>
