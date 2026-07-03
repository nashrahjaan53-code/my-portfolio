import React, { useState, useEffect } from 'react';

export default function AnalyticsSandbox() {
  const [dataset, setDataset] = useState('ecommerce');
  const [analysisMode, setAnalysisMode] = useState('cohort');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [kpiVal1, setKpiVal1] = useState(0);
  const [kpiVal2, setKpiVal2] = useState(0);
  const [logs, setLogs] = useState(['SYSTEM ONLINE', 'Awaiting instruction...']);

  // Pre-configured analytics metadata
  const datasetMeta = {
    ecommerce: {
      name: 'E-commerce Retail Sales',
      cohort: {
        kpi1: { label: 'Initial Cohort Size', target: 2450, suffix: ' users' },
        kpi2: { label: '6-Month Retention', target: 22.4, suffix: '%' },
        points: [100, 48, 36, 29, 24, 22.4],
        insights: 'Cohort analysis reveals a typical steep drop in Month 1 (from 100% to 48%), stabilizing around Month 4. Suggests focusing retention strategies on user onboarding within the first 14 days.',
        logName: 'RETAIL_COHORT_DECAY'
      },
      rfm: {
        kpi1: { label: 'Champions Segment', target: 367, suffix: ' users' },
        kpi2: { label: 'Avg Customer Value', target: 145.2, prefix: '$' },
        bars: [15, 30, 25, 30], // Champions, Loyal, At Risk, Lost
        labels: ['Champ', 'Loyal', 'AtRisk', 'Lost'],
        insights: 'RFM analysis groups 45% of users as highly loyal/champions. However, 25% are "At Risk" with high purchase values but low recent visits, flagging a prime target for email reactivation.',
        logName: 'RFM_CUSTOMER_SEGMENTATION'
      },
      correlation: {
        kpi1: { label: 'Price-Sales Corr', target: -0.68, suffix: '' },
        kpi2: { label: 'Rating-Sales Corr', target: 0.54, suffix: '' },
        heatmap: [
          [1.0, -0.68, 0.12, 0.42],
          [-0.68, 1.0, 0.05, -0.15],
          [0.12, 0.05, 1.0, 0.54],
          [0.42, -0.15, 0.54, 1.0]
        ],
        variables: ['Sales', 'Price', 'Discount', 'Rating'],
        insights: 'The matrix shows a strong negative correlation (-0.68) between unit price and sales volume, while product ratings have a positive influence (+0.54) on overall transaction frequency.',
        logName: 'SALES_CORRELATION_MATRIX'
      },
      forecast: {
        kpi1: { label: 'Q4 Forecasted Vol', target: 820, suffix: 'K $' },
        kpi2: { label: 'Forecast Confidence', target: 94.8, suffix: '%' },
        points: [420, 460, 520, 580, 690, 820],
        insights: 'Time-series forecasting predicts a 18% growth in sales volume for Q4, driven primarily by seasonal trends and holiday traffic. Expected margin of error: ±5.2%.',
        logName: 'SALES_ARIMA_FORECAST'
      }
    },
    realestate: {
      name: 'Real Estate Housing Market',
      cohort: {
        kpi1: { label: 'Listings Tracked', target: 4500, suffix: ' homes' },
        kpi2: { label: 'Avg Days on Market', target: 42, suffix: ' days' },
        points: [100, 72, 54, 38, 20, 8], // active listings retention rate
        insights: 'Listing retention curves indicate 92% of houses are sold within 12 weeks. High-demand areas see listing duration drop to under 14 days, creating high market velocity.',
        logName: 'LISTINGS_DECAY_CURVE'
      },
      rfm: {
        kpi1: { label: 'Tier A Properties', target: 1240, suffix: ' homes' },
        kpi2: { label: 'Average Price', target: 382, suffix: 'K $' },
        bars: [25, 45, 20, 10], // AAA, AA, A, B
        labels: ['AAA', 'AA', 'A', 'B'],
        insights: 'Property classification assigns 70% of current inventory to AAA and AA tiers based on structural scores and location indexing. B-tier houses have high discount elasticities.',
        logName: 'INVESTMENT_RATING_SEGMENTS'
      },
      correlation: {
        kpi1: { label: 'SqFt-Price Corr', target: 0.84, suffix: '' },
        kpi2: { label: 'Rooms-Price Corr', target: 0.62, suffix: '' },
        heatmap: [
          [1.0, 0.84, 0.62, -0.41],
          [0.84, 1.0, 0.72, -0.32],
          [0.62, 0.72, 1.0, -0.22],
          [-0.41, -0.32, -0.22, 1.0]
        ],
        variables: ['Price', 'SqFt', 'Rooms', 'Age'],
        insights: 'SqFt remains the strongest positive pricing driver (0.84 correlation). Building age is negatively correlated (-0.41) with valuation, indicating steady structural depreciation.',
        logName: 'PROPERTY_VALUE_CORRELATIONS'
      },
      forecast: {
        kpi1: { label: 'Avg Price Forecast', target: 412, suffix: 'K $' },
        kpi2: { label: 'R-Squared Accuracy', target: 92.1, suffix: '%' },
        points: [340, 352, 368, 382, 396, 412],
        insights: 'Ensemble models project a steady 5% price appreciation over the next two quarters. Urban centers represent the highest upward skew in pricing distributions.',
        logName: 'PRICE_TRENDS_PROJECTION'
      }
    },
    github: {
      name: 'GitHub Open Source Trends',
      cohort: {
        kpi1: { label: 'Repositories Analyzed', target: 1580, suffix: '' },
        kpi2: { label: 'Developer Retention', target: 18.5, suffix: '%' },
        points: [100, 35, 24, 20, 19, 18.5],
        insights: 'Developer contribution cohort drops to 35% in Month 2. Community engagement and code review feedback speed are statistically proven to improve contributor retention.',
        logName: 'CONTRIBUTOR_COHORT_DECAY'
      },
      rfm: {
        kpi1: { label: 'High Activity Repos', target: 215, suffix: ' repos' },
        kpi2: { label: 'Avg Stars', target: 4500, suffix: ' stars' },
        bars: [10, 25, 45, 20], // Elite, Active, Growing, Inactive
        labels: ['Elite', 'Active', 'Grow', 'Inact'],
        insights: 'Repositores grouped by activity metric segments. 10% fall into the "Elite" category, driving 75% of total star accumulation, indicating a heavily skewed Pareto distribution.',
        logName: 'REPO_ENGAGEMENT_CLASSIFICATION'
      },
      correlation: {
        kpi1: { label: 'Stars-Forks Corr', target: 0.91, suffix: '' },
        kpi2: { label: 'Issues-Stars Corr', target: 0.28, suffix: '' },
        heatmap: [
          [1.0, 0.91, 0.28, 0.68],
          [0.91, 1.0, 0.21, 0.62],
          [0.28, 0.21, 1.0, 0.35],
          [0.68, 0.62, 0.35, 1.0]
        ],
        variables: ['Stars', 'Forks', 'Issues', 'PRs'],
        insights: 'Stars and Forks show a nearly linear correlation (0.91). Open issues show low correlation with stars (0.28), showing that bug count does not directly discourage project popularity.',
        logName: 'PROJECT_POPULARITY_HEATMAP'
      },
      forecast: {
        kpi1: { label: 'Projected Star Gain', target: 12.8, suffix: 'K stars' },
        kpi2: { label: 'Model Forecast Error', target: 4.8, suffix: '%' },
        points: [5.2, 6.8, 8.1, 9.5, 11.2, 12.8],
        insights: 'Forecasting algorithms project star growth using past commit and PR volume. An inflection point is anticipated, accelerating adoption after reaching a threshold of 10K stars.',
        logName: 'REPO_GROWTH_PREDICTOR'
      }
    },
    covid: {
      name: 'COVID-19 Global Datasets',
      cohort: {
        kpi1: { label: 'Daily Reports Loaded', target: 8200, suffix: ' cases' },
        kpi2: { label: 'Avg Recovery Time', target: 14.2, suffix: ' days' },
        points: [100, 65, 32, 15, 8, 4], // active case duration retention
        insights: 'Recovery rate cohort tracking shows 96% of cases resolved within 28 days. Long-covid cases (active past 28 days) make up 4% of total infection cohorts.',
        logName: 'ACTIVE_CASES_DECAY'
      },
      rfm: {
        kpi1: { label: 'Critical Care Tiers', target: 540, suffix: ' cases' },
        kpi2: { label: 'Avg Risk Index', target: 7.2, suffix: ' / 10' },
        bars: [12, 18, 50, 20], // High Risk, Medium, Stable, Recovered
        labels: ['High', 'Med', 'Stable', 'Recov'],
        insights: 'Risk grading groups patient demographics. High risk cases (12% of sample) correspond highly to age index and pre-existing metrics, suggesting targeted healthcare resource planning.',
        logName: 'PATIENT_RISK_DISTRIBUTION'
      },
      correlation: {
        kpi1: { label: 'Cases-Deaths Corr', target: 0.72, suffix: '' },
        kpi2: { label: 'Vax-Deaths Corr', target: -0.62, suffix: '' },
        heatmap: [
          [1.0, 0.72, 0.45, -0.62],
          [0.72, 1.0, 0.38, -0.58],
          [0.45, 0.38, 1.0, 0.12],
          [-0.62, -0.58, 0.12, 1.0]
        ],
        variables: ['Cases', 'Deaths', 'Tests', 'Vax'],
        insights: 'A strong negative correlation (-0.62) is observed between vaccination rates and mortality ratios, confirming vaccine efficacy in suppressing clinical risk profiles.',
        logName: 'EPIDEMIC_VARIABLE_MATRIX'
      },
      forecast: {
        kpi1: { label: 'Trend Turning Point', target: 18, suffix: ' days' },
        kpi2: { label: 'Forecast Fit (R2)', target: 91.5, suffix: '%' },
        points: [140, 158, 162, 150, 125, 95], // cases peaking and dropping
        insights: 'Peak case trajectory modeling suggests a peak within 18 days, followed by a steady drop. Vaccination speedups are projected to contract the peak timeline by 4 days.',
        logName: 'INFECTION_CURVE_PREDICTOR'
      }
    }
  };

  const handleRunAnalysis = () => {
    if (isAnalyzing) return;
    setIsAnalyzing(true);
    setKpiVal1(0);
    setKpiVal2(0);

    const activeMeta = datasetMeta[dataset][analysisMode];
    const logPrefix = `[${activeMeta.logName}]`;

    setLogs([
      `>> INITIATING DATA EXTRACTION...`,
      `${logPrefix} Loading table row values...`,
      `${logPrefix} Sanitizing null variables...`
    ]);

    // Step-by-step logs simulation
    setTimeout(() => {
      setLogs(prev => [...prev, `${logPrefix} Performing descriptive statistical calculations...`]);
    }, 600);

    setTimeout(() => {
      setLogs(prev => [...prev, `${logPrefix} Fitting statistical analytics algorithm models...`]);
    }, 1200);

    setTimeout(() => {
      setLogs(prev => [
        ...prev,
        `${logPrefix} Generating analytical plots and dashboard arrays...`,
        `>> ANALYSIS SECURE. RENDER GRAPH.`
      ]);

      // Animate KPIs count up
      animateValue(setKpiVal1, activeMeta.kpi1.target);
      animateValue(setKpiVal2, activeMeta.kpi2.target);
      setIsAnalyzing(false);
    }, 1800);
  };

  const animateValue = (setter, target) => {
    let current = 0;
    const isFloat = !Number.isInteger(target);
    const increment = target / 25;
    const interval = setInterval(() => {
      current += increment;
      if ((increment > 0 && current >= target) || (increment < 0 && current <= target)) {
        setter(target);
        clearInterval(interval);
      } else {
        setter(isFloat ? parseFloat(current.toFixed(2)) : Math.round(current));
      }
    }, 30);
  };

  // Run analysis automatically when options change
  useEffect(() => {
    handleRunAnalysis();
  }, [dataset, analysisMode]);

  const activeMeta = datasetMeta[dataset][analysisMode];

  return (
    <div className="sandbox-card">
      <div className="sandbox-header">
        <div className="sandbox-title-container">
          <span className="sandbox-status" />
          <span className="sandbox-title">NASHRAH_OS // ANALYTICS_SANDBOX v1.0.0</span>
        </div>
        <div className="sandbox-controls">
          <label htmlFor="dataset-select" style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-secondary)' }}>Dataset:</label>
          <select
            id="dataset-select"
            className="sandbox-select"
            value={dataset}
            onChange={(e) => setDataset(e.target.value)}
            disabled={isAnalyzing}
          >
            <option value="ecommerce">E-commerce Sales</option>
            <option value="realestate">Real Estate Housing</option>
            <option value="github">GitHub Trends</option>
            <option value="covid">COVID-19 Pandemic</option>
          </select>
        </div>
      </div>

      <div className="sandbox-body">
        {/* Left Column Controls */}
        <div className="sandbox-left">
          <div className="config-group">
            <span className="config-label">Select Analysis Operation</span>
            <div className="option-grid">
              <button
                className={`option-btn ${analysisMode === 'cohort' ? 'active' : ''}`}
                onClick={() => setAnalysisMode('cohort')}
                disabled={isAnalyzing}
              >
                Cohort Decay
              </button>
              <button
                className={`option-btn ${analysisMode === 'rfm' ? 'active' : ''}`}
                onClick={() => setAnalysisMode('rfm')}
                disabled={isAnalyzing}
              >
                User Segments
              </button>
              <button
                className={`option-btn ${analysisMode === 'correlation' ? 'active' : ''}`}
                onClick={() => setAnalysisMode('correlation')}
                disabled={isAnalyzing}
              >
                Correlation Matrix
              </button>
              <button
                className={`option-btn ${analysisMode === 'forecast' ? 'active' : ''}`}
                onClick={() => setAnalysisMode('forecast')}
                disabled={isAnalyzing}
              >
                Trend Forecasting
              </button>
            </div>
          </div>

          <div className="config-group">
            <span className="config-label">Key Performance Indicators</span>
            <div className="sandbox-metrics">
              <div className="metric-box">
                <div className="metric-label">{activeMeta.kpi1.label}</div>
                <div className="metric-value">
                  {activeMeta.kpi1.prefix || ''}
                  {kpiVal1}
                  {activeMeta.kpi1.suffix || ''}
                </div>
              </div>
              <div className="metric-box">
                <div className="metric-label">{activeMeta.kpi2.label}</div>
                <div className="metric-value">
                  {activeMeta.kpi2.prefix || ''}
                  {kpiVal2}
                  {activeMeta.kpi2.suffix || ''}
                </div>
              </div>
            </div>
          </div>

          <div className="config-group">
            <span className="config-label">Analytics Console Output</span>
            <div className="sandbox-logs">
              {logs.map((line, idx) => (
                <div key={idx} className="log-line">
                  <span className="log-accent">{idx === logs.length - 1 ? '>' : '$'}</span> {line}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column Visualizations */}
        <div className="sandbox-right">
          <span className="config-label">Data Visualization</span>
          <div className="chart-panel">
            {isAnalyzing ? (
              <div style={{ color: 'var(--accent-gold-dark)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <span className="brand-dot" style={{ width: '16px', height: '16px', animation: 'ping 1s infinite' }} />
                <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)' }}>PROCESSING MATRIX...</span>
              </div>
            ) : (
              <>
                {/* Cohort Decay Chart (Line) */}
                {analysisMode === 'cohort' && (
                  <svg className="chart-svg" viewBox="0 0 300 200">
                    <line x1="30" y1="20" x2="30" y2="170" stroke="var(--text-tertiary)" strokeWidth="1" />
                    <line x1="30" y1="170" x2="280" y2="170" stroke="var(--text-tertiary)" strokeWidth="1" />
                    
                    {/* Grid lines */}
                    <line x1="30" y1="20" x2="280" y2="20" className="svg-grid-line" />
                    <line x1="30" y1="70" x2="280" y2="70" className="svg-grid-line" />
                    <line x1="30" y1="120" x2="280" y2="120" className="svg-grid-line" />
                    
                    {/* Cohort Curve */}
                    <path
                      d={`M 30 ${170 - activeMeta.points[0] * 1.4} 
                          C 70 ${170 - activeMeta.points[1] * 1.4}, 
                            110 ${170 - activeMeta.points[2] * 1.4}, 
                            150 ${170 - activeMeta.points[3] * 1.4} 
                          S 210 ${170 - activeMeta.points[4] * 1.4}, 
                            270 ${170 - activeMeta.points[5] * 1.4}`}
                      className="svg-line"
                    />

                    {/* Nodes */}
                    {activeMeta.points.map((p, i) => {
                      // Calculate path coordinates roughly
                      const x = 30 + i * 48;
                      // Cubic spline y calculation approximation
                      let y = 170 - p * 1.4;
                      return (
                        <g key={i}>
                          <circle cx={x} cy={y} r="4" className="svg-point" />
                          <text x={x} y={y - 8} fill="var(--text-secondary)" fontSize="8" textAnchor="middle" fontFamily="var(--font-mono)">
                            {p}%
                          </text>
                          <text x={x} y="184" fill="var(--text-secondary)" fontSize="8" textAnchor="middle" fontFamily="var(--font-mono)">
                            M{i}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                )}

                {/* RFM Segments (Bar) */}
                {analysisMode === 'rfm' && (
                  <svg className="chart-svg" viewBox="0 0 300 200">
                    <line x1="30" y1="20" x2="30" y2="170" stroke="var(--text-tertiary)" strokeWidth="1" />
                    <line x1="30" y1="170" x2="280" y2="170" stroke="var(--text-tertiary)" strokeWidth="1" />

                    {/* Bars */}
                    {activeMeta.bars.map((bar, i) => {
                      const x = 50 + i * 55;
                      const barHeight = bar * 3;
                      const y = 170 - barHeight;
                      return (
                        <g key={i}>
                          <rect
                            x={x}
                            y={y}
                            width="30"
                            height={barHeight}
                            className="svg-bar"
                          />
                          <text x={x + 15} y={y - 8} fill="var(--accent-gold-dark)" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="var(--font-mono)">
                            {bar}%
                          </text>
                          <text x={x + 15} y="184" fill="var(--text-secondary)" fontSize="9" textAnchor="middle" fontFamily="var(--font-body)">
                            {activeMeta.labels[i]}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                )}

                {/* Correlation Matrix (Heatmap Grid) */}
                {analysisMode === 'correlation' && (
                  <div className="heatmap-grid">
                    {activeMeta.heatmap.map((row, rIdx) =>
                      row.map((val, cIdx) => {
                        // Calculate color intensity based on correlation val (-1 to 1)
                        const absVal = Math.abs(val);
                        const isPos = val >= 0;
                        const bgCol = isPos
                          ? `rgba(184, 144, 71, ${absVal * 0.9})`
                          : `rgba(120, 113, 108, ${absVal * 0.9})`;
                        const textCol = absVal > 0.4 ? '#ffffff' : 'var(--text-primary)';
                        
                        return (
                          <div
                            key={`${rIdx}-${cIdx}`}
                            className="heatmap-cell"
                            style={{
                              backgroundColor: bgCol,
                              color: textCol,
                              animationDelay: `${(rIdx + cIdx) * 0.05}s`
                            }}
                            title={`${activeMeta.variables[rIdx]} x ${activeMeta.variables[cIdx]} = ${val}`}
                          >
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                              <span>{val > 0 && val < 1 ? `+${val}` : val}</span>
                              <span style={{ fontSize: '7px', opacity: 0.75, marginTop: '1px' }}>
                                {activeMeta.variables[rIdx].slice(0, 3)}:{activeMeta.variables[cIdx].slice(0, 3)}
                              </span>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                )}

                {/* Growth Forecasting (Double Line) */}
                {analysisMode === 'forecast' && (
                  <svg className="chart-svg" viewBox="0 0 300 200">
                    <line x1="30" y1="20" x2="30" y2="170" stroke="var(--text-tertiary)" strokeWidth="1" />
                    <line x1="30" y1="170" x2="280" y2="170" stroke="var(--text-tertiary)" strokeWidth="1" />

                    {/* Historical Curve */}
                    <path
                      d={`M 35 150 L 80 138 L 125 125 L 170 115`}
                      className="svg-line-secondary"
                    />

                    {/* Forecasted Curve */}
                    <path
                      d={`M 170 115 L 215 95 L 265 70`}
                      className="svg-line"
                      style={{ strokeDasharray: '4, 4' }}
                    />

                    {/* Nodes */}
                    {activeMeta.points.map((p, i) => {
                      const x = 35 + i * 46;
                      // Scale points to fit
                      const maxVal = Math.max(...activeMeta.points);
                      const minVal = Math.min(...activeMeta.points);
                      const y = 160 - ((p - minVal) / (maxVal - minVal)) * 100;
                      
                      const isForecast = i >= 3;

                      return (
                        <g key={i}>
                          <circle
                            cx={x}
                            cy={y}
                            r={isForecast ? "4.5" : "3"}
                            className="svg-point"
                            style={{ fill: isForecast ? 'var(--accent-gold)' : 'var(--text-secondary)' }}
                          />
                          <text x={x} y={y - 8} fill="var(--text-primary)" fontSize="8" textAnchor="middle" fontFamily="var(--font-mono)">
                            {p}
                          </text>
                          <text x={x} y="184" fill="var(--text-secondary)" fontSize="8" textAnchor="middle" fontFamily="var(--font-mono)">
                            {i < 3 ? `T-${3 - i}` : `F+${i - 2}`}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                )}
              </>
            )}
          </div>

          <div className="insight-card">
            <div className="insight-title">Executive Insight</div>
            <div className="insight-text">
              {isAnalyzing ? 'Processing data tensors...' : activeMeta.insights}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
