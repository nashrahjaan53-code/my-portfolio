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
        points: [100, 72, 54, 38, 20, 8],
        insights: 'Listing retention curves indicate 92% of houses are sold within 12 weeks. High-demand areas see listing duration drop to under 14 days, creating high market velocity.',
        logName: 'LISTINGS_DECAY_CURVE'
      },
      rfm: {
        kpi1: { label: 'Tier A Properties', target: 1240, suffix: ' homes' },
        kpi2: { label: 'Average Price', target: 382, suffix: 'K $' },
        bars: [25, 45, 20, 10],
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
        bars: [10, 25, 45, 20],
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
        points: [100, 65, 32, 15, 8, 4],
        insights: 'Recovery rate cohort tracking shows 96% of cases resolved within 28 days. Long-covid cases (active past 28 days) make up 4% of total infection cohorts.',
        logName: 'ACTIVE_CASES_DECAY'
      },
      rfm: {
        kpi1: { label: 'Critical Care Tiers', target: 540, suffix: ' cases' },
        kpi2: { label: 'Avg Risk Index', target: 7.2, suffix: ' / 10' },
        bars: [12, 18, 50, 20],
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
        points: [140, 158, 162, 150, 125, 95],
        insights: 'Peak case trajectory modeling suggests a peak within 18 days, followed by a steady drop. Vaccination speedups are projected to contract the peak timeline by 4 days.',
        logName: 'INFECTION_CURVE_PREDICTOR'
      }
    },
    trading: {
      name: 'RL Financial Trading Logs',
      cohort: {
        kpi1: { label: 'Training Episodes', target: 1200, suffix: ' runs' },
        kpi2: { label: 'Episode Stable Rate', target: 82.5, suffix: '%' },
        points: [100, 84, 76, 68, 55, 34.8],
        insights: 'RL Agent trajectory decay indicates strong performance stability over 1200 episodes. Position size limits keep drawdown risk constrained under 5% throughout trading loops.',
        logName: 'RL_AGENT_TRAJECTORY_DECAY'
      },
      rfm: {
        kpi1: { label: 'Profitable Trades', target: 712, suffix: ' trades' },
        kpi2: { label: 'Avg Sharpe Ratio', target: 2.84, suffix: '' },
        bars: [28, 42, 20, 10],
        labels: ['Long', 'Short', 'Hedge', 'Inact'],
        insights: 'Segmenting trade operations reveals 70% of positive returns are driven by active Long and Short positions, with Hedging rules successfully buffering systematic volatility loops.',
        logName: 'TRADE_STRATEGY_SEGMENTS'
      },
      correlation: {
        kpi1: { label: 'Leverage-Drawdown Corr', target: 0.76, suffix: '' },
        kpi2: { label: 'Volatility-Return Corr', target: -0.32, suffix: '' },
        heatmap: [
          [1.0, 0.76, -0.32, 0.45],
          [0.76, 1.0, -0.42, 0.22],
          [-0.32, -0.42, 1.0, 0.15],
          [0.45, 0.22, 0.15, 1.0]
        ],
        variables: ['Leverage', 'Drawdown', 'Volatility', 'Return'],
        insights: 'Correlational analysis confirms leverage settings possess a high risk coefficient (0.76) when mapped directly against peak portfolio drawdowns.',
        logName: 'TRADING_RISK_MATRICES'
      },
      forecast: {
        kpi1: { label: 'Projected Sharpe Gain', target: 3.12, suffix: '' },
        kpi2: { label: 'Confidence Interval', target: 95.5, suffix: '%' },
        points: [2.1, 2.3, 2.5, 2.8, 2.9, 3.12],
        insights: 'DQN and PPO reinforcement algorithms forecast a Sharpe Ratio expansion to 3.12 in Q3, backed by continuous reward-shaping optimizers.',
        logName: 'TRADING_REWARD_FORECAST'
      }
    },
    traffic: {
      name: 'DBSCAN Spatial Traffic Logs',
      cohort: {
        kpi1: { label: 'Coordinate Nodes', target: 8900, suffix: ' pts' },
        kpi2: { label: 'Isolated Noise Ratio', target: 12.4, suffix: '%' },
        points: [100, 85, 70, 52, 30, 12.4],
        insights: 'Clustering analysis identifies dense coordinate density nodes. Noise isolation filters out 12% of outlying readings as GPS sensor drift anomalies.',
        logName: 'TRAFFIC_NODE_DECAY'
      },
      rfm: {
        kpi1: { label: 'Isolated Hubs', target: 345, suffix: ' hubs' },
        kpi2: { label: 'Avg Node Density', target: 124, suffix: ' / m²' },
        bars: [18, 32, 40, 10],
        labels: ['High', 'Med', 'Low', 'Noise'],
        insights: 'Density grouping assigns 50% of traffic paths to Medium and High density hubs, indicating clear commuter hubs along transit lines.',
        logName: 'SPATIAL_DENSITY_PROFILES'
      },
      correlation: {
        kpi1: { label: 'Time-Density Corr', target: 0.62, suffix: '' },
        kpi2: { label: 'Speed-Density Corr', target: -0.58, suffix: '' },
        heatmap: [
          [1.0, 0.62, -0.58, 0.18],
          [0.62, 1.0, -0.48, 0.25],
          [-0.58, -0.48, 1.0, -0.12],
          [0.18, 0.25, -0.12, 1.0]
        ],
        variables: ['Time', 'Density', 'Speed', 'Distance'],
        insights: 'Commute hours show a positive correlation (0.62) with hub density, causing a corresponding drop (-0.58) in travel speed.',
        logName: 'TRAFFIC_VARIABLE_HEATMAP'
      },
      forecast: {
        kpi1: { label: 'Peak Commute Growth', target: 14.8, suffix: '%' },
        kpi2: { label: 'Model Fit (R2)', target: 93.2, suffix: '%' },
        points: [12.0, 12.8, 13.5, 14.0, 14.5, 14.8],
        insights: 'ARIMA modeling forecasts a 14.8% spike in pedestrian traffic densities near urban coordinates, suggesting transit adjustments.',
        logName: 'TRAFFIC_VOLUME_FORECASTER'
      }
    },
    medical: {
      name: 'OrthoAssist AI Clinical Records',
      cohort: {
        kpi1: { label: 'Radiograph Ingests', target: 3120, suffix: ' scans' },
        kpi2: { label: 'Verification Decay', target: 12.5, suffix: '%' },
        points: [100, 72, 48, 31, 18, 12.5],
        insights: 'Prescription safety auditing decay charts show dual-check validations are completed within 90 seconds in 87.5% of cases.',
        logName: 'CLINICAL_VERIFY_DECAY'
      },
      rfm: {
        kpi1: { label: 'Severe Anomalies', target: 184, suffix: ' cases' },
        kpi2: { label: 'Gemini Safety Match', target: 98.4, suffix: '%' },
        bars: [45, 30, 15, 10],
        labels: ['Fract', 'Disloc', 'Joint', 'Normal'],
        insights: 'Demographic groupings classify 45% of orthopaedic scans as active fractures, requiring immediate prescription checks.',
        logName: 'ORTHO_DIAGNOSTIC_SEGMENTS'
      },
      correlation: {
        kpi1: { label: 'Age-Fracture Corr', target: 0.65, suffix: '' },
        kpi2: { label: 'Severity-Verify Corr', target: 0.78, suffix: '' },
        heatmap: [
          [1.0, 0.65, 0.42, 0.78],
          [0.65, 1.0, 0.28, 0.52],
          [0.42, 0.28, 1.0, 0.31],
          [0.78, 0.52, 0.31, 1.0]
        ],
        variables: ['Age', 'Fracture', 'Joint', 'Verify'],
        insights: 'High correlation (0.78) between anomaly severity and Gemini validation latency, indicating extra parsing loops.',
        logName: 'CLINICAL_CORRELATION_MATRIX'
      },
      forecast: {
        kpi1: { label: 'Model Forecast (AUC)', target: 96.2, suffix: '%' },
        kpi2: { label: 'Confidence Margin', target: 98.8, suffix: '%' },
        points: [89.2, 91.4, 93.0, 94.5, 95.8, 96.2],
        insights: 'Vision Transformer predictions forecast a peak diagnostic AUC of 96.2% as training data parameters expand in phase 3.',
        logName: 'MODEL_PRECISION_FORECAST'
      }
    },
    security: {
      name: 'Ethereum Smart Contracts',
      cohort: {
        kpi1: { label: 'Contracts Audited', target: 1240, suffix: ' repos' },
        kpi2: { label: 'False Positive Decay', target: 5.4, suffix: '%' },
        points: [100, 42, 22, 12, 7, 5.4],
        insights: 'Security auditing loops successfully prune static analysis warning counts within 4 syntax checks.',
        logName: 'VULNERABILITY_DECAY_CURVE'
      },
      rfm: {
        kpi1: { label: 'Vulnerable Files', target: 284, suffix: ' files' },
        kpi2: { label: 'Average Gas Cost', target: 820, suffix: ' gwei' },
        bars: [12, 24, 48, 16],
        labels: ['Reent', 'Oflow', 'Access', 'Secure'],
        insights: 'Stack ensemble models classify bytecode alerts. 12% indicate high-severity Reentrancy vulnerability potentials.',
        logName: 'BYTECODE_RISK_SEGMENTS'
      },
      correlation: {
        kpi1: { label: 'Lines-Vulnerability', target: 0.58, suffix: '' },
        kpi2: { label: 'Complexity-Gas Corr', target: 0.82, suffix: '' },
        heatmap: [
          [1.0, 0.58, 0.82, 0.44],
          [0.58, 1.0, 0.68, 0.35],
          [0.82, 0.68, 1.0, 0.41],
          [0.44, 0.35, 0.41, 1.0]
        ],
        variables: ['Lines', 'Vulner', 'Gas', 'Calls'],
        insights: 'Cyclomatic code complexity shows a very high correlation (0.82) with contract gas execution requirements.',
        logName: 'CONTRACT_COMPLEXITY_HEATMAP'
      },
      forecast: {
        kpi1: { label: 'Vuln Detection Rate', target: 94.5, suffix: '%' },
        kpi2: { label: 'Random Forest Fit', target: 92.8, suffix: '%' },
        points: [82.0, 85.4, 88.0, 91.2, 93.0, 94.5],
        insights: 'Stacking ensembles project an increase in audit coverage to 94.5% using custom bytecode feature vector models.',
        logName: 'DETECTOR_ACCURACY_PROJECTION'
      }
    },
    stock: {
      name: 'Google Stock Time-Series',
      cohort: {
        kpi1: { label: 'Historical Days', target: 1250, suffix: ' days' },
        kpi2: { label: 'Mean Absolute Error', target: 4.82, suffix: ' $' },
        points: [100, 68, 45, 28, 15, 6.2],
        insights: 'Backtesting residuals show error margins decreasing exponentially within 5 steps of rolling forecast updates.',
        logName: 'FORECAST_RESIDUAL_DECAY'
      },
      rfm: {
        kpi1: { label: 'Outperforming Days', target: 780, suffix: ' days' },
        kpi2: { label: 'Avg Daily Return', target: 1.25, suffix: '%' },
        bars: [15, 45, 30, 10],
        labels: ['ARIMA', 'Prophet', 'LSTM', 'Hold'],
        insights: 'Model comparison categorizes daily forecasting accuracy. LSTM model drives 45% of the most accurate stock direction predictions.',
        logName: 'MODEL_EVALUATION_SEGMENTS'
      },
      correlation: {
        kpi1: { label: 'Open-Close Corr', target: 0.98, suffix: '' },
        kpi2: { label: 'Volume-Volatility', target: 0.45, suffix: '' },
        heatmap: [
          [1.0, 0.98, 0.45, 0.12],
          [0.98, 1.0, 0.48, 0.15],
          [0.45, 0.48, 1.0, 0.28],
          [0.12, 0.15, 0.28, 1.0]
        ],
        variables: ['Open', 'Close', 'Volume', 'Return'],
        insights: 'Open and Close prices show a nearly linear correlation (0.98), while trading volume moderately correlates with intraday volatility.',
        logName: 'TIME_SERIES_CORR_MATRIX'
      },
      forecast: {
        kpi1: { label: 'GOOGL Forecast Price', target: 182.5, suffix: ' $' },
        kpi2: { label: 'LSTM Directional Fit', target: 88.4, suffix: '%' },
        points: [156, 162, 169, 174, 178, 182.5],
        insights: 'LSTM sequential forecasting models project a baseline price of $182.50 by next month, maintaining a positive growth trend.',
        logName: 'LSTM_STOCK_VALUATION_FORECAST'
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
            <option value="ecommerce">E-commerce Retail Sales</option>
            <option value="realestate">Real Estate Housing Market</option>
            <option value="github">GitHub Open Source Trends</option>
            <option value="covid">COVID-19 Pandemic Data</option>
            <option value="trading">RL Financial Trading Logs</option>
            <option value="traffic">DBSCAN Spatial Traffic Logs</option>
            <option value="medical">OrthoAssist AI X-ray Records</option>
            <option value="security">Ethereum Smart Contracts</option>
            <option value="stock">Google Stock Price forecasts</option>
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
