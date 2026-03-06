import React from 'react';

function Brokerage() {
    return ( 
         <div className='container mt-5  mb-5'>
            <div className='row pt-5 mt-5 '>
                <h1 className='fs-3 mt-5 pt-5 pb-5'>Charges explained</h1>
                <div className='col-6 '>
                    <h5 className='text-muted pb-2'>Securities/Commodities transaction tax</h5>
                    <p style={{fontSize:"14px", lineHeight:"1.6", width:"90%"}}>
                        Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.
                        <br /><br/>

                        When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.
                    </p>
                    <h5 className='text-muted pt-2 pb-2'>Transaction/Turnover Charges</h5>
                    <p style={{fontSize:"14px", lineHeight:"1.6", width:"90%"}}>
                        Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.<br /><br/>
                        BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017) <br /><br/>

                        BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.<br /><br/>

                        BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.<br /><br/>

                        BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.
                    </p>
                    <h5 className='text-muted pt-2 pb-2'>Call & trade</h5>
                    <p style={{fontSize:"14px", lineHeight:"1.6", width:"90%"}}>
                        Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.
                        <br/>
                    </p>
                    <h5 className='text-muted pb-2 pt-2'>Stamp charges</h5>
                    <p style={{fontSize:"14px", lineHeight:"1.6", width:"90%"}}>
                        Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.
                        <br/>
                    </p>

                </div>
                <div className='col-6'>
                     <h5 className='text-muted pb-2 pt-2'>GST</h5>
                    <p style={{fontSize:"14px", lineHeight:"1.6", width:"90%"}}>
                        Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)
                        <br/>
                    </p>
                    <h5 className='text-muted pb-2 pt-2'>SEBI Charges</h5>
                    <p style={{fontSize:"14px", lineHeight:"1.6", width:"90%"}}>
                        Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.
                        <br/>
                    </p>
                    <h5 className='text-muted pb-2 pt-2'>DP (Depository participant) charges</h5>
                    <p style={{fontSize:"14px", lineHeight:"1.6", width:"90%"}}>
                        ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.<br/><br/>

                        Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.<br/><br/>

                        Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.
                        
                    </p>
                    <h5 className='text-muted pb-2 pt-2'>Pledging charges</h5>
                    <p style={{fontSize:"14px", lineHeight:"1.6", width:"90%"}}>
                        ₹30 + GST per pledge request per ISIN.
                        <br/>
                    </p>
                    <h5 className='text-muted pb-2 pt-2'>AMC (Account maintenance charges)</h5>
                    <p style={{fontSize:"14px", lineHeight:"1.6", width:"90%"}}>
                        For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA,<a href='' style={{textDecoration:"none"}}> Click here </a><br/><br/>

                        For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <a href='' style={{textDecoration:"none"}}> Click here </a>
                        <br/>
                    </p>
                    <h5 className='text-muted pb-2 pt-2'>Payment gateway charges</h5>
                    <p style={{fontSize:"14px", lineHeight:"1.6", width:"90%"}}>
                        ₹9 + GST (Not levied on transfers done via UPI)
                        <br/>
                    </p>
                </div>
            </div>
            <div className='row pt-2 mb-5 pb-5'>
                <h5 className='text-muted pb-2 pt-2'>Disclaimer</h5>
                    <p style={{fontSize:"14px", lineHeight:"1.6", width:"92%"}}>
                        For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.
                    </p>
            </div>
       </div>
     );
}

export default Brokerage;