<template>
  <section class="">
    <div class="heart"></div>
    <div class="heart"></div>
  </section>
</template>

<script>
export default {
  name: 'init'
}
</script>

<style lang="stylus" scoped>
section
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  background: #000
.heart 
  width: 100px;
  height: 100px;
  background: red;
  position: absolute;
  transform: rotate(45deg);
  &:before,
  &:after
    width: 100px;
    height: 100px;
    border-radius: 50%;
    content: '';
    position: absolute;
    background: red;

.heart::before
  right: 50px;
.heart::after 
  bottom: 50px;
  left: 0


.heart:nth-child(1)
  animation: pulse 2s ease-in-out alternate infinite;
// .heart:nth-child(2)
//   animation: boom 2s .3s linear infinite alternate;  

@keyframes boom {
  46% {
    transform: scale(1) rotate(45deg);
  }
  50% {
    transform: scale(1.3) rotate(45deg);
  }
  52% {
    transform: scale(1.5) rotate(45deg);
  }
  55% {
    transform: scale(2) rotate(45deg);
  }
  100% {
    opacity: 0;
    transform: scale(50) rotate(45deg);
  }
}
@keyframes pulse {
  to {
    transform: scale(1.5) rotate(45deg);
  }
}
</style>
