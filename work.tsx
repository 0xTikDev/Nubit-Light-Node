  // ── SUCCESS STATE ───────────────────────────────
      <div className="text-center py-16">
        <div className="text-6xl mb-6">✅</div>
        <h2 className="text-2xl font-bold mb-3">
          Audit Submitted Successfully!
        </h2>
        <p className="text-gray-600 mb-8">
          Thank you for your submission
        </p>

        <button
          onClick={() => {
            setSuccess(false);
            // onClose();           ← uncomment if you want to close drawer
          }}
          className="px-8 py-3 bg-gray-200 hover:bg-gray-300 
                     rounded-lg font-medium transition-colors"
        >
          Submit Another
        </button>
      </div>
