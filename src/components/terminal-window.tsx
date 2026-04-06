export default function TerminalWindow() {
  return (
    <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] overflow-hidden shadow-lg font-[var(--font-mono)] text-sm">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
        <span className="w-3 h-3 rounded-full bg-red-400/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
        <span className="w-3 h-3 rounded-full bg-green-400/70" />
        <span className="ml-2 text-xs text-[var(--text-tertiary)]">api-gateway — zsh</span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-1.5 text-xs leading-relaxed">
        <div>
          <span className="text-[var(--accent)]">❯ </span>
          <span className="text-[var(--text-secondary)]">curl -s /health | jq</span>
        </div>
        <div className="text-[var(--text-tertiary)] pl-4">
          {`{`}
        </div>
        <div className="text-[var(--text-tertiary)] pl-8">
          <span className="text-[var(--accent-secondary)]">&quot;status&quot;</span>
          {`: `}
          <span className="text-[var(--accent)]">&quot;operational&quot;</span>
          {`,`}
        </div>
        <div className="text-[var(--text-tertiary)] pl-8">
          <span className="text-[var(--accent-secondary)]">&quot;latency_p99&quot;</span>
          {`: `}
          <span className="text-[var(--accent-warn)]">12</span>
          {`,`}
        </div>
        <div className="text-[var(--text-tertiary)] pl-8">
          <span className="text-[var(--accent-secondary)]">&quot;requests_sec&quot;</span>
          {`: `}
          <span className="text-[var(--accent-warn)]">4821</span>
        </div>
        <div className="text-[var(--text-tertiary)] pl-4">
          {`}`}
        </div>
        <div className="pt-1">
          <span className="text-[var(--accent)]">❯ </span>
          <span className="text-[var(--text-secondary)]">./deploy.sh --env prod</span>
        </div>
        <div className="text-[var(--text-tertiary)]">
          Deploying to <span className="text-[var(--accent)]">production</span>...
        </div>
        <div className="text-[var(--text-tertiary)]">
          ✓ Health checks passed
        </div>
        <div className="flex items-center gap-0.5">
          <span className="text-[var(--accent)]">❯ </span>
          <span
            className="inline-block w-2 h-4 bg-[var(--accent)] cursor-blink ml-1"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
