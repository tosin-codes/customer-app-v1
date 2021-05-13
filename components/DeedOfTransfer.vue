<template>
  <div>
    <client-only>
      <div class="container md:px-20 px-3">
        <div
          class="text-orange-700 font-semibold text-center mb-4 text-base md:text-xl"
        >
          DEED OF TRANSFER
        </div>
        <div class="md:text-justify">
          <div>
            This DEED OF TRANSFER is made this {{ date }} day, of {{ month }},
            {{ year }} between CONSYNERGY LIMITED (also known as the “Company”)
            of Plot 14 Ladipo Omotesho Cole Street, Lekki Phase 1, Lagos
            (Hereinafter referred to as “The Transferee”) of the first part;<br />
            AND

            <span class="uppercase font-bold"
              >{{ $store.getters.user.first_name }}
              {{ $store.getters.user.last_name }}
            </span>
            (also known as Grantor) of
            <span class="uppercase font-bold"
              >{{
                $store.getters.user.address
                  ? $store.getters.user.address
                  : 'No address specified'
              }},
              {{
                $store.getters.user.state
                  ? $store.getters.user.state
                  : 'No state specified'
              }}
            </span>
            (Hereinafter referred to as “The Borrower”) which expression shall
            where the context so admits, include his/her heirs, assigns and
            legal representatives) of the second part.
          </div>
          <br />
          <div>
            <div class="md:text-justify">
              In consideration of the amount paid to “The Transferor” by “The
              Transferee”, the receipt of which “The Transferor” hereby
              acknowledges, “The Transferor” doth hereby Assign unto “The
              Transferee”, his/her executors, administrators and assigns, all of
              the Interest and Legal Title to the Motor Vehicle (particularly
              described in the Schedule A attached herein).
            </div>
            <br />
            <div class="md:text-justify">
              “The Transferor” declares that he/she is the exclusive legal owner
              of the above-mentioned Motor Vehicle and has the legal and
              absolute authority to transfer Legal Title in “The Motor Vehicle”
              to “The Transferee”. “The Transferor” further affirms that “The
              Motor Vehicle” is free from all legal claims, lien, and
              encumbrances of any kind except the lien and security interest in
              favour of “The Transferee” created by this Agreement.
            </div>
            <br />
            <div class="md:text-justify">
              <span class="font-semibold text-lg"
                >PARTIES TO THIS AGREEMENT HEREBY AGREE</span
              >
              that upon full and satisfactory fulfilment of all the obligations
              relating to the Credit &#38; Security Agreement, Legal Title and
              other interests in the motor vehicle shall revert to “The
              Transferor”.
            </div>
            <br />
            <div class="md:text-justify">
              <div class="mt-4">
                <span class="font-semibold"> IN WITNESS OF WHICH</span> the
                Parties hereto have executed this agreement on the day and year
                first mentioned above.
              </div>
              <div
                class="flex justify-between items-center flex-col-reverse md:flex-row mt-8 mb-4"
              >
                <div>
                  Signed and Delivered <br />
                  By the within named Borrower/Grantor
                </div>
                <div class="flex flex-col">
                  <br />
                  <div></div>
                  <div class="font-semibold capitalize">
                    {{ $store.getters.user.first_name }}
                    {{ $store.getters.user.last_name }}
                  </div>
                  <br />
                </div>
              </div>
              <div
                class="flex justify-between items-center flex-col-reverse md:flex-row mt-8 mb-4"
              >
                <div>
                  Signed and Delivered <br />
                  By the within named Creditor
                </div>
                <div class="flex flex-col">
                  <img src="~/assets/images/signature.png" alt="" />
                  <div class="font-semibold">CONSYNERGY LIMITED</div>
                  <br />
                </div>
              </div>
            </div>
            <br />
            <div>
              <div>
                <h2 class="font-medium text-lg">Schedule A</h2>
                <h3 class="font-medium text-lg">
                  FULL DESCRIPTION OF THE MOTOR VEHICLE
                </h3>
              </div>
              <div class="px-4 py-5">
                <table class="modal__table table-striped">
                  <tbody>
                    <tr>
                      <td class="text-xs">Year</td>
                      <td class="text-xs">{{ summaryDetails.year }}</td>
                    </tr>
                    <tr>
                      <td class="text-xs">Make</td>
                      <td class="text-xs">{{ summaryDetails.make }}</td>
                    </tr>
                    <tr>
                      <td class="text-xs">Model</td>
                      <td class="text-xs">{{ summaryDetails.model }}</td>
                    </tr>
                    <tr>
                      <td class="text-xs">Body Style</td>
                      <td class="text-xs">{{ summaryDetails.size }}</td>
                    </tr>
                    <tr>
                      <td class="text-xs">Plate Number</td>
                      <td class="text-xs">{{ summaryDetails.plate_number }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <button
          class="mt-5 h-10 md:h-12 flex justify-center py-2 px-4 text-sm md:text-base font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          @click.prevent="displayOTPForm"
        >
          CONTINUE
        </button>
      </div>
    </client-only>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      months: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      month: '',
      date: '',
      year: '',
    }
  },
  computed: {
    ...mapState('information', { summaryDetails: (state) => state }),
  },
  filters: {
    currency(amount) {
      const amt = Number(amount)
      return (
        (amt && amt.toLocaleString(undefined, { maximumFractionDigits: 0 })) ||
        '0'
      )
    },
  },
  methods: {
    displayOTPForm() {
      this.$emit('otpFormTwo')
    },
    startClock() {
      let vm = this

      let d = new Date()
      let j = d.getMonth()
      let k = d.getDate()
      if (k == 1 || k == 11 || k == 21 || k == 31) {
        return (this.date = `${k}st`)
      } else if (k == 2 || k == 22) {
        return (this.date = `${k}nd`)
      } else if (k == 3) {
        return (this.date = `${k}rd`)
      } else {
        this.date = `${k}th`
      }
      this.year = d.getFullYear()

      this.month = this.months[j]
    },
  },
  created() {
    this.startClock()
  },
}
</script>

<style coped>
.modal__content {
  background-color: #fff;
  border-radius: 5px;
}

.modal__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #dee2e6;
}

.modal__table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  border-collapse: collapse;
  border: 1px solid #dee2e6;
}

.modal__table td {
  padding: 0.75rem;
  vertical-align: top;
  border: 1px solid #dee2e6;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
