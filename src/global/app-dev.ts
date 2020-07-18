import { setupConfig } from "../config/enviroment-config";


export default async () => {
  /**
   * The code to be executed should be placed within a default function that is
   * exported by the global script. Ensure all of the code in the global script
   * is wrapped in the function() that is exported.
   */

  setupConfig({
    ROOT_URL: "http://localhost:3333",
    NAME: "dev"
  });
};
