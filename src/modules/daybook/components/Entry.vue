<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
  >
    <!-- titulo -->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">27</span>
      <span class="mx-1 fs-5">Octubre</span>
      <span class="mx-2 fw-light">2021, miércoles</span>
    </div>

    <div class="entry-description">
      Sunt nisi commodo deserunt proident. Incididunt minim sint eu sint est
      excepteur esse laboris ea est aliqua eiusmod adipisicing laborum. Sint
      Lorem tempor Lorem est id in culpa consequat ullamco ad dolor cupidatat
      qui. Laboris esse anim duis qui cupidatat adipisicing ut sunt est duis
      tempor enim excepteur laboris. Occaecat qui tempor qui ea nulla veniam
      esse irure sunt do irure laborum officia et.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }
  .entry-description {
    font-size: 12px;
  }
}
</style>
