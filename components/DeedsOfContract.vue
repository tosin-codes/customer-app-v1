<template>
  <div>
    <client-only>
      <div class="container md:px-20 px-3">
        <div
          class="text-orange-700 font-semibold text-center mb-4 text-base md:text-xl"
        >
          CREDIT &#38; SECURITY AGREEMENT
        </div>
        <div class="md:text-justify">
          <div>
            This Credit &#38; Security Agreement is made on the {{ date }} day,
            of {{ month }} {{ year }} between CONSYNERGY LIMITED of Plot 14
            Ladipo Omotesho Cole Street, Lekki Phase 1, Lagos (Hereinafter
            referred to as “The Creditor”) of the first part;<br />
            AND
            <span class="uppercase font-bold"
              >{{ $store.getters.user.first_name }}
              {{ $store.getters.user.last_name }}
            </span>
            (also known as Grantor) of _______Lagos (Hereinafter referred to as
            “The Borrower”) which expression shall where the context so admits,
            include his/her heirs, assigns and legal representatives) of the
            second part.
          </div>
          <br />
          <div>
            <h2 class="mb-3 font-semibold text-lg">WHEREAS:</h2>
            <ol class="list-decimal ml-2">
              <li class="mb-2">
                “The Creditor” has agreed to grant a credit facility in the sum
                of
                <span class="uppercase font-bold"
                  >₦{{
                    $store.getters.user.active_loan.offer_amount | currency
                  }}
                </span>
                to the Borrower.
              </li>
              <li class="mb-2">
                The Borrower has agreed to provide his/her car (Hereinafter
                referred to as “The Collateral”), a full description of which is
                provided in Schedule A which forms an integral part of this
                agreement as security for the credit facility under this
                Agreement.
              </li>
              <li class="mb-2">
                Both parties agree that the credit facility shall be given out
                under the framework of the Secured Transactions in Movable
                Assets Act 2017 and shall execute this Credit &#38; Security
                Agreement along with a Financing Statement to be registered with
                the Collateral Registry.
              </li>
              <li class="mb-2">
                Both parties further agree that the covenants expressed in this
                Credit &#38; Security Agreement and the Secured Transactions in
                Movable Assets Act mentioned in C above shall be binding and
                enforceable as under this Agreement.
              </li>
            </ol>
          </div>
          <div>
            <div class="mt-6">
              <div
                class="mb-3 font-semibold text-lg text-center md:text-justify"
              >
                TERMS OF THE CREDIT FACILITY
              </div>
              <ol class="list-decimal ml-2">
                <li class="mb-2">
                  “The Creditor” shall grant to the Borrower the principal sum
                  of
                  <span class="uppercase font-bold"
                    >₦{{
                      $store.getters.user.active_loan.offer_amount | currency
                    }}</span
                  >
                  and the maturity of the credit facility is
                  <span class="uppercase font-bold">
                    {{ $store.getters.user.active_loan.desired_tenor }}
                    Months.</span
                  >
                </li>
                <li class="mb-2">
                  The fixed monthly interest rate of the credit facility is
                  8.00% and it is calculated by the “The Creditor” from the date
                  of credit disbursement to the date of full repayment of the
                  credit facility by “The Borrower” as contained in Schedule B
                  which also forms an integral part of this agreement. This rate
                  is subject to upward or downward review in line with our cost
                  of capital, money market and macro-economic realities.
                  However, “The Borrower” shall be given ten (10) business days
                  prior notification of any change in rate and the change will
                  be deemed accepted accordingly unless the facility is paid
                  down on the effective date of such upward review at the end of
                  the notice period.
                </li>
                <li class="mb-2">
                  “The Borrower” accepts the agreed value of “The Collateral”
                  for insurance purposes and “The Creditor” shall provide “The
                  Borrower” with an issued comprehensive insurance policy
                  certificate based on this valuation.
                </li>
                <li class="mb-2">
                  By the execution of this Agreement, “The Borrower” indemnifies
                  “The Creditor” by giving the “The Creditor” an Industry Wide
                  Right of set-off using his/her Bank Verification Number (BVN).
                </li>
                <li>
                  The terms, conditions, obligations and covenants contained
                  herein shall be binding on “The Borrowers” respective heirs,
                  personal representatives, successors and assigns. If “The
                  Borrower” is a company, the terms, conditions, obligations and
                  covenants contained herein shall be binding on any
                  entity/company which acquires, merges with, or obtain control
                  of “The Borrower”.
                </li>
                <li>
                  Acceptance of the terms in this Agreement by “The Borrower” is
                  evidenced by executing and returning a copy of this Agreement
                  to “The Creditor”.
                </li>
              </ol>
            </div>

            <div class="mt-6 list-decimal">
              <div
                class="mb-3 font-semibold text-lg text-center md:text-justify"
              >
                TERMS OF THE CREDIT FACILITY
              </div>
              <ol class="list-decimal ml-2">
                <li class="mb-2">
                  “The Borrower” is obliged to wholly repay the credit facility
                  according to the attached repayment plan in Schedule B which
                  forms an integral part of this agreement, otherwise shall be
                  in default and the relevant penalties shall apply.
                </li>

                <li>
                  “The Borrower” irrevocably pledges as follows:
                  <ol class="list-disc mb-2">
                    <li class="p-2">
                      That I “The Borrower”, shall not issue cheques against
                      unfunded accounts in all transactions with “The Creditor”.
                    </li>
                    <li class="p-2">
                      That all cheques issued by me to “The Creditor”, in all
                      transactions shall not be dishonoured for any reason
                      whatsoever, otherwise I shall be liable to sanctions
                      imposed under the Dishonoured Cheques (Offences) Act of
                      1977 and other attendant laws and regulations relating to
                      the issuance of dud cheques
                    </li>
                  </ol>
                </li>
                <li class="mb-2">
                  “The Borrower” is obliged to wholly repay the credit facility
                  according to the attached repayment plan in Schedule B which
                  forms an integral part of this agreement, otherwise shall be
                  in default and the relevant penalties shall apply.
                </li>
                <li class="mb-2">
                  All repayments shall be made into the Bank Account of “The
                  Creditor”.
                </li>
                <li class="mb-2">
                  In the event of Bank Transfers or Cash Deposits, “The
                  Borrower” will ensure that payment is made and received by
                  “The Creditor” on the payment due date according to the
                  attached payment plan in Schedule B, otherwise shall be in
                  default and the relevant penalties shall apply.
                </li>
                <li class="mb-2">
                  2.7. “The Borrower” may terminate the credit facility and
                  repay all or any part of the loan amount on any day before the
                  scheduled repayment due date, by paying to “The Creditor”, all
                  interest, fees and other amounts owed then accrued or due
                  under the credit facility to the date of early repayment
                  (whether or not yet payable). A pre-liquidation fee of 2.5% on
                  the outstanding principal shall apply.
                </li>
              </ol>
            </div>
            <div class="mt-6">
              <div class="font-semibold text-lg text-center md:text-justify">
                SECURITY INTEREST IN THE COLLATERAL
              </div>
              <ol class="list-decimal mt-2 ml-2">
                <li class="mb-2">
                  To secure and ensure the fulfilment of the obligations, “The
                  Borrower” hereby assigns and grants to “The Creditor” (his
                  executors, administrators and assigns), a lien on and security
                  interest in “The Collateral” which is validly created by the
                  execution of this Agreement and a Deed of Transfer. The
                  security interest in the “Collateral” is further validated by
                  the registration of a Financing Statement at the National
                  Collateral Registry (NCR) in line with the guidelines under
                  the Secured Transactions in Movable Assets Act 2017.
                </li>
              </ol>
            </div>

            <div class="mt-6">
              <div class="font-semibold text-lg text-center md:text-justify">
                DECLARATION &#38; WARRANTIES
              </div>
              <p class="text-base font-medium">
                “The Borrower” declares, warrants and covenants to “The
                Creditor” that:
              </p>
              <ol class="list-decimal mt-2 ml-2">
                <li class="mb-2">
                  “The Borrower” confirms to be the only and exclusive legal
                  owner of “The Collateral” and that “The Collateral” does not
                  serve as a pledge or security for any other loan or
                  liabilities.
                </li>
                <li class="mb-2">
                  “The Borrower” has good, marketable and indefeasible title to
                  “The Collateral” and has not made any prior sale, pledge,
                  encumbrance, assignment or other disposition of “The
                  Collateral” and “The Collateral” is free from all encumbrances
                  and rights of setoff of any kind except the lien and security
                  interest in favour of “The Creditor” created by the Deed of
                  Transfer and this Agreement.
                </li>
                <li class="mb-2">
                  “The Borrower” shall not be entitled to transfer or assign any
                  of his/her rights under this agreement.
                </li>
                <li class="mb-2">
                  By the execution of this agreement, “The Borrower” covenants
                  to repay the loan as and when due. If he/she becomes in
                  Default, “The Creditor” shall have the right to report the
                  Default to the CBN through the Credit Risk Management System
                  (CRMS) or by any other means, and request the CBN to exercise
                  its regulatory power to direct all banks and other financial
                  institutions under its regulatory purview to set-off “The
                  Borrower’s” indebtedness from any money standing to “The
                  Borrower’s” credit in any bank account and from any other
                  financial assets they may be holding on behalf of “The
                  Borrower”.
                </li>
                <li class="mb-2">
                  “The Borrower” covenants and warrants that “The Creditor”
                  shall have the power to set-off “The Borrower’s” indebtedness
                  under this agreement from any such monies and funds standing
                  to “The Borrower’s” benefit in any and all such accounts or
                  from any other financial assets belonging to “The Borrower”
                  and in the custody of any such bank or financial institution.
                </li>
                <li class="mb-2">
                  “The Borrower” hereby waive any right of confidentiality,
                  whether arising under common law or statute or in any other
                  manner whatsoever and irrevocably agree that he/she shall not
                  argue to the contrary before any court of law, tribunal,
                  administrative authority or any other body acting in any
                  judicial or quasi-judiciary capacity.
                </li>
                <li class="mb-2">
                  The Borrower” covenants and warrants that the operations of
                  force majeure arising under common law or statute or in any
                  other manner whatsoever would not apply to eliminate or limit
                  nor extend the period of indebtedness or actual indebtedness
                  of “The Borrower” to “The Creditor”. Any extension of time
                  shall be at the sole discretion of “The Creditor”.
                </li>
                <li class="mb-2">
                  All information given by “The Borrower” in the application for
                  this credit facility or thereafter is true, complete, and
                  accurate. If any information given on the application/this
                  Agreement proves to be false or incorrect, “The Creditor”
                  reserves the right to proceed with civil and criminal
                  proceedings against “The Borrower” and all costs incurred in
                  these proceedings shall be wholly borne by “The Borrower”.
                </li>
              </ol>
            </div>

            <div class="mt-6">
              <div class="font-semibold text-lg text-center md:text-justify">
                RIGHTS AND OBLIGATIONS OF THE BORROWER
              </div>

              <ol class="list-decimal mt-2 ml-2">
                <li class="mb-2">
                  “The Borrower” or anyone authorized to drive “The Collateral”
                  must have/possess a valid and authentic driver’s license
                  issued by the appropriate licensing authority in Nigeria for
                  the duration of the credit facility.
                </li>
                <li class="mb-2">
                  In the case of a lost, stolen or expired driver’s license,
                  “The Borrower” or anyone authorized to drive “The Collateral”
                  must apply and be issued a replacement/renewal no later than
                  30(thirty) days after the loss/expiration or execution of this
                  Agreement.
                </li>
                <li class="mb-2">
                  “The Borrower” shall be financially liable to “The Creditor”
                  for any cause of action/claims arising as a result of a breach
                  in clause 1 &#38; 2 above; or any other related driving
                  offences.
                </li>
                <li class="mb-2">
                  “The Borrower” agrees that if the car documents shall expire
                  during the term of the credit facility, “The Creditor” shall
                  renew the said documents and apply the renewal fees to the
                  credit facility obligations of “The Borrower”.
                </li>
                <li class="mb-2">
                  “The Borrower” shall keep usage of “The Collateral” and is
                  required to ensure the safety and integrity of “The
                  Collateral” and to protect it from damage and the possibility
                  of claims from third parties.
                </li>
                <li class="mb-2">
                  “The Borrower” shall immediately notify “The Creditor” of any
                  event causing a material loss or decline in value of “The
                  Collateral”, notwithstanding if it is covered by insurance,
                  and to state the amount of such loss or depreciation.
                </li>
                <li class="mb-2">
                  “The Borrower” must not sell “The Collateral” or offer to sell
                  or otherwise transfer or grant or allow the imposition of a
                  lien or security interest upon “The Collateral” or use any
                  portion thereof in any manner inconsistent with this Agreement
                  without the written approval of “The Creditor” during the term
                  of the credit facility.
                </li>
                <li class="mb-2">
                  “The Borrower” is not allowed to pledge “The collateral” to
                  secure other loans or liabilities without the written approval
                  of “The Creditor”.
                </li>
                <li class="mb-2">
                  “The Borrower” will immediately notify “The Creditor” in
                  writing of any change in name or address.
                </li>
                <li class="mb-2">
                  “The Borrower” irrevocably agrees not to take “The Collateral”
                  out of the registered state of residence during the term of
                  this credit facility.
                </li>
                <li class="mb-2">
                  “The Borrower shall” from time to time and at all reasonable
                  times allow “The Creditor”, by or through any of its officers,
                  agents, attorneys, or accountants, to examine or inspect “The
                  Collateral”, and obtain valuations and audits of “The
                  Collateral”, wherever located.
                </li>
                <li class="mb-2">
                  “The Borrower” is required to take up a comprehensive motor
                  insurance policy with “The Creditor’s” insurance partner to
                  cover the duration of the credit facility plus 1 (one)
                  additional calendar month.
                </li>
                <li class="mb-2">
                  Notwithstanding the foregoing, the insurance policy to be
                  procured by “The Borrower” shall be for a minimum of 3 (three)
                  months. The applicable insurance rate is 3% of the car value
                  unless advised otherwise by “The Creditor’s” insurance
                  partner.
                </li>
                <li class="mb-2">
                  “The Creditor” will obtain said comprehensive insurance policy
                  on “The Collateral” to cover the required period and the cost
                  of said insurance shall be charged to “The Borrower”. In the
                  event of a default in which the validity of the insurance is 1
                  (one) month or less, “The Creditor” shall extend the insurance
                  for an additional 3 (three) months, and the cost of the said
                  insurance renewal shall be added to the credit facility
                  obligations of “The Borrower”.
                </li>
                <li class="mb-2">
                  In the event of a loss of “The Collateral” or a claim on the
                  insurance, all paid out proceeds by the insurance company will
                  be made to “The Creditor” to fulfil any existing obligation
                  owed to “The Creditor” by “The Borrower”. “The Creditor” shall
                  apply such proceeds to the fulfilment of those obligations,
                  inclusive of all costs and charges incurred in doing same.
                </li>
                <li class="mb-2">
                  “The Collateral” shall be equipped with a car tracker. “The
                  Creditor” will obtain the said car tracker from its car
                  tracking partner and install the said car tracker on “The
                  Collateral” to cover the required period. The cost of said car
                  tracker shall be charged to “The Borrower”. And “The Borrower”
                  has given the “The Creditor” irrevocable authority to carry
                  out visibility checks/monitoring of “The Collateral” during
                  the term of the credit facility.
                </li>
                <li class="mb-2">
                  “The Borrower” shall ensure the car tracker remains installed
                  to maintain visibility of “The collateral” throughout the term
                  of the credit facility.
                </li>
                <li class="mb-2">
                  The car tracker remains the property of “The Creditor” until
                  the complete fulfilment of all obligations under this
                  Agreement.
                </li>
                <li class="mb-2">
                  At the end of the credit facility and upon completion of all
                  the obligations under this Agreement, “The Borrower” may
                  request for change of ownership of the car tracker, the cost
                  required for the said change of ownership shall be charged to
                  “The Borrower”.
                </li>
                <li class="mb-2">
                  Following the execution of this agreement, if “The Borrower”
                  decides to withdraw his/her application for the credit
                  facility before disbursement, or within 24 hours of
                  disbursement, “The Borrower” shall be liable to pay the total
                  fee of N20,000 to cover the cost of the vehicle inspection and
                  other ancillary costs.
                </li>
                <li class="mb-2">
                  If “The Borrower” decides to withdraw his application after 24
                  hours of the contract execution and/or disbursement of the
                  loan amount. “The Borrower” shall be liable to repay the
                  outstanding credit facility including accumulated interest and
                  penalties. 5.21. A breach in any of the above clauses shall
                  immediately render the credit facility due.
                </li>
              </ol>
            </div>

            <div class="mt-6">
              <div class="font-semibold text-lg text-center md:text-justify">
                RIGHTS AND OBLIGATIONS OF THE CREDITOR
              </div>

              <ol class="list-decimal mt-2 ml-2">
                <li class="mb-2">
                  By the mere execution of this agreement, “The Borrower”
                  transfers proprietary and full ownership rights in “The
                  Collateral” to “The Creditor.”
                </li>
                <li class="mb-2">
                  “The Borrower” authorizes “The Creditor” to share the details
                  of the repayment obligations contained in Schedule B with
                  his/her agent and/or representative. This right may be
                  withdrawn by written notice via email informing “The Creditor”
                  to discontinue sharing details of the credit facility with
                  “The Borrower’s” agent or representative.
                </li>
                <li class="mb-2">
                  In the event of breaches to clause 5.10 above, “The Creditor”
                  reserves the right to automatically shut down “The Collateral”
                  and/or report “The Collateral” as stolen to the Nigerian
                  Police having authority within the location of “The
                  Collateral” for recovery action.
                </li>
                <li class="mb-2">
                  “The Borrower” hereby authorises “The Creditor” to
                  collect/seize “The Collateral” without any notice upon default
                  in the fulfilment of “The Borrower’s” obligation for the “The
                  Creditor” to dispose of same to recover its exposure without
                  prejudice to any other remedy “The Creditor” may be entitled
                  in law.
                </li>
                <li class="mb-2">
                  “The Creditor” shall have the right to conduct routine
                  assessments of “The Collateral” anytime during the duration of
                  the credit facility and recommend the necessary repairs,
                  and/or take possession of “The Collateral” at its discretion.
                </li>
                <li class="mb-2">
                  “The Creditor” shall not in any way be liable/responsible,
                  notwithstanding anything to the contrary under any applicable
                  laws, for any loss, deterioration of or damage to “The
                  Collateral” on any account whatsoever, while the same is in
                  the possession of “The Creditor” by reason of exercise or
                  non-exercise of any rights and remedies available to “The
                  Creditor”.
                </li>
                <li class="mb-2">
                  If “The Borrower” fails to fulfil his/her obligations under
                  this agreement, “The Creditor” or any of its authorized
                  officers or agents has the right to by its means enter “The
                  Borrower's” premises or access the location of “The
                  Collateral” to take possession of “The Collateral” without
                  prior notice to “The Borrower” to fulfil the obligations of
                  “The Borrower”.
                </li>
                <li class="mb-2">
                  In the case of repossession, “The Creditor” may request
                  assistance from the Nigerian Police having authority within
                  the location of “The Collateral” upon presentation of the
                  Financing Statement and “The Creditor’s” copy of this
                  agreement.
                </li>

                <li class="mb-2">
                  In the case of repossession, “The Borrower” hereby consents to
                  relinquish possession of “The Collateral” to “The Creditor”
                  without a court order.
                </li>
                <li class="mb-2">
                  In the event of Default and/or in the case of repossession,
                  “The Borrower” irrevocably agrees that “The Creditor” reserves
                  the right to retain possession of “The Collateral” for the
                  remaining duration of the credit facility or until the total
                  outstanding payment obligation is made.
                </li>
                <li class="mb-2">
                  In the event of Default and/or in the case of repossession,
                  “The Borrower” irrevocably agrees that “The Creditor” reserves
                  the right to retain possession of “The Collateral” for the
                  remaining duration of the credit facility or until the total
                  outstanding payment obligation is made.
                </li>
                <li class="mb-2">
                  If possession of the vehicle is to remain with “The Creditor”
                  until the complete fulfilment of the payment obligations by
                  “The Borrower” or otherwise directed by “The Creditor”, “The
                  Borrower” hereby confirms that the Creditor shall be held
                  harmless and fully indemnified from any claim, action,
                  damages, liabilities or suit that may arise as a result of the
                  drop-off, possession and subsequent collection of the vehicle.
                </li>
                <li class="mb-2">
                  Except as provided herein, “The Borrower” agrees to fully
                  indemnify and hold “The Creditor” harmless from and against
                  all injuries, claims, demands, costs, expenses, liabilities,
                  causes of action and damages of every kind and character which
                  may be asserted through the process of repossession of “The
                  Collateral” by itself or any of its authorized officers/agents
                  or representatives.
                </li>
                <li class="mb-2">
                  Following an Event of Default, “The Creditor” shall be
                  entitled at its own discretion to obtain a valuation or
                  otherwise sell (i.e. forced sale) “The Collateral” to a third
                  party of choice and “The Creditor” shall incur no liability as
                  a result of such transaction. The amount realised from the
                  sale of “The Collateral” shall be binding on “The Borrower”
                  and “The Borrower” further waives any claims against “The
                  Creditor” arising because the sale price was less than the
                  going market rate or the total outstanding payment obligation
                  owed.
                </li>
                <li class="mb-2">
                  In the Event of Default which leads to a sale of “The
                  Collateral”, “The Creditor” shall charge a fixed fee of
                  N100,000 which shall be deducted from the sale proceeds.
                </li>
                <li class="mb-2">
                  In the event of a forced sale of “The Collateral”, all sale
                  proceeds will be made to “The Creditor” to fulfil any existing
                  obligation owed to “The Creditor” by “The Borrower”. “The
                  Creditor” shall apply such proceeds to the fulfilment of those
                  obligations, inclusive of all costs and charges incurred in
                  doing the same. Whatever balance is left, less all such
                  deductions, shall be paid to “The Borrowers”.
                </li>
                <li class="mb-2">
                  In the event of the “The Creditor” enforcing its right of sale
                  under Clause 6.11 above, if the proceeds of sale do not fully
                  cover the unpaid obligations of “The Borrower”, “The Borrower”
                  shall hereby grant to “The Creditor” a lien, security interest
                  and right of set-off as security for all obligations to “The
                  Creditor" whether now existing or hereafter arising upon and
                  against all deposits, credits, collateral and property owned
                  by “The Borrower” or in the possession, custody, safekeeping
                  or control of “The Creditor”. At any time after the occurrence
                  and during the continuance of the Event of Default, without
                  demand or notice, “The Creditor” may set off the same, or any
                  part thereof, and apply the same to any liability or
                  obligation of “The Borrower” even though un-matured and
                  regardless of the adequacy of any other collateral securing
                  the obligations.
                </li>
                <li class="mb-2">
                  In the event of the “The Creditor” enforcing its right of sale
                  under Clause 6.11 above, if the proceeds of sale do not fully
                  cover the unpaid obligations of “The Borrower”, “The Borrower”
                  shall hereby grant to “The Creditor” a lien, security interest
                  and right of set-off as security for all obligations to “The
                  Creditor" whether now existing or hereafter arising upon and
                  against all deposits, credits, collateral and property owned
                  by “The Borrower” or in the possession, custody, safekeeping
                  or control of “The Creditor”. At any time after the occurrence
                  and during the continuance of the Event of Default, without
                  demand or notice, “The Creditor” may set off the same, or any
                  part thereof, and apply the same to any liability or
                  obligation of “The Borrower” even though un-matured and
                  regardless of the adequacy of any other collateral securing
                  the obligations.
                </li>
                <li class="mb-2">
                  All rights to require “The Creditor” to exercise its rights or
                  remedies with respect to any other collateral which secures
                  the obligations, before exercising its right of setoff with
                  respect to such deposits, credits or other property of “The
                  Borrower” are hereby knowingly, voluntarily and irrevocably
                  waived.
                </li>
                <li class="mb-2">
                  “The Borrower” hereby reserves the right to restore to full
                  ownership by discharging all the obligations under this
                  Agreement.
                </li>
              </ol>
            </div>
            <div class="mt-6">
              <div class="font-semibold text-lg text-center md:text-justify">
                PENALTIES
              </div>

              <ol class="list-decimal mt-2 ml-2">
                <li class="mb-2">
                  In the case of a late or part-payment of the scheduled
                  repayment by the due date, “The Borrower” is required within
                  two (2) calendar days from the due date to willingly
                  relinquish possession of “The Collateral” to “The Creditor”.
                  Failure to do so will automatically lead to recovery action by
                  “The Creditor” or any of its authorized officers or agents.
                </li>
                <li class="mb-2">
                  In the case of a lost, stolen or expired driver’s license,
                  “The Borrower” or anyone authorized to drive “The Collateral”
                  must apply and be issued a replacement/renewal no later than
                  30(thirty) days after the loss/expiration or execution of this
                  Agreement.
                </li>
                <li class="mb-2">
                  A minimum mobilization fee of N100,000 shall apply in the
                  event of a recovery action (repossession) of “The Collateral”
                  by authorized officers or agents of “The Creditor”.
                </li>
                <li class="mb-2">
                  “The Borrower” irrevocably consents to the payment of the
                  minimum repossession fee of N100,000 as soon as the authorized
                  officers or agents arrive at the location of “The Borrower”.
                  All other costs/fees incurred in the process of repossession
                  shall be added to the unpaid credit facility of “The
                  Borrower”.
                </li>
                <li class="mb-2">
                  “The Borrower” shall not tamper, compromise or uninstall the
                  car tracker under any circumstance during the term of the
                  credit facility. A breach in this clause shall automatically
                  render the total outstanding credit facility due.
                </li>
                <li class="mb-2">
                  If “The Borrower” takes “The Collateral” out of his/her state
                  of residence without the written permission of “The Creditor”,
                  “The Borrower” voluntarily and irrevocably consents to the
                  automatic shutdown of “The Collateral” without notice and
                  immediate recovery of “The Collateral” by “The Creditor” or
                  any of its authorized officers or agents without notice.
                </li>
                <li class="mb-2">
                  “The Borrower” agrees to fully indemnify and hold “The
                  Creditor” harmless from and against all injuries, claims,
                  demands, costs, expenses, liabilities, causes of action and
                  damages of every kind and character which may be asserted as a
                  result of the vehicle shutdown or through the process of
                  repossession of “The Collateral” by itself or any of its
                  authorized officers/agents or representatives.
                </li>
                <li class="mb-2">
                  “The Borrower” bears all costs and expenses including but not
                  limited to recovery actions and additional insurance cover
                  undertaken by “The Creditor” in the event of default in the
                  fulfilment of “The Borrowers” obligations.
                </li>
                <li class="mb-2">
                  “The Borrower” shall automatically be in default if payment is
                  not received within 24 hours after becoming due, and “The
                  Borrower” shall have up to 10 working days to remedy a Notice
                  of Default notification.
                </li>
                <li class="mb-2">
                  In the event of late or part-payment, “The Creditor” shall
                  charge default interest at a rate of 0.5% per day of default.
                  By charging a default penalty, “The Creditor” shall not
                  relinquish the right to recovery of “The Collateral” and
                  repayment of the total outstanding repayment obligation owed.
                </li>
                <li class="mb-2">
                  “The Borrower” hereby agrees to pay all costs and expenses
                  (including legal fees) incurred by “The Creditor” in
                  connection with any processes, claims or proceedings
                  instituted by or against “The Creditor” as a consequence of
                  default and entering into this Loan Agreement. In the event of
                  the foregoing, an additional default fee of 12.5% of the
                  outstanding loan amount shall apply.
                </li>
                <li class="mb-2">
                  Failure to remedy a Notice of Default within the stipulated
                  time shall result in the total credit facility becoming due
                  and “The Creditor” exercising its right of sale of “The
                  Collateral”.
                </li>
              </ol>
            </div>

            <div class="mt-6">
              <div class="font-semibold text-lg text-center">
                VEHICLE DROP-OFF &#38; COLLECTION
              </div>
              <p class="text-base font-medium">
                In the event of “The Borrower” being required to drop-off and
                subsequently collect “The Collateral” in the possession of “The
                Creditor”, “The Borrower” agrees to the following terms
                &#38;conditions:
              </p>

              <ol class="list-decimal mt-2 ml-2">
                <li class="mb-2">
                  Possession of the vehicle shall remain with “The Creditor”
                  until the complete fulfilment of the repayment obligations by
                  “The Borrower” or otherwise decided by “The Creditor”.
                </li>
                <li class="mb-2">
                  “The Borrower” affirms that there are no items of value in the
                  vehicle and shall hold the Creditor harmless from any
                  loss/damage to items of value found in the vehicle.
                </li>
                <li class="mb-2">
                  “The Borrower” hereby confirms that “The Creditor” shall be
                  held harmless and fully indemnified from any claim, action,
                  damages, liabilities or suit that may arise as a result of the
                  drop-off, possession and subsequent collection of the vehicle.
                </li>
                <li class="mb-2">
                  “The Borrower” hereby agrees that “The Creditor” shall be held
                  harmless and fully indemnified from any claim, action,
                  damages, liabilities or suit that may arise as a result of the
                  possession of the vehicle.
                </li>
              </ol>
            </div>

            <div class="mt-6">
              <div class="font-semibold text-lg text-center md:text-justify">
                ADDITIONAL CONDITIONS
              </div>

              <ol class="list-decimal mt-2 ml-2">
                <li class="mb-2">
                  This agreement remains in force until the complete fulfilment
                  of “The Borrower’s” obligations under this Credit &#38;
                  Security Agreement.
                </li>
                <li class="mb-2">
                  In line with CBN’s directive and “The Borrower’s” consent by
                  executing this Agreement, “The Creditor” shall disclose
                  information relating to this credit facility to CBN Licensed
                  Credit Bureaus and may also share the information with other
                  relevant Credit and Risk Management Units within the
                  Consynergy Group.
                </li>
                <li class="mb-2">
                  “The Creditor” shall have the right to amend at any time and
                  from time to time any of the terms and conditions of this
                  agreement, including but not limited to
                  revising/rescheduling/amendment to the repayment terms/amounts
                  or any other amount outstanding herein. Such
                  change(s)/revision/amendments shall immediately be notified to
                  “The Borrower” and “The Borrower” shall be bound by such
                  change(s)/revision/amendment. “The Borrower” agrees that the
                  change(s)/revision/amendment shall become applicable from the
                  date it was made.
                </li>
                <li class="mb-2">
                  Any revised or amended schedule shall be attached herein which
                  shall form an integral part of this agreement.
                </li>
                <li class="mb-2">
                  This agreement shall be governed by and construed in all
                  respects under the relevant laws of the Federal Republic of
                  Nigeria.
                </li>
                <li class="mb-2">
                  If any part of this agreement is held to be invalid, the
                  invalidity will not affect the operation of any other part of
                  this agreement.
                </li>
                <li class="mb-2">
                  In the event of a dispute between the Parties regarding this
                  Agreement, its interpretation, performance or any other matter
                  relating thereto, the Parties shall resolve such dispute
                  amicably.
                </li>
                <li class="mb-2">
                  Where the Parties fail to resolve the dispute amicably, it
                  shall be finally settled by way of Arbitration by an arbitral
                  tribunal (the Tribunal) under the Arbitration and Conciliation
                  Act Cap A18 Laws of the Federation of Nigeria 2004, for the
                  time being in force at the time such arbitration is commenced
                  (the “Arbitration Act”).
                </li>
                <li class="mb-2">
                  A sole arbitrator appointed by the Chairman of the Nigerian
                  Branch of the Chartered Institute of Arbitrators, United
                  Kingdom, and the arbitration shall be held in Lagos State,
                  Nigeria.
                </li>
                <li class="mb-2">
                  “The Borrower” shall be bound by the award of the arbitral
                  tribunal and shall have no recourse to a Court to set aside
                  the award where it has been validly made, and the full cost of
                  arbitration shall be wholly borne by “The Borrower”.
                </li>
                <li class="mb-2">
                  Nothing contained in this Agreement shall preclude “The
                  Creditor” from instituting criminal and/or civil charges
                  against “The Borrower”.
                </li>
                <li class="mb-2">
                  “The Borrower” hereby acknowledges that they have read this
                  agreement and the Secured Transactions in Movable Assets Act
                  2017 and that they understand and agree to the obligations,
                  liabilities, and rights hereunder.
                </li>
              </ol>
            </div>
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
              <div>
                <img src="~/assets/images/signature.png" alt="" />
                <br />
              </div>
            </div>

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
            <div>
              <div>
                <h2 class="font-medium text-lg">Schedule B</h2>
                <h3 class="font-medium text-lg">REPAYMENT SCHEDULE</h3>
              </div>
              <div class="px-4 py-5">
                <table class="modal__table table-striped">
                  <tbody>
                    <tr>
                      <td class="text-xs">Credit Facility</td>
                      <td class="text-xs"></td>
                    </tr>

                    <tr>
                      <td class="text-xs">Principal Due</td>
                      <td class="text-xs">
                        ₦
                        {{
                          $store.getters.activeloan.total_loan_amount | currency
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td class="text-xs">Amount Disbursed</td>
                      <td class="text-xs">
                        ₦
                        {{ $store.getters.activeloan.offer_amount | currency }}
                      </td>
                    </tr>
                    <tr>
                      <td class="text-xs">Total Amount Payable</td>
                      <td class="text-xs">
                        ₦
                        {{
                          $store.getters.activeloan.total_payable_amount
                            | currency
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td class="text-xs">Monthly Repayment</td>
                      <td class="text-xs">
                        ₦
                        {{
                          $store.getters.activeloan.monthly_repayment | currency
                        }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <button
              class="mt-5 h-10 md:h-12 flex justify-center py-2 px-4 text-sm md:text-base font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              @click.prevent="displayOTP"
            >
              CONTINUE
            </button>
          </div>
        </div>
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
    displayOTP() {
      this.$emit('otpForm')
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
