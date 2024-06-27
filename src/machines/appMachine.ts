import { createActorContext } from "@xstate/react";
import { assign, setup } from "xstate";

interface AppMachineContext {
  toggle: boolean;
}

type AppMachineEvent = { type: "TOGGLE"; value: boolean };

export const appMachine = setup({
  types: { context: {} as AppMachineContext, events: {} as AppMachineEvent },
}).createMachine({
  id: "appMachine",
  context: {
    toggle: false,
  },
  on: {
    TOGGLE: {
      actions: assign({
        toggle: ({ event }) => {
          return event.value;
        },
      }),
    },
  },
});

export const AppContext = createActorContext(appMachine);
