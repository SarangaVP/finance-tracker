import { useUser } from "@clerk/clerk-react";
import { createContext, useContext, useEffect, useState } from "react";

export interface FinancialRecord {
    id?: string;
    userId: string;
    date: Date;
    description: string;
    amount: number;
    category: string;
    paymentMethod: string;
}

interface FinancialRecordsContextType {
    records: FinancialRecord[];
}

export const FinancialRecordsProvider = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    const [records, setRecords] = useState<FinancialRecord[]>([]);
    const { user } = useUser();
  
    
    return (
      <FinancialRecordsContext.Provider value={{records}}>
        {children}
      </FinancialRecordsContext.Provider>
    );
  };

export const FinancialRecordsContext = createContext<FinancialRecordsContextType | undefined>(undefined);

export const useFinancialRecords = () => {
    const context = useContext<FinancialRecordsContextType | undefined>(FinancialRecordsContext);
  
    if (!context) {
      throw new Error("useFinancialRecords must be used within a FinancialRecordsProvider");
    }
    return context;
  };