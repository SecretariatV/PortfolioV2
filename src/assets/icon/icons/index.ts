import Appdevelopment from "./Appdevelopment";
import Gamedevelopment from "./Gamedevelopment";
import Seomarketing from "./Seomarketing";
import Uxuidesign from "./Uxuidesign";
import Web3development from "./Web3development";
import WebDevelopment from "./Webdevelopment";

export const Icons = {
  Appdevelopment,
  Gamedevelopment,
  Seomarketing,
  Uxuidesign,
  Web3development,
  WebDevelopment,
} as const;

export type IconNames = keyof typeof Icons;
