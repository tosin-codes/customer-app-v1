<template>
  <div class="grid grid-cols-12 maxWidth mx-auto">
    <!-- <AppHeader />
    <DashboardNav /> -->
    <DashboardFixed />
    <Nuxt class=""/>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader'
import DashboardNav from '../components/DashboardNav'
import DashboardFixed from '../components/DashboardFixed'

export default {
  components: {
    AppHeader,
    DashboardNav,
    DashboardFixed
  }
}
</script>

<style>
html {
  font-family:
    'Poppins',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 3px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}



.my-container {
  @apply mt-16 col-start-1 col-end-13 px-3 py-6 mx-auto bg-gray-200 bg-opacity-50 min-h-screen rounded-md

}

@screen md {
  .my-container {
    @apply col-start-4 col-end-13 p-12 w-full
  }
}

.maxWidth {
  max-width: 1500px;
}

</style>
