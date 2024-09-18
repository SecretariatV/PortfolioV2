import { createActorContext } from "@xstate/react";
import { assign, setup } from "xstate";

interface AppMachineContext {
  toggle: boolean;
  mobileMenu: boolean;
}

type AppMachineEvent =
  | { type: "TOGGLE"; value: boolean }
  | { type: "MOBILE_MENU"; value: boolean };

export const appMachine = setup({
  types: { context: {} as AppMachineContext, events: {} as AppMachineEvent },
}).createMachine({
  id: "appMachine",
  context: {
    toggle: false,
    mobileMenu: false,
  },
  on: {
    TOGGLE: {
      actions: assign({
        toggle: ({ event }) => {
          return event.value;
        },
      }),
    },
    MOBILE_MENU: {
      actions: assign({
        mobileMenu: ({ event }) => {
          return event.value;
        },
      }),
    },
  },
});

export const AppContext = createActorContext(appMachine);
