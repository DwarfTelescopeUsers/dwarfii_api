import { shutDownCmd } from "./api_codes";

// 7.11 Shut down
export function shutDown() {
  const options = {
    interface: shutDownCmd,
  };
  return options;
}
