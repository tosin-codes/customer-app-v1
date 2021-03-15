<template>
  <div>
    <div class="fixed z-20 w-full maxWidth bg-white">
      <header class="flex flex-row justify-between md:grid md:grid-cols-12 py-3 px-6 items-center">
        <nuxt-link to="/">
          <div class="md:col-start-1 md:col-end-4">
            <img class="w-24" src="../assets/images/logo.png" alt="logo" />
          </div>
        </nuxt-link>
        <div
          class="flex flex-row md:col-start-4 md:col-end-13 md:flex md:flex-row md:justify-between md:items-center"
        >
          <div class="px-3 py-1 flex">
            <svg
              class="w-4 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style="enable-background: new 0 0 56.966 56.966"
              xml:space="preserve"
              fill="#B7B7B7"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
              />
            </svg>
            <input class="bg-gray-600 bg-opacity-0 outline-none w-24 md:w-full" type="search" placeholder="Search" />
          </div>

          <div class="md:hidden -mr-2 self-center">
            <button
              type="button"
              class="bg-white rounded-b-md p-2 inline-flex text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              @click="toggleNav"
            >
              <span class="sr-only">Close menu</span>
              <!-- Heroicon name: outline/x -->
              <div v-html="navSVG"></div>
            </button>
          </div>

          <div class="hidden md:flex md:flex-row items-center">
            <div class="md:flex items-center">
              <div>
                <img
                  class="w-12 rounded-full"
                  src="../assets/images/profile.jpg"
                  alt=""
                />
              </div>
              <div class="ml-4">Fagunjade Folajimi</div>
            </div>
            <nuxt-link to="/" class="md:mx-12 w-5 text-gray-700">
              <svg
                class="inline-block fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style="enable-background: new 0 0 512 512"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M467.812,431.851l-36.629-61.056c-16.917-28.181-25.856-60.459-25.856-93.312V224c0-67.52-45.056-124.629-106.667-143.04    V42.667C298.66,19.136,279.524,0,255.993,0s-42.667,19.136-42.667,42.667V80.96C151.716,99.371,106.66,156.48,106.66,224v53.483    c0,32.853-8.939,65.109-25.835,93.291l-36.629,61.056c-1.984,3.307-2.027,7.403-0.128,10.752c1.899,3.349,5.419,5.419,9.259,5.419    H458.66c3.84,0,7.381-2.069,9.28-5.397C469.839,439.275,469.775,435.136,467.812,431.851z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M188.815,469.333C200.847,494.464,226.319,512,255.993,512s55.147-17.536,67.179-42.667H188.815z"
                    />
                  </g>
                </g>
              </svg>
            </nuxt-link>
            <nuxt-link to="/" class="w-5 text-gray-700">
              <svg
                class="inline-block fill-current"
                xmlns="http://www.w3.org/2000/svg"
                height=""
                viewBox="0 0 511 512"
                width=""
              >
                <path
                  d="m361.5 392v40c0 44.113281-35.886719 80-80 80h-201c-44.113281 0-80-35.886719-80-80v-352c0-44.113281 35.886719-80 80-80h201c44.113281 0 80 35.886719 80 80v40c0 11.046875-8.953125 20-20 20s-20-8.953125-20-20v-40c0-22.054688-17.945312-40-40-40h-201c-22.054688 0-40 17.945312-40 40v352c0 22.054688 17.945312 40 40 40h201c22.054688 0 40-17.945312 40-40v-40c0-11.046875 8.953125-20 20-20s20 8.953125 20 20zm136.355469-170.355469-44.785157-44.785156c-7.8125-7.8125-20.476562-7.8125-28.285156 0-7.8125 7.808594-7.8125 20.472656 0 28.28125l31.855469 31.859375h-240.140625c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h240.140625l-31.855469 31.859375c-7.8125 7.808594-7.8125 20.472656 0 28.28125 3.90625 3.90625 9.023438 5.859375 14.140625 5.859375 5.121094 0 10.238281-1.953125 14.144531-5.859375l44.785157-44.785156c19.496093-19.496094 19.496093-51.214844 0-70.710938zm0 0"
                />
              </svg>
            </nuxt-link>
          </div>
        </div>
      </header>

      <div class="fixed mx-auto w-full md:hidden">
        <div v-show="navShow" class="py-6 z-20 animate-slide rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <MobileNav />
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import MobileNav from './MobileNav'
export default {
  components: {
    MobileNav
  },
  data () {
    return {
      burger:  `<svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor" 
                  width="24" height="24" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    d="M24 
                    6h-24v-4h24v4zm0 
                    4h-24v4h24v-4zm0 
                    8h-24v4h24v-4z"
                  />
                </svg>`,
      close: `<svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>`,
      navSVG: `<svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor" 
                  width="24" height="24" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    d="M24 
                    6h-24v-4h24v4zm0 
                    4h-24v4h24v-4zm0 
                    8h-24v4h24v-4z"
                  />
                </svg>`,
      navShow: false,
    }
  },
  methods: {
    toggleNav(){
      if(this.navSVG != this.close) {
        this.navSVG = this.close;
        this.navShow = true
      } else {this.navSVG = this.burger; this.navShow = false}
    }
  }
}
</script>

<style>
@keyframes slideDown {
  0% {
    transform: translateY(-200%);
  }
  
  100% {
    transform: none;
  }
}

.animate-slide {
  animation-fill-mode: both;
  animation-duration: 1000ms;
  animation-iteration-count: 1;
  opacity: 1;
  animation-name: slideDown;
}
</style>