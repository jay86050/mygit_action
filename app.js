

import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
impob rt LabourVoucher from "./Accounts/LabourVoucher";
              element={<DataTable columns={columns} rows={rows} />}
            />
            <Route
              path="/WebsiteAutoEnquiry/*"
              element={<WebsiteAutoEnquiry />}
            />
            <Route path="/CustomerFollowUp/*" element={<CustomerFollowUp />} />
            <Route path="/VIPCustomers/*" element={<VIPCustomers />} />
            <Route path="/Booking/*" element={<CustomerBookings />} />
            <Route path="/DemandLetter/*" element={<DemandLetter />} />
           
            <Route
              path="/CustomerBankwiseCurrentDuesReport/*"
              element={<CustomerBankwiseCurrentDuesReport />}
            />
            <Route
              path="/NoLoanCustomers/*"
              element={<NoLoanCustomers />}
            />
            <Route
              path="/AllTransactionReport/*"
              element={<AllTransactionReport />}
            />
            <Route
              path="/PaymentsReceivedforGivenPeriod/*"
              element={<PaymentsReceivedforGivenPeriod />}
            />
            <Route
              path="/CustomerwiseParkingReport/*"
              element={<CustomerwiseParkingReport />}
            />
            <Route
              path="/PossessionReport/*"
              element={<PossessionReport />}
            />
            <Route
              path="/MisReport/*"
              element={<MisReport />}
            />
            <Route
              path="/ApartmentDeedDoneForParticularPeriod/*"
              element={<ApartmentDeedDoneForParticularPeriod />}
            />
            <Route
              path="/ApartmentDeedReport/*"
              element={<ApartmentDeedReport />}
            />
            <Route
              path="/DayEndFollowupReport/*"
              element={<DayEndFollowupReport />}
            
            <Route
              path="/BalanceSheetReport/*"
            >
              <Route index={true} element={<BalanceSheetReport/>}/>
              <Route 
                path="getBalanceSheetType/*"
                element={<BalanceSheetAnnexReport/>}
              />
             
            </Route>
            <Route path="/AccountExpensesRinku/*" element={<AccountExpensesRinku/>}/>
          </Routes>
        </Router>
      </LocalizationProvider>
    </>
  );
}

export default App;
