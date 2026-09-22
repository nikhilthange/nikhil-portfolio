import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CLI_COMMANDS } from '../data/portfolioData';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: string[] | string;
  title?: string;
  isError?: boolean;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 'welcome',
      command: 'system-init',
      title: 'Nikhil Thange v2.4.0 CLI Shell (x86_64-node-react)',
      output: [
        'Welcome to Nikhil\'s Interactive Terminal.',
        'Type "help" to view all executable commands, or click the quick tags below.',
        'Type "hire" to initiate recruiter priority handshake.'
      ]
    }
  ]);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    // Add to history
    setHistory((prev) => [...prev, cmdStr]);
    setHistoryIndex(-1);

    if (trimmed === 'clear') {
      setLogs([]);
      setInput('');
      return;
    }

    if (trimmed === 'exit' || trimmed === 'quit') {
      onClose();
      return;
    }

    if (trimmed === 'hire') {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    const commandResult = CLI_COMMANDS[trimmed];

    if (commandResult) {
      if (typeof commandResult === 'string') {
        setLogs((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            command: cmdStr,
            output: [commandResult]
          }
        ]);
      } else {
        setLogs((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            command: cmdStr,
            title: commandResult.title,
            output: commandResult.output
          }
        ]);
      }
    } else if (trimmed.startsWith('sudo')) {
      setLogs((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          command: cmdStr,
          output: ['[ADMIN ROOT] Permission granted: Nikhil Thange is ready to lead high-impact engineering!'],
          title: 'Root Privilege Executed'
        }
      ]);
    } else {
      setLogs((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          command: cmdStr,
          output: [`command not found: "${trimmed}". Type "help" for a list of valid commands.`],
          isError: true
        }
      ]);
    }

    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(history[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const quickCommands = ['whoami', 'skills', 'projects', 'experience', 'metrics', 'resume', 'hire', 'clear'];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 xs:p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className={`w-full ${
          isFullScreen ? 'max-w-6xl h-[94vh]' : 'max-w-3xl h-[88vh] sm:h-[650px]'
        } flex flex-col rounded-xl sm:rounded-2xl border border-white/15 overflow-hidden shadow-2xl bg-[#070b14] transition-all duration-300 font-mono`}
        onClick={(e) => {
          e.stopPropagation();
          inputRef.current?.focus();
        }}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0d1322] border-b border-white/10 select-none">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3.5 h-3.5 rounded-full bg-rose-500 hover:opacity-80 flex items-center justify-center text-black"
              aria-label="Close Terminal"
            />
            <button
              onClick={() => setIsFullScreen(!isFullScreen)}
              className="w-3.5 h-3.5 rounded-full bg-amber-500 hover:opacity-80 flex items-center justify-center text-black"
              aria-label="Toggle Size"
            />
            <button
              onClick={() => setLogs([])}
              className="w-3.5 h-3.5 rounded-full bg-emerald-500 hover:opacity-80 flex items-center justify-center text-black"
              aria-label="Clear Screen"
            />
            <span className="text-xs font-mono text-slate-400 ml-3 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-[#00D9FF]" />
              nikhil@portfolio-cli: ~ (zsh)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFullScreen(!isFullScreen)}
              className="p-1 rounded text-slate-400 hover:text-white"
              aria-label="Fullscreen toggle"
            >
              {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-rose-400"
              aria-label="Close terminal window"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Chips */}
        <div className="px-4 py-2 bg-[#090e1a] border-b border-white/5 flex flex-wrap items-center gap-1.5 text-[11px]">
          <span className="text-slate-500">Quick:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={(e) => {
                e.stopPropagation();
                handleCommand(cmd);
              }}
              className={`px-2 py-0.5 rounded transition-colors ${
                cmd === 'hire'
                  ? 'bg-[#00D9FF]/20 text-[#00D9FF] border border-[#00D9FF]/40 hover:bg-[#00D9FF]/30'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-white/5'
              }`}
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Screen / Logs */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs terminal-screen text-slate-200 select-text">
          {logs.map((log) => (
            <div key={log.id} className="space-y-1">
              {/* Command Prompt line */}
              <div className="flex items-center gap-2 text-[#00D9FF] font-semibold">
                <span className="text-emerald-400">nikhil@mumbai:~$</span>
                <span>{log.command}</span>
              </div>

              {/* Title if any */}
              {log.title && (
                <div className="text-[#8BE9FD] font-semibold pt-0.5 font-space tracking-wider uppercase">
                  === {log.title} ===
                </div>
              )}

              {/* Output */}
              <div className="pl-2 space-y-1">
                {Array.isArray(log.output) ? (
                  log.output.map((line, lIdx) => (
                    <div
                      key={lIdx}
                      className={`leading-relaxed ${
                        log.isError ? 'text-rose-400' : 'text-slate-300'
                      }`}
                    >
                      {line}
                    </div>
                  ))
                ) : (
                  <div className={log.isError ? 'text-rose-400' : 'text-slate-300'}>
                    {log.output}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 text-[#00D9FF] pt-1">
            <span className="text-emerald-400 shrink-0">nikhil@mumbai:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-slate-100 font-mono text-xs focus:ring-0 p-0"
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </div>

          <div ref={bottomRef} />
        </div>

        {/* Bottom Status */}
        <div className="px-4 py-2 bg-[#0d1322] border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 select-none">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>CLI READY</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Press <kbd className="px-1 bg-slate-800 rounded border border-slate-700">Enter</kbd> to run</span>
            <span><kbd className="px-1 bg-slate-800 rounded border border-slate-700">&uarr;&darr;</kbd> for history</span>
          </div>
        </div>
      </div>
    </div>
  );
};
