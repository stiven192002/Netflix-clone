import { create } from "zustand";
import { UserNetflix } from "@prisma/client";
import { persist, createJSONStorage } from "zustand/middleware";

interface UssCurrrentUser {
  currentUser: UserNetflix | null;
  changeCurrentUser: (user: UserNetflix) => void;
}

export const useCurrentUser = create(
  persist<UssCurrrentUser>(
    (set) => ({
      currentUser: null,
      changeCurrentUser: (user: UserNetflix) => {
        set({ currentUser: user });
      },
    }),
    {
      name: "currentUser",
      storage: createJSONStorage(() => localStorage),
    }
  )
);