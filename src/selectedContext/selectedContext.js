import React, { createContext, useState, useContext } from "react";

const SelectionContext = createContext();

export const useSelection = () => {
  return useContext(SelectionContext);
};

export const SelectionProvider = ({ children }) => {
  const [selectedCase, setSelectedCase] = useState({
    id: 0,
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-silver-nc-s10_VW_PF+watch-face-46-aluminum-silver-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3Ni9MMjFrdVpVbER4UTlYL0F6UUxMTXlKN3h2cmJhZy9Wa2xIdm9lcGFpb09vMDVrRDBTL1JGOWgwenZrMUlPenphRldCVytibDdFVW4zaGQraXo4V2lGb0grci9sTHk0cW5yeWNFd2tRMXRGdEhRVmRIZVBLS2FtUFNyZG1CeE40OVlNTUpXNVJHaTMrakMzTkw0cUFRY2xKemp2MTFPaUhOWjNINUFjT21B",
    name: "Silver Aluminum",
    price: 180,
  });
  const [selectedBand, setSelectedBand] = useState({
    id: 0,
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC7J4ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dEtVZDJwdGdSUTNydjBzY0ltbTBpRHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
    name: "Natural Milanese Loop",
    price: 150,
  });

  const value = {
    selectedCase,
    setSelectedCase,
    selectedBand,
    setSelectedBand,
  };

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
};
