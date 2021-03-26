<template>
  <div class="">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 text-white"
    >
      <div
        class="flex flex-col justify-between p-6 bg-pink-400 bg-no-repeat bg-right-bottom bg-card-bg h-40 rounded-2xl mb-10"
      >
        <div class="flex flex-row justify-between">
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
          <div>Active Loan</div>
        </div>
        <div class="font-semibold text-xl">
          ₦{{
            this.$store.getters.activeloan !== 0
              ? 0
              : this.$store.getters.activeloan.offer_amount
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          }}
        </div>
      </div>
      <div
        class="flex flex-col justify-between p-6 bg-blue-400 bg-no-repeat bg-right-bottom bg-card-bg h-40 rounded-2xl mb-10"
      >
        <div class="flex flex-row justify-between">
          <div>
            <svg
              class="w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
            >
              <g>
                <g>
                  <path
                    d="M467,61H165c-24.82,0-45,20.19-45,45c0,24.82,20.18,45,45,45h302c24.81,0,45-20.18,45-45C512,81.19,491.81,61,467,61z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M467,211H165c-24.82,0-45,20.19-45,45c0,24.82,20.18,45,45,45h302c24.81,0,45-20.18,45-45C512,231.19,491.81,211,467,211z    "
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M467,361H165c-24.82,0-45,20.19-45,45c0,24.82,20.18,45,45,45h302c24.81,0,45-20.18,45-45C512,381.19,491.81,361,467,361z    "
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M45,61C20.18,61,0,81.19,0,106c0,24.82,20.18,45,45,45c24.81,0,45-20.18,45-45C90,81.19,69.81,61,45,61z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M45,211c-24.82,0-45,20.19-45,45c0,24.82,20.18,45,45,45c24.81,0,45-20.18,45-45C90,231.19,69.81,211,45,211z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M45,361c-24.82,0-45,20.19-45,45c0,24.82,20.18,45,45,45c24.81,0,45-20.18,45-45C90,381.19,69.81,361,45,361z"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div>Total Loans</div>
        </div>
        <div class="font-semibold text-xl">
          ₦{{ this.$store.getters.totalloans }}
        </div>
      </div>
      <div
        class="flex flex-col justify-between p-6 bg-orange-400 bg-no-repeat bg-right-bottom bg-card-bg h-40 rounded-2xl mb-10"
      >
        <div class="flex flex-row justify-between">
          <div>
            <svg
              class="w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 49.5 33"
            >
              <path
                id="Icon_material-playlist-add-check"
                data-name="Icon material-playlist-add-check"
                d="M31.286,18.429H3v4.714H31.286Zm0-9.429H3v4.714H31.286ZM3,32.571H21.857V27.857H3ZM48.964,21.964,52.5,25.5,36.024,42,25.393,31.393l3.536-3.536,7.095,7.071Z"
                transform="translate(-3 -9)"
                fill="#fff"
              />
            </svg>
          </div>
          <div>Closed Loans</div>
        </div>
        <div class="font-semibold text-xl">
          ₦{{ this.$store.getters.closedloans }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
