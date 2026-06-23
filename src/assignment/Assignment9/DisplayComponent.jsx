const DisplayComponent = ({ numbers, color }) => {
  return (
    <div className="pt-2">
      {numbers.length > 0 ? (
        <div className="flex max-h-64 flex-wrap gap-3 overflow-y-auto rounded-xl bg-slate-50 p-4">
          {numbers.map((num) => (
            <span
              key={num}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg font-bold shadow-sm ring-1 ring-slate-200"
              style={{ color: color || "#4f46e5" }}
            >
              {num}
            </span>
          ))}
        </div>
      ) : (
        <p className="rounded-xl border border-dashed border-slate-300 p-5 text-center text-sm text-slate-500">
          Your number sequence will appear here.
        </p>
      )}
    </div>
  );
};

export default DisplayComponent;
