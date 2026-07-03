import React, { useState, useRef, useEffect } from 'react';

export default function CommandLineTerminal() {
  const [history, setHistory] = useState([
    { text: 'NASHRAH_OS [Version 1.0.0]', type: 'system' },
    { text: 'Welcome to the analytics shell. Type "help" to list active commands.', type: 'system' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const windowRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (windowRef.current) {
      windowRef.current.scrollTop = windowRef.current.scrollHeight;
    }
  }, [history]);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCommand = (e) => {
    if (e.key !== 'Enter') return;
    const rawCmd = inputVal.trim();
    if (!rawCmd) return;

    const cmd = rawCmd.toLowerCase();
    const newHistory = [...history, { text: `nashrah@analytics-OS:~$ ${rawCmd}`, type: 'input' }];

    let response = [];
    switch (cmd) {
      case 'help':
        response = [
          { text: 'Active Console Commands:', type: 'output-header' },
          { text: '  about      - Display professional profile summary', type: 'output' },
          { text: '  skills     - Output technical stack classification matrix', type: 'output' },
          { text: '  projects   - Show highlights from repository showroom', type: 'output' },
          { text: '  visitor    - Output persistent site visitor telemetry', type: 'output' },
          { text: '  contact    - Print direct communication coordinates', type: 'output' },
          { text: '  clear      - Reset terminal interface', type: 'output' }
        ];
        break;
      case 'about':
        response = [
          { text: 'Profile: Nashrah Khan // Data Analyst & BI Developer', type: 'output-header' },
          { text: '  Location: Srinagar, Jammu & Kashmir, India', type: 'output' },
          { text: '  Specialization: Translating unstructured database matrices into business intelligence.', type: 'output' },
          { text: '  Methodology: Focuses on SQL audits, regression forecasting, and dashboard engineering.', type: 'output' }
        ];
        break;
      case 'skills':
        response = [
          { text: 'Technical Skill Matrix:', type: 'output-header' },
          { text: '  SQL & Databases  : SQLite, PostgreSQL, MySQL, SQL Server', type: 'output' },
          { text: '  Python & R Core  : Pandas, NumPy, scikit-learn, PyTorch, Gym/Gymnasium', type: 'output' },
          { text: '  BI Visualization : Power BI, Streamlit, Dash, Plotly, Seaborn', type: 'output' },
          { text: '  Developer Stacks : React, Node.js, Git, Docker, REST APIs', type: 'output' }
        ];
        break;
      case 'projects':
        response = [
          { text: 'Showroom Highlights (Top Repositories):', type: 'output-header' },
          { text: '  1. rl-risk-trading-agent  - Gymnasium reinforcement trader with risk boundaries', type: 'output' },
          { text: '  2. ortho-assist-ai        - X-Ray anomaly diagnosis using PyTorch ViT + Gemini', type: 'output' },
          { text: '  3. geospatial-tracker     - Unsupervised DBSCAN foot-traffic hub clustering', type: 'output' },
          { text: '  4. leetcode-solutions     - Optimized competitive algorithm resolutions', type: 'output' },
          { text: 'Type "leetcode" to launch LeetCode repository directly.', type: 'system' }
        ];
        break;
      case 'leetcode':
        window.open('https://github.com/nashrahjaan53-code/leetcode-solutions', '_blank');
        response = [{ text: 'Opening leetcode-solutions repository in a new window...', type: 'system' }];
        break;
      case 'visitor':
        const count = localStorage.getItem('portfolio_visitors') || '24,842';
        response = [
          { text: 'Visitor Telemetry:', type: 'output-header' },
          { text: `  Total Page Loads Registered : ${count}`, type: 'output' },
          { text: '  Active Concurrent Readers   : 3 (Simulated session loops)', type: 'output' },
          { text: '  Data Persistence Mode       : Active (localStorage)', type: 'output' }
        ];
        break;
      case 'contact':
        response = [
          { text: 'Communication Channels:', type: 'output-header' },
          { text: '  Direct Email : nashrahjaan53@gmail.com', type: 'output' },
          { text: '  GitHub       : github.com/nashrahjaan53-code', type: 'output' },
          { text: '  LinkedIn     : linkedin.com/in/nashrah-khan-data-analyst', type: 'output' }
        ];
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      default:
        response = [{ text: `Command not found: "${rawCmd}". Type "help" for a list of commands.`, type: 'error' }];
    }

    setHistory([...newHistory, ...response]);
    setInputVal('');
  };

  return (
    <div className="terminal-card" onClick={focusInput}>
      <div className="terminal-header">
        <div className="terminal-dots">
          <div className="terminal-dot-item" style={{ backgroundColor: '#ef4444' }} />
          <div className="terminal-dot-item" style={{ backgroundColor: '#eab308' }} />
          <div className="terminal-dot-item" style={{ backgroundColor: '#22c55e' }} />
        </div>
        <div className="terminal-title-text">nashrah@analytics-OS: ~</div>
        <div style={{ width: '42px' }} /> {/* balancer */}
      </div>

      <div className="terminal-window" ref={windowRef}>
        {history.map((line, idx) => (
          <div 
            key={idx} 
            className="terminal-line"
            style={{
              color: 
                line.type === 'system' ? '#87817a' :
                line.type === 'input' ? '#fafaf9' :
                line.type === 'output-header' ? '#dfc588' :
                line.type === 'error' ? '#ef4444' : '#d6cfc7'
            }}
          >
            {line.text}
          </div>
        ))}

        <div className="terminal-prompt-line">
          <span className="terminal-prompt">nashrah@analytics-OS:~$</span>
          <input
            ref={inputRef}
            type="text"
            className="terminal-input"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleCommand}
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
}
