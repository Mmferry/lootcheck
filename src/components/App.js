import React from "react";

import Wallet from "../components/Wallet";
import Loot from "../components/Loot";

const App = () => {
  return (
    <div>
      <h2>Loot Check</h2>
      <hr />
      <Wallet />
      <hr />
      <Loot />
      <div>
        Powered by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.coindesk.com/price"
        >
          Coindesk
        </a>
      </div>
      <div>
        Developed by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/mohammedfarid/"
        >
          Mohammed Farid
        </a>
      </div>
    </div>
  );
};

export default App;
