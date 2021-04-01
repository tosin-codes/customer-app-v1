<template>
  <div>
    <div class="fixed z-0 mt-16 px-6 py-12 w-full maxWidth">
      <div class="md:grid md:grid-cols-12 hidden">
        <div class="col-start-1 col-end-4">
          <div class="flex flex-col">
            <div class="flex flex-row items-center">
              <div>
                <img
                  class="rounded-full w-16 mr-5"
                  src="~/assets/images/profile.jpg"
                  alt=""
                />
              </div>
              <div>
                <client-only placeholder="Loading...">
                  <div class="font-bold text-orange-600">{{ this.$store.getters.user.first_name }} {{ this.$store.getters.user.last_name }}</div>
                  <div class="text-sm font-light text-green-500" v-if="!this.$store.getters.user.active">not verified</div>
                  <div class="text-sm font-light text-green-500" v-else>verified</div>
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
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                </div>
              </nuxt-link>
              <nuxt-link
                to="#"
                class="flex flex-row justify-between items-center mb-8 hover:text-orange-500"
              >
                <div class="font-semibold">My Loans</div>
                <div>
                  <svg
                    class="fill-current w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 308.99 308.99"
                    xml:space="preserve"
                  >
                    <g>
                      <path
                        d="M301.135,82.438L159.869,19.441c-3.42-1.537-7.329-1.537-10.767,0L7.843,82.438c-4.611,2.053-7.656,6.572-7.827,11.623    c-0.165,5.041,2.534,9.751,6.993,12.123l141.257,75.333c1.948,1.045,4.083,1.556,6.224,1.556c2.152,0,4.284-0.511,6.235-1.556    l141.264-75.333c4.455-2.372,7.157-7.082,6.995-12.123C308.791,89.01,305.753,84.491,301.135,82.438z"
                      />
                      <path
                        d="M289.527,138.805l-135.045,72.04l-135.023-72.04c-6.464-3.449-14.468-1.002-17.894,5.45    c-3.45,6.449-1.003,14.451,5.443,17.891L148.265,237.5c1.948,1.038,4.083,1.555,6.224,1.555c2.152,0,4.284-0.51,6.235-1.555    l141.264-75.354c6.431-3.44,8.875-11.442,5.445-17.891C303.981,137.802,295.971,135.355,289.527,138.805z"
                      />
                      <path
                        d="M289.527,190.476l-135.045,72.016L19.459,190.476c-6.464-3.452-14.468-1.002-17.894,5.441    c-3.45,6.449-1.003,14.459,5.443,17.894l141.257,75.33c1.948,1.045,4.083,1.562,6.224,1.562c2.152,0,4.284-0.51,6.235-1.562    l141.264-75.33c6.431-3.435,8.875-11.444,5.445-17.894C303.981,189.474,295.982,187.023,289.527,190.476z"
                      />
                    </g>
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
                <div class="font-semibold">Accounts</div>
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
                <div class="rounded-full bg-orange-500 hover:bg-orange-600 text-base py-3 text-white text-center">
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
    name:'SidebarNav',
    computed: {
    ...mapGetters([
      'activeloan'
    ])
  },
}
</script>

<style>
</style>