import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "dayjs/locale/en-gb";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DataTable from "./DataTable";
import WebsiteAutoEnquiry from "./MarketingOfficeReports/WebsiteAutoEnquiry";
import CustomerFollowUp from "./MarketingOfficeReports/CustomerFollowUp";
import VIPCustomers from "./MarketingOfficeReports/VIPCustomers";
import CustomerBookings from "./MarketingOfficeReports/CustomerBookings";
import DemandLetter from "./DemandLetter/DemandLetter";
import MaintenanceInvoice from "./DemandLetter/MaintenenanceDemand";
import ExtraWorkInvoice from "./DemandLetter/ExtraWorkDemandLetter";
import InterestInvoice from "./DemandLetter/InterestDemandLetter";
import SaleDeedInvoice from "./DemandLetter/SaleDeedDemandLetter";
import PurchaseVoucher from "./Accounts/PurchaseVoucher";
import ExpenseVoucher from "./Accounts/ExpenseVoucher";
import SalesVoucher from "./Accounts/SalesVoucher";
import CashPaymentVoucher from "./Accounts/CashPaymentVoucher";
import ContraVoucher from "./Accounts/ContraVoucher";
import CashReceiptVoucher from "./Accounts/CashReceiptVoucher";
import CreditNoteVoucher from "./Accounts/CreditNoteVoucher";
import DebitNoteVoucher from "./Accounts/DebitNoteVoucher";
import LabourVoucher from "./Accounts/LabourVoucher";
import BankRecieptVoucher from "./Accounts/BankRecieptVoucher";
import JournalVoucher from "./Accounts/JournalVoucher";
import CapitalExpenseVoucher from "./Accounts/CapitalExpenseVoucher";
import BankPaymentVouchers from "./Accounts/BankPaymentVouchers";
import SiteVisitCustomer from "./MarketingOfficeReports/SiteVisitCustomers";
import BookedCustomer from "./MarketingOfficeReports/BookedCustomer";
import BrokerContactDetails from "./MarketingOfficeReports/BrokerContactDetails";
import WebsiteEnquiryWithNoOfActivities from "./MarketingOfficeReports/WebsiteEnquiryWithNoOfActivities";
import MultipleSiteVisitCustomer from "./MarketingOfficeReports/MultipleSiteVisitCustomer";
import WebSiteEnquiryFollowUPDetails from "./MarketingOfficeReports/WebSiteEnquiryStopFollowUpDetails";
import WebsiteEnquiryConversion from "./MarketingOfficeReports/WebsiteEnquiryConversion";
import WebSiteEnquiryNoCallsMade from "./MarketingOfficeReports/WebSiteEnquiryNoCallsMade";
import WebSiteEnquiryLiveCustomers from "./MarketingOfficeReports/WebSiteEnquiryLiveCustomers";
import WebSiteSourceSiteVisitedCustomers from "./MarketingOfficeReports/WebSiteSourceSiteVisitedCustomers";
import SiteVisitedCustomersLiveExceptFBC from "./SalesOfficeReports/SiteVisitedCustomersLiveExceptFBC";
import SiteVisitedCustomersMoreThanOnceExceptFBC from "./SalesOfficeReports/SiteVisitedCustomersMoreThanOnceExceptFBC";
import SiteVisitedCustomersNoCallsMade from "./SalesOfficeReports/SiteVisitedCustomersNoCallsMade";
import BookedCustomersForParticularPeriodWithDetails from "./SalesOfficeReports/BookedCustomersForParticularPeriodWithDetails";
import BankReconcilationAllVouchers from "./Accounts/BankReconcilationAllVouchers";
import ExhibitionEnquiryConversionIntoActivities from "./SalesOfficeReports/ExhibitionEnquiryWithNoOfActivities";
import ExhibitionLiveCustomersStopFollowUp from "./SalesOfficeReports/ExhibitionLiveCustomersStopFollowUp";
import ExhibitionConversion from "./SalesOfficeReports/ExhibitionConversion";
import ExhibitionLiveCustomersNoCallsMade from "./SalesOfficeReports/ExhibitionLiveCustomersNoCallsMade";
import ELCNotVisitedSiteExceptStopFollowup from "./SalesOfficeReports/ELCNotVisitedSiteExceptStopFollowup";
import AccountsLedger from "./Accounts/AccountsLedger";
import SiteSalesPerformanceReport from "./SalesOfficeReports/SiteVisitedCustomersMoreThanOnceExceptFBC/SiteSalesPerformanceReport";
import PurchaseVoucherRegister from "./Accounts/PurchaseVoucherRegister";
import ExpenseVoucherRegister from "./Accounts/ExpenseVoucherRegister";
import LabourVoucherRegister from "./Accounts/LabourVoucherRegister";
import CapitalExpenseVoucherRegister from "./Accounts/CapitalExpenseVoucherRegister";
import DebitNoteVoucherRegister from "./Accounts/DebitNoteVoucherRegister";
import CreditNoteVoucherRegister from "./Accounts/CreditNoteVoucherRegister";
import SVCExistsInOtherProjects from "./SalesOfficeReports/SVCExistsinOtherProjects";
import DailyBankReport from "./Accounts/DailyBankReport";
import AllDraftVouchersRegister from "./Accounts/AllDraftVouchersRegister";
import SourceWiseBookingReports from "./MarketingOfficeReports/SourceWiseBookingReports";
import SVCConvertedIntoStopfollowupwithNoActivities from "./SalesOfficeReports/SVCConvertedIntoStopfollowupwithNoActivities";
import SourceWiseSiteAndBookingTableReport from "./MarketingOfficeReports/SourceWiseSiteAndBookingTableReport";
import SVCConvertedIntoStopFollowUpWithDetails from "./SalesOfficeReports/SVCConvertedIntoStopFollowUpWithDetails";
import BankpaymentVoucherRegister from "./Accounts/BankpaymentVoucherRegister";
import CashpaymentVoucherRegister from "./Accounts/CashpaymentVoucherRegister";
import SiteSalesExecutivePerformanceAtAGlance from "./SalesOfficeReports/SiteSalesExecutivePerformanceAtAGlance";
import VIPCustomerReport from "./MarketingOfficeReports/VIPCustomerReport";
import CustomerRevivedDuringSpecPeriodAfterStopFollowUp from "./SalesOfficeReports/CustomerRevivedDuringSpecPeriodAfterStopFollowUp";
import StopFollowUpReasonsReport from "./SalesOfficeReports/StopFollowUpReasonsReport";
import SalesVoucherRegister from "./Accounts/SalesVoucherRegister";
import UnitTypeSiteVisitsAndConversionReport from "./SalesOfficeReports/UnitTypeSiteVisitsAndConversionReport";
import AgreementPaymentChecklist from "./SalesOfficeReports/AgreementPaymentChecklist";
import AgreementsDoneForParticularPeriod from "./SalesOfficeReports/AgreementsDoneForParticularPeriod";
import AgreementsToBeExecuted from "./SalesOfficeReports/AgreementsToBeExecuted";
import JournalVoucherRegister from "./Accounts/JournalVoucherRegister";
import BookingForParticularPeriod from "./SalesOfficeReports/BookingForParticularPeriod";
import UnitCancellationReport from "./SalesOfficeReports/UnitCancellationReport";
import DuesPendingFromCustomers from "./SalesOfficeReports/DuesPendingFromCustomers";
import DayBookVoucherRegister from "./Accounts/DayBookAllVoucherRegister";
import BankNOCReport from "./SalesOfficeReports/BankNOCReport";
import BankExecutivewiseCurrentDuesReport from "./SalesOfficeReports/BankExecutivewiseCurrentDuesReport";
import CustomerLoanDetails from "./SalesOfficeReports/CustomerLoanDetails"
import CustomerBankwiseCurrentDuesReport from "./SalesOfficeReports/CustomerBankwiseCurrentDuesReport"
import NoLoanCustomers from "./SalesOfficeReports/NoLoanCustomers";
import AllTransactionReport from "./MarketingOfficeReports/AllTransactionReport";
import PaymentsReceivedforGivenPeriod from "./SalesOfficeReports/PaymentsReceivedforGivenPeriod";
import CustomerDetailsForDeedofDeclaration from "./SalesOfficeReports/CustomerDetailsForDeedofDeclaration";
import CustomerwiseParkingReport from "./SalesOfficeReports/CustomerwiseParkingReport";
import PossessionReport from "./SalesOfficeReports/PossessionReport";
import MisReport from "./SalesOfficeReports/MisReport";
import ApartmentDeedDoneForParticularPeriod from "./SalesOfficeReports/ApartmentDeedDoneForParticularPeriod"
import ApartmentDeedReport from "./SalesOfficeReports/ApartmentDeedReport";
import DayEndFollowupReport from "./SalesOfficeReports/DayEndFollowupReport";
import CompulsoryAttributesReport from "./SalesOfficeReports/CompulsoryAttributesReport";
import ROPPaymentCheckList from "./SalesOfficeReports/ROPPaymentCheckList";
import PrePossessionDuesList from "./SalesOfficeReports/PrePossessionDuesList";
import MaintenanceChargesReceivedforParticularPeriod from "./SalesOfficeReports/MaintenanceChargesReceivedforParticularPeriod";
import MaintenanceDetails from "./SalesOfficeReports/MaintenanceDetails";
import InterestCalculationofAllCustomers from "./SalesOfficeReports/InterestCalculationofAllCustomers";
import WIPAreaBookedReport from "./Accounts/WIPAreaBookedReport";
import InterestCalculationofCustomerwise from "./SalesOfficeReports/InterestCalculationofCustomerwise";
import TotalProjectedNettDuesReport from "./SalesOfficeReports/TotalProjectedNettDuesReport";
import WIPTotalReport from './Accounts/WIPTotalReport'
import AgreementDoneReport from "./SalesOfficeReports/AgreementDoneReport"
import TDSCertificatePendingReport from "./SalesOfficeReports/TDSCertificatePendingReport";
import BookingForm from "./SalesOfficeReports/BookingForm";
import ProfitAndLossReport from "./Accounts/ProfitLossReport";
import ProfitAndLossAnnexReport from "./Accounts/ProfitAndLossAnnexReport";
import MileStoneAddedButNotApplied from "./Accounts/MileStoneAddedButNotApplied";
import WipForAllProjectReport from "./Accounts/WipForAllProjectReport";
import TDSDeductionReport from "./Accounts/TDSDeductionReport";
import PrintCustomerDetails from "./SalesOfficeReports/PrintCustomerDetails";
import WideTrialBalance from "./Accounts/WideTrialBalance";
import BalanceSheetReport from "./Accounts/BalanceSheetReport";
import BalanceSheetAnnexReport from "./Accounts/BalanceSheetAnnexReport";
import NoGSTTaxReport from "./Accounts/NoGSTTaxReport";
import GSTTaxReport from "./Accounts/GSTTaxReport";
import BackdatedVoucherReport from "./Accounts/BackdatedVoucherReport";
import ReceiptLetter from "./DemandLetter/ReceiptLetter";
import DepositStatementReport from './Accounts/DepositStatementReport';
import InflowOutflowReport from "./Accounts/InflowOutflowReport";
import AccountExpensesRinku from "./Accounts/AccountExpensesRinku";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"en-gb"}>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
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
            <Route path="/MaintenanceInvoice/*" element={<MaintenanceInvoice />} />
            <Route path="/ReceiptLetter/*" element={<ReceiptLetter />} />
            <Route path="/ExtraWorkInvoice/*" element={<ExtraWorkInvoice />} />
            <Route path="/SaleDeedInvoice/*" element={<SaleDeedInvoice />} />
            <Route path="/InterestInvoice/*" element={<InterestInvoice />} />
            <Route path="/PurchaseVoucher/*" element={<PurchaseVoucher />} />
            <Route path="/LabourVoucher/*" element={<LabourVoucher />} />
            <Route path="/ContraVoucher/*" element={<ContraVoucher />} />
            <Route path="/JournalVoucher/*" element={<JournalVoucher />} />
            <Route path="/AccountLeger/*" element={<AccountsLedger />} />
            <Route path="/PurchaseVoucherRegister/*" element={<PurchaseVoucherRegister />} />
            <Route path="/JournalVoucherRegister/*" element={<JournalVoucherRegister />} />
            <Route path="/ExpenseVoucherRegister/*" element={<ExpenseVoucherRegister />} />
            <Route path="/LabourVoucherRegister/*" element={<LabourVoucherRegister />} />
            <Route path="/DebitNoteVoucherRegister/*" element={<DebitNoteVoucherRegister />} />
            <Route path="/CreditNoteVoucherRegister/*" element={<CreditNoteVoucherRegister />} />
            <Route path="/CapitalExpenseVoucherRegister/*" element={<CapitalExpenseVoucherRegister />} />
            <Route path="/DayBookVoucherRegister/*" element={<DayBookVoucherRegister />} />
            <Route path="/SiteSalesExecutivePerformance/*" element={<SiteSalesPerformanceReport />} />
            <Route path="/DailyBankReports/*" element={<DailyBankReport />} />

            <Route path="/AllDraftVouchersRegister/*" element={<AllDraftVouchersRegister />} />
            <Route path="/BankpaymentVoucherRegister/*" element={<BankpaymentVoucherRegister />} />
            <Route path="/CashpaymentVoucherRegister/*" element={<CashpaymentVoucherRegister />} />
            <Route path="/SalesVoucherRegister/*" element={<SalesVoucherRegister />} />
            <Route path="/BankNOCReport/*" element={<BankNOCReport />} />
            
            <Route
              path="/CashPaymentVoucher/*"
              element={<CashPaymentVoucher />}
            />
            <Route
              path="/CreditNoteVoucher/*"
              element={<CreditNoteVoucher />}
            />
            <Route path="/DebitNoteVoucher/*" element={<DebitNoteVoucher />} />
            <Route
              path="/CashReceiptVoucher/*"
              element={<CashReceiptVoucher />}
            />
            <Route
              path="/BankPaymentVouchers/*"
              element={<BankPaymentVouchers />}
            />
            <Route
              path="/BankRecieptVoucher/*"
              element={<BankRecieptVoucher />}
            />
            <Route
              path="/CapitalExpenseVoucher/*"
              element={<CapitalExpenseVoucher />}
            />
            <Route path="/ExpenseVoucher/*" element={<ExpenseVoucher />} />
            <Route path="/SalesVoucher/*" element={<SalesVoucher />} />
            <Route
              path="/SiteVisitCustomers/*"
              element={<SiteVisitCustomer />}
            />
            <Route path="/BookedCustomer/*" element={<BookedCustomer />} />
            <Route
              path="/BrokerContactDetails/*"
              element={<BrokerContactDetails />}
            />
            <Route
              path="/WebsiteEnquiryWithNoOfActivities/*"
              element={<WebsiteEnquiryWithNoOfActivities />}
            />
            <Route
              path="/MultipleSiteVisitCustomer/*"
              element={<MultipleSiteVisitCustomer />}
            />
            <Route
              path="/WebSiteEnquiryStopFollowUpDetails/*"
              element={<WebSiteEnquiryFollowUPDetails />}
            />
            <Route
              path="/WebsiteEnquiryConversion/*"
              element={<WebsiteEnquiryConversion />}
            />
            <Route
              path="/WebSiteEnquiryCustomersNoCallsMade/*"
              element={<WebSiteEnquiryNoCallsMade />}
            />
            <Route
              path="/WebSiteEnquiryLiveCustomersNotVisitedSite/*"
              element={<WebSiteEnquiryLiveCustomers />}
            />
            <Route
              path="/WebSiteSourceSiteVisitedCustomers/*"
              element={<WebSiteSourceSiteVisitedCustomers />}
            />
            <Route
              path="/SiteVisitedCustomersLiveExceptFBC/*"
              element={<SiteVisitedCustomersLiveExceptFBC />}
            />
            <Route
              path="/SiteVisitedCustomersMoreThanOnceExceptFBC/*"
              element={<SiteVisitedCustomersMoreThanOnceExceptFBC />}
            />
            <Route
              path="/SiteVisitedCustomersNoCallsMade/*"
              element={<SiteVisitedCustomersNoCallsMade />}
            />
            <Route
              path="/BookedCustomersForParticularPeriodWithDetails/*"
              element={<BookedCustomersForParticularPeriodWithDetails />}
            />
            <Route path="/BankReconcilationAllVouchers/*" element={<BankReconcilationAllVouchers />} />
            <Route
              path="/ExhibitionEnquiryConversionIntoActivities/*"
              element={<ExhibitionEnquiryConversionIntoActivities />}
            />
            <Route
              path="/ExhibitionLiveCustomersStopFollowUp/*"
              element={<ExhibitionLiveCustomersStopFollowUp />}
            />
            <Route
              path="/ExhibitionConversion/*"
              element={<ExhibitionConversion />}
            />
            <Route
              path="/ExhibitionLiveCustomersNoCallsMade/*"
              element={<ExhibitionLiveCustomersNoCallsMade />}
            />
            <Route
              path="/ELCNotVisitedSiteExceptStopFollowup/*"
              element={<ELCNotVisitedSiteExceptStopFollowup />}
            />
            <Route
              path="/SVCExistsInOtherProjects/*"
              element={<SVCExistsInOtherProjects />}
            />
            <Route
              path="/SourceWiseBookingReports/*"
              element={<SourceWiseBookingReports />}
            />
            <Route
              path="/SVCConvertedWithNoSctivities/*"
              element={<SVCConvertedIntoStopfollowupwithNoActivities />}
            />
            <Route
              path="/SourceWiseSiteAndBookingTableReports/*"
              element={<SourceWiseSiteAndBookingTableReport />}
            />
            <Route
              path="/SiteSalesExecutivePerformanceAtAGlance/*"
              element={<SiteSalesExecutivePerformanceAtAGlance />}
            />
            <Route
              path="/CustomerDetailsForDeedofDeclaration/*"
              element={<CustomerDetailsForDeedofDeclaration />}
            />
            <Route
              path="/SVCConvertedIntoStopFollowUpWithDetails/*"
              element={<SVCConvertedIntoStopFollowUpWithDetails />}
            />
            <Route
              path="/VIPCustomersReport/*"
              element={<VIPCustomerReport />}
            />
            <Route
              path="/CustReviviedDuringSpecPeriodStopFollowUp/*"
              element={<CustomerRevivedDuringSpecPeriodAfterStopFollowUp />}
            />
            <Route
              path="/StopFollowUpReasons/*"
              element={<StopFollowUpReasonsReport />}
            />
            <Route
              path="/UnitTypeSiteVisitsAndConversionReport/*"
              element={<UnitTypeSiteVisitsAndConversionReport />}
            />
            <Route
              path="/AgreementPaymentChecklist/*"
              element={<AgreementPaymentChecklist />}
            />
            <Route
              path="/AgreementsDoneForParticularPeriod/*"
              element={<AgreementsDoneForParticularPeriod />}
            />
            <Route
              path="/AgreementsToBeExecuted/*"
              element={<AgreementsToBeExecuted />}
            />
            <Route
              path="/BookingForParticularPeriod/*"
              element={<BookingForParticularPeriod />}
            />
            <Route
              path="/UnitCancellationReport/*"
              element={<UnitCancellationReport />}
            />
            <Route
              path="/DuesPendingFromCustomers/*"
              element={<DuesPendingFromCustomers />}
            />
            <Route
              path="/BankExecutivewiseCurrentDuesReport/*"
              element={<BankExecutivewiseCurrentDuesReport />}
            />
            <Route
              path="/CustomerLoanDetails/*"
              element={<CustomerLoanDetails />}
            />
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
            />
            <Route
              path="/CompulsoryAttributesReport/*"
              element={<CompulsoryAttributesReport />}
            />
            <Route
              path="/ROPPaymentCheckList/*"
              element={<ROPPaymentCheckList />}
            />
            <Route
              path="/PrePossessionDuesList/*"
              element={<PrePossessionDuesList />}
            />
            <Route
              path="/MaintenanceChargesReceivedforParticularPeriod"
              element={<MaintenanceChargesReceivedforParticularPeriod />}
            />
            <Route
              path="/MaintenanceDetails/*"
              element={<MaintenanceDetails />}
            />
            <Route
              path="/InterestCalculationofAllCustomers/*"
              element={<InterestCalculationofAllCustomers />}
            />
            <Route
              path="/InterestCalculationofCustomerwise/*"
              element={<InterestCalculationofCustomerwise />}
            />
            <Route
              path="/TotalProjectedNettDuesReport"
              element={<TotalProjectedNettDuesReport />}
            />
            <Route
              path="/WIPAreaBookedReport/*"
              element={<WIPAreaBookedReport />}
            />
            <Route
              path="/AgreementDoneReport/*"
              element={<AgreementDoneReport />}
            />
            <Route
              path="/TDSCertificatePendingReport/*"
              element={<TDSCertificatePendingReport />}
            />
            <Route
              path="/BookingForm/*"
              element={<BookingForm />}
            />
            <Route
              path="/WIPTotalReport/*"
              element={<WIPTotalReport />}
            />
            <Route
              path="/ProfitAndLossAc/*"
            >
              <Route index={true} element={<ProfitAndLossReport/>}/>
              <Route 
                path="getProfitandLossType/*"
                element={<ProfitAndLossAnnexReport/>}
              />
            </Route>
            <Route
              path="/MileStoneAddedButNotApplied/*"
              element={<MileStoneAddedButNotApplied/>}
            />
            <Route
              path="/WipForAllProjectReport/*"
              element={<WipForAllProjectReport/>}
            />
            <Route 
              path="/TDSReport/*"
              element={<TDSDeductionReport/>}
            />
            <Route
              path="/PrintCustomerDetails/*"
              element={<PrintCustomerDetails/>}
            />
            <Route
              path="/WideTrialBalance/*"
              element={<WideTrialBalance/>}
            />
            <Route
              path="/BalanceSheetReport/*"
            >
              <Route index={true} element={<BalanceSheetReport/>}/>
              <Route 
                path="getBalanceSheetType/*"
                element={<BalanceSheetAnnexReport/>}
              />
             
            </Route>
            <Route path="/DepositStatement/*" element={<DepositStatementReport/>}/>
            <Route path="/NoGstTax/*" element={<NoGSTTaxReport/>} />
            <Route path="/GSTReceivableTaxReport/*" element={<GSTTaxReport/>} />
            <Route path="/BackdatedVoucherReport/*" element={<BackdatedVoucherReport/>}/>
            <Route path="/TentativeInflowOutflowReport/*" element={<InflowOutflowReport/>}/>
            <Route path="/AccountExpensesRinku/*" element={<AccountExpensesRinku/>}/>
          </Routes>
        </Router>
      </LocalizationProvider>
    </>
  );
}

export default App;
