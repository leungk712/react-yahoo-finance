export const yahooFinanceURL = {
    quote: "v6/finance/quote",
    quoteSummary: "v11/finance/quoteSummary"
}

// export const encodedQuoteSummaryModules = "summaryDetail%2CassetProfile%2CfundProfile%2CfinancialData%2CdefaultKeyStatistics%2CcalendarEvents%2CincomeStatementHistory%2CincomeStatementHistoryQuarterly%2CcashflowStatementHistory%2CbalanceSheetHistory%2Cearnings%2CearningsHistory%2CinsiderHolders%2CcashflowStatementHistory%2CcashflowStatementHistoryQuarterly%2CinsiderTransactions%2CsecFilings%2CindexTrend%2CsectorTrend%2CearningsTrend%2CnetSharePurchaseActivity%2CupgradeDowngradeHistory%2CinstitutionOwnership%2CrecommendationTrend%2CbalanceSheetHistory%2CbalanceSheetHistoryQuarterly%2CfundOwnership%2CmajorDirectHolders%2CmajorHoldersBreakdown%2Cprice%2CquoteType%2CesgScores";
export const encodedQuoteSummaryModules = "assetProfile%2CrecommendationTrend%2CdefaultKeyStatistics%2CinstitutionOwnership%2CfundOwnership%2CsummaryDetail%2Cprice%2CearningsHistory%2CfinancialData%2CcalendarEvents%2CincomeStatementHistor%2CbalanceSheetHistory"

export const queryParams = {
    lang: "en",
    region: "US",
    modules: encodedQuoteSummaryModules
};

export const generateQueryParams = (queryParamsObj) => {
   return Object.keys(queryParamsObj).map(key => key + '=' + queryParamsObj[key]).join('&');
};

export const queryParamsString = generateQueryParams(queryParams);