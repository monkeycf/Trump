<template>
  <div></div>
</template>

<script>
  export default {
    name: 'LinkFooter',
    mounted() {
      const elementA = document.createElement('a');
      const footer = document.querySelector('.footer');
      elementA.href = 'http://www.beian.miit.gov.cn';
      elementA.target = '_blank';
      elementA.rel = 'noopener';
      elementA.innerHTML = '浙ICP备18050134号';
      footer.innerHTML = footer.innerHTML + '<br>' + elementA.outerHTML;
    },
  };
</script>

<style scoped>

</style>
