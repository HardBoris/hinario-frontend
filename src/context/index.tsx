import { ReactNode } from "react";
import { UserProvider } from "./UserContext";
import { HymnProvider } from "./HymnContext";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <UserProvider>
    <HymnProvider>{children}</HymnProvider>
  </UserProvider>
);
