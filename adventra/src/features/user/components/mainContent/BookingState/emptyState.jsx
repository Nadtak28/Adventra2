export default function EmptyState() {
  return (
    <div className="flex flex-col px-4 py-6">
      <div className="flex flex-col items-center gap-6">
        <div
          className="bg-center bg-no-repeat aspect-video bg-cover rounded-xl w-full max-w-[360px]"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAzqDmimLm-CmLUihQGlkU_yPMCncsqCzabaBsrOVAaI5tyLIRoxBkFF7ceCkCfkElgYRGTAV8ULRxC0YZHf0usQ7TSlxx-3aBY4v0b4mYEGiQTWd4h_m3v3el_U4QMzvxz61MNNEMuQKdyDvr4EZ0LEQHteUii6j7EDPaLKwy_3b3rwd0wLBRybibi3Rs9fBIhvRzth0Ek2oEj8nopSW33XlzhBobydrny67-P7-4itKsto9rCCy2M9mKdl68-7I-r3XYe6OWx5y4")', 
          }}
        ></div>
        <div className="flex max-w-[480px] flex-col items-center gap-2">
          <p className="text-[#101918] text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">
            No group tours yet
          </p>
          <p className="text-[#101918] text-sm font-normal leading-normal max-w-[480px] text-center">
            Explore our group tours and book your next adventure.
          </p>
        </div>
        <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e9f1f0] text-[#101918] text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Explore Tours</span>
        </button>
      </div>
    </div>
  );
}