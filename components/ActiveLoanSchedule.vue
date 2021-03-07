<template>
  <div>
    <!-- <div class="p-6 bg-white rounded-lg shadow-lg">
      <div class="mb-3">Active Loan Schedule</div>
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="py-3 text-left text-xs font-medium text-orange-600 uppercase tracking-wider">
              Repayment
            </th>
            <th scope="col" class="py-3 text-left text-xs font-medium text-orange-600 uppercase tracking-wider">
              Fines
            </th>
            <th scope="col" class="py-3 text-left text-xs font-medium text-orange-600 uppercase tracking-wider">
              Paid
            </th>
            <th scope="col" class="py-3 text-left text-xs font-medium text-orange-600 uppercase tracking-wider">
              Balance
            </th>
            <th scope="col" class="py-3 text-left text-xs font-medium text-orange-600 uppercase tracking-wider">
              Date
            </th>
            <th scope="col" class="py-3 text-left text-xs font-medium text-orange-600 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr class="border-b border-gray-200">
            <td class="py-4 whitespace-nowrap text-sm text-gray-900">
              ₦1,200,000
            </td>
            <td class="py-4 whitespace-nowrap text-sm text-gray-800">
              ₦1,200,000
            </td>
            <td class="py-4 whitespace-nowrap text-sm text-gray-800">
              ₦1,200,000
            </td>
            <td class="py-4 whitespace-nowrap text-sm text-gray-800">
              ₦1,200,000
            </td>
            <td class="py-4 whitespace-nowrap text-sm text-gray-800">
              25 April, 2021
            </td>
            <td class="w-24 py-4 whitespace-nowrap text-sm text-gray-800">
              <div class="p-1 bg-green-400 text-center font-light text-white">PENDING</div>
            </td>
          </tr>
          <tr class="border-b-2 border-gray-200">
            <td class="py-4 whitespace-nowrap text-sm text-gray-900">
              ₦1,200,000
            </td>
            <td class="py-4 whitespace-nowrap text-sm text-gray-800">
              ₦1,200,000
            </td>
            <td class="py-4 whitespace-nowrap text-sm text-gray-800">
              ₦1,200,000
            </td>
            <td class="py-4 whitespace-nowrap text-sm text-gray-800">
              ₦1,200,000
            </td>
            <td class="py-4 whitespace-nowrap text-sm text-gray-800">
              25 April, 2021
            </td>
            <td class="w-24 py-4 whitespace-nowrap text-sm text-gray-800">
              <div class="p-1 bg-green-400 text-center font-light text-white">PENDING</div>
            </td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="py-4 whitespace-nowrap text-sm text-gray-900">
              ₦1,200,000
            </td>
            <td class="py-4 whitespace-nowrap text-sm text-gray-800">
              ₦1,200,000
            </td>
            <td class="py-4 whitespace-nowrap text-sm text-gray-800">
              ₦1,200,000
            </td>
            <td class="py-4 whitespace-nowrap text-sm text-gray-800">
              ₦1,200,000
            </td>
            <td class="py-4 whitespace-nowrap text-sm text-gray-800">
              25 April, 2021
            </td>
            <td class="w-24 py-4 whitespace-nowrap text-sm text-gray-800">
              <div class="p-1 bg-green-400 text-center font-light text-white">PENDING</div>
            </td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="py-4 whitespace-nowrap text-sm text-gray-900">
              ₦1,200,000
            </td>
            <td class="py-4 whitespace-nowrap text-sm text-gray-800">
              ₦1,200,000
            </td>
            <td class="py-4 whitespace-nowrap text-sm text-gray-800">
              ₦1,200,000
            </td>
            <td class="py-4 whitespace-nowrap text-sm text-gray-800">
              ₦1,200,000
            </td>
            <td class="py-4 whitespace-nowrap text-sm text-gray-800">
              25 April, 2021
            </td>
            <td class="w-24 py-4 whitespace-nowrap text-sm text-gray-800">
              <div class="p-1 bg-green-400 text-center font-light text-white">PENDING</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div> -->
    
    <div class="p-6 bg-white rounded-lg shadow-lg">
      <div class="mb-3">Active Loan Schedule</div>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block w-screen md:w-full min-w-full sm:px-3 lg:px-4">
            <div class="overflow-x-auto border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Repayment
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fines
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Paid
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Balance
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-normal text-gray-900">
                      ₦1,200,000
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₦1,200,000
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₦1,200,000
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₦1,200,000
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      25 April, 2021
                    </td>
                    <td class="uppercase px-6 py-4 whitespace-nowrap text-center text-sm font-light">
                      <div class="bg-green-200 py-1 px-2">success</div>
                    </td>
                  </tr>

                  <tr class="bg-gray-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-normal text-gray-900">
                      ₦1,200,000
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₦1,200,000
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₦1,200,000
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₦1,200,000
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      25 April, 2021
                    </td>
                    <td class="uppercase px-6 py-4 whitespace-nowrap text-center text-sm font-light">
                      <div class="bg-green-200 py-1 px-2">success</div>
                    </td>
                  </tr>
                  <tr class="bg-white">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-normal text-gray-900">
                      ₦1,200,000
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₦1,200,000
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₦1,200,000
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₦1,200,000
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      25 April, 2021
                    </td>
                    <td class="uppercase px-6 py-4 whitespace-nowrap text-center text-sm font-light">
                      <div class="bg-green-200 py-1 px-2">success</div>
                    </td>
                  </tr>

                  <tr class="bg-gray-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-normal text-gray-900">
                      ₦1,200,000
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₦1,200,000
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₦1,200,000
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₦1,200,000
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      25 April, 2021
                    </td>
                    <td class="uppercase px-6 py-4 whitespace-nowrap text-center text-sm font-light">
                      <div class="bg-green-200 py-1 px-2">success</div>
                    </td>
                  </tr>


                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>