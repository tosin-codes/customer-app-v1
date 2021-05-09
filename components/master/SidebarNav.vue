<template>
  <div>
    <div class="fixed z-0 mt-20 px-6 py-12 w-full maxWidth">
      <div class="md:grid md:grid-cols-12 hidden">
        <div class="col-start-1 col-end-4">
          <div class="flex flex-col">
            <div class="flex flex-row items-center">
              <div>
                <img
                  class="rounded-full w-16 lg:mr-5 md:mr-2"
                  src="~/assets/images/profile.jpg"
                  alt=""
                />
              </div>
              <div>
                <client-only placeholder="Loading...">
                  <div class="font-bold text-orange-600">
                    {{ this.$store.getters.user.first_name }}
                    {{ this.$store.getters.user.last_name }}
                  </div>
                  <!-- <div
                    class="text-sm font-light text-green-500"
                    v-if="!this.$store.getters.user.active"
                  >
                    not verified
                  </div>
                  <div class="text-sm font-light text-green-500" v-else>
                    verified
                  </div> -->
                </client-only>
              </div>
            </div>
            <!-- <div class="text-gray-900 font-semibold my-8">Dashboard</div> -->
            <div class="pr-6 lg:pr-24 text-gray-600 mt-10">
              <nuxt-link
                to="/dashboard"
                class="flex flex-row justify-between items-center mb-8 hover:text-orange-500"
              >
                <div class="font-semibold">Dashboard</div>
                <div>
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="{2}"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </div>
              </nuxt-link>
              <nuxt-link
                to="/create-loan"
                class="flex flex-row justify-between items-center mb-8 hover:text-orange-500"
              >
                <div class="font-semibold">New Loan</div>
                <div>
                  <svg
                    class="w-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-29 0 426 426"
                  >
                    <path
                      d="m304.78125 74h51.820312l-60.601562-62.140625v53.640625c0 4.574219 4.203125 8.5 8.78125 8.5zm0 0"
                    />
                    <path
                      d="m280 65.5v-65.5h-167.519531c-12.128907 0-22.480469 10-22.480469 22.132812v311.46875c.207031 12.3125 10.164062 22.234376 22.480469 22.398438h233.039062c12.316407-.164062 22.273438-10.085938 22.480469-22.398438v-243.601562h-63.21875c-13.398438 0-24.78125-11.101562-24.78125-24.5zm-51 92.730469c-17.863281-.003907-32.949219-13.273438-35.230469-30.992188-2.28125-17.714843 8.949219-34.375 26.230469-38.902343v-11.335938c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v10.875c16.578125 3.355469 28.5 17.914062 28.523438 34.824219 0 4.417969-3.582032 8-8 8-4.417969 0-8-3.582031-8-8 0-10.78125-8.742188-19.523438-19.527344-19.519531-10.78125 0-19.523438 8.742187-19.519532 19.523437 0 10.785156 8.742188 19.523437 19.523438 19.523437 18.257812.003907 33.539062 13.84375 35.347656 32.007813 1.808594 18.167969-10.449218 34.746094-28.347656 38.347656v9.417969c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8v-9.882812c-15.613281-4.109376-26.503906-18.21875-26.523438-34.363282 0-4.421875 3.582032-8 8-8 4.417969 0 8 3.578125 8 8-.003906 10.78125 8.738282 19.523438 19.523438 19.523438 10.78125 0 19.523438-8.742188 19.523438-19.523438 0-10.785156-8.738282-19.527344-19.523438-19.527344zm-96.320312 92.769531h112.320312c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8h-112.320312c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8zm195.621093 52c0 4.417969-3.582031 8-8 8h-187.621093c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h187.621093c4.417969 0 8 3.582031 8 8zm0 0"
                    />
                    <path
                      d="m74 333.601562v-263.601562h-51.519531c-12.316407.164062-22.273438 10.085938-22.480469 22.398438v311.46875c0 12.132812 10.351562 22.132812 22.480469 22.132812h233.039062c12.128907 0 22.480469-10 22.480469-22.132812v-31.867188h-165.519531c-20.953125 0-38.480469-17.449219-38.480469-38.398438zm0 0"
                    />
                  </svg>
                </div>
              </nuxt-link>
              <nuxt-link
                to="/active-loans"
                class="flex flex-row justify-between items-center my-8 hover:text-orange-500"
              >
                <div class="font-semibold">Active Loans</div>
                <div>
                  <svg
                    class="w-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 41.708 41.708"
                    xml:space="preserve"
                  >
                    <g>
                      <path
                        d="M38.05,35.219H9.989c-1.846,0-3.342-1.496-3.342-3.343V3.967c0-1.846-1.411-3.342-3.151-3.342   c-1.74,0-3.151,1.496-3.151,3.342v27.91c0,1.846-0.026,4.753-0.03,6.493c-0.005,1.739,0.02,3.187,0.026,3.239   c0.005,0.055,1.415,0.099,3.156,0.099s3.151-0.042,3.151-0.093s1.496-0.094,3.342-0.094h28.062c1.846,0,3.342-1.41,3.342-3.15   C41.392,36.629,39.896,35.219,38.05,35.219z"
                      />
                      <path
                        d="M24.91,5.519c-2.426,2.426-11.489,11.49-11.489,11.49c-0.979,0.979-0.979,2.566,0,3.545l1.292,1.292   c0.326,0.326,0.326,0.855,0,1.182l-5.279,5.279c-0.979,0.979-0.979,2.565,0,3.545c0.49,0.49,1.131,0.733,1.773,0.733   c0.641,0,1.283-0.245,1.772-0.733l7.642-7.643c0.47-0.47,0.734-1.107,0.734-1.773c0-0.664-0.264-1.301-0.734-1.771l-1.292-1.292   c-0.326-0.326-0.326-0.855,0-1.182l9.126-9.126c0.326-0.326,0.326-0.855,0-1.182l-2.362-2.363   C25.766,5.192,25.237,5.192,24.91,5.519z"
                      />
                      <path
                        d="M24.087,0.923l2.592,2.322l4.232,3.794l2.591,2.322c0.569,0.51,1.03,0.339,1.03-0.382V1.306C34.533,0.585,33.88,0,33.076,0   h-8.561C23.709,0,23.519,0.414,24.087,0.923z"
                      />
                    </g>
                  </svg>
                </div>
              </nuxt-link>
              <nuxt-link
                to="/account"
                class="flex flex-row justify-between items-center my-8 hover:text-orange-500"
              >
                <div class="font-semibold">Bank Accounts</div>
                <div>
                  <svg
                    class="w-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 47.001 47.001"
                    style="enable-background: new 0 0 47.001 47.001"
                    xml:space="preserve"
                  >
                    <g>
                      <g id="Layer_1_78_">
                        <g>
                          <path
                            d="M44.845,42.718H2.136C0.956,42.718,0,43.674,0,44.855c0,1.179,0.956,2.135,2.136,2.135h42.708     c1.18,0,2.136-0.956,2.136-2.135C46.979,43.674,46.023,42.718,44.845,42.718z"
                          />
                          <path
                            d="M4.805,37.165c-1.18,0-2.136,0.956-2.136,2.136s0.956,2.137,2.136,2.137h37.37c1.18,0,2.136-0.957,2.136-2.137     s-0.956-2.136-2.136-2.136h-0.533V17.945h0.533c0.591,0,1.067-0.478,1.067-1.067s-0.478-1.067-1.067-1.067H4.805     c-0.59,0-1.067,0.478-1.067,1.067s0.478,1.067,1.067,1.067h0.534v19.219H4.805z M37.37,17.945v19.219h-6.406V17.945H37.37z      M26.692,17.945v19.219h-6.406V17.945H26.692z M9.609,17.945h6.406v19.219H9.609V17.945z"
                          />
                          <path
                            d="M2.136,13.891h42.708c0.007,0,0.015,0,0.021,0c1.181,0,2.136-0.956,2.136-2.136c0-0.938-0.604-1.733-1.443-2.021     l-21.19-9.535c-0.557-0.25-1.194-0.25-1.752,0L1.26,9.808c-0.919,0.414-1.424,1.412-1.212,2.396     C0.259,13.188,1.129,13.891,2.136,13.891z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </nuxt-link>
              <nuxt-link
                to="/history"
                class="flex flex-row justify-between items-center my-8 hover:text-orange-500"
              >
                <div class="font-semibold">Loan History</div>
                <div>
                  <svg
                    class="w-5 fill-current"
                    viewBox="0 0 448 448"
                    style="enable-background: new 0 0 448 448"
                    xml:space="preserve"
                  >
                    <g>
                      <g>
                        <g>
                          <path
                            d="M255.893,32C149.76,32,64,117.973,64,224H0l83.093,83.093l1.493,3.093L170.667,224h-64     c0-82.453,66.88-149.333,149.333-149.333S405.333,141.547,405.333,224S338.453,373.333,256,373.333     c-41.28,0-78.507-16.853-105.493-43.84L120.32,359.68C154.987,394.453,202.88,416,255.893,416C362.027,416,448,330.027,448,224     S362.027,32,255.893,32z"
                          />
                          <polygon
                            points="234.667,138.667 234.667,245.333 325.973,299.52 341.333,273.6 266.667,229.333 266.667,138.667    "
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </nuxt-link>
              <nuxt-link
                to="/profile"
                class="flex flex-row justify-between items-center my-8 hover:text-orange-500"
              >
                <div class="font-semibold">Profile</div>
                <div>
                  <svg
                    class="w-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 510 510"
                    xml:space="preserve"
                  >
                    <g id="account-circle">
                      <path
                        d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M255,76.5    c43.35,0,76.5,33.15,76.5,76.5s-33.15,76.5-76.5,76.5c-43.35,0-76.5-33.15-76.5-76.5S211.65,76.5,255,76.5z M255,438.6    c-63.75,0-119.85-33.149-153-81.6c0-51,102-79.05,153-79.05S408,306,408,357C374.85,405.45,318.75,438.6,255,438.6z"
                      />
                    </g>
                  </svg>
                </div>
              </nuxt-link>
              <nuxt-link to="/create-loan" v-if="!activeloan">
                <div
                  class="rounded-full bg-orange-500 hover:bg-orange-600 text-base py-3 text-white text-center"
                >
                  Apply for a Loan
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-start-4 col-end-13 hidden"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SidebarNav',
  computed: {
    ...mapGetters(['activeloan']),
  },
}
</script>

<style></style>
