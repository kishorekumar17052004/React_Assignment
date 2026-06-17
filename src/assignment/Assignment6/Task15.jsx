import { useState } from "react";

const Task15 = () => {
  const [balance, setBalance] =
    useState(10000);

  const deposit = () => {
    setBalance(balance + 1000);
  };

  const withdraw = () => {
    setBalance(balance - 1000);
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow">
        <h2 className="mb-6 text-3xl font-bold text-slate-800">
          Balance: Rs. {balance}
        </h2>

        <div className="flex justify-center gap-3">
          <button
            onClick={deposit}
            className="rounded bg-green-600 px-5 py-2 font-medium text-white hover:bg-green-700"
          >
            Deposit
          </button>

          <button
            onClick={withdraw}
            className="rounded bg-red-600 px-5 py-2 font-medium text-white hover:bg-red-700"
          >
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task15;
