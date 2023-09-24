"use client";

import React, { FunctionComponent } from "react";
import TanstackProvider from "./TanstackProvider";
import { PrimeReactProvider } from "primereact/api";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "@/states/stores/store";

interface ProvidersProps {
  children: React.ReactNode
}

const Providers: FunctionComponent<ProvidersProps> = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider store={store}>
      <PrimeReactProvider>
        <TanstackProvider>
          {children}
        </TanstackProvider>
      </PrimeReactProvider>
    </ReduxProvider>
  );
};

export default Providers;