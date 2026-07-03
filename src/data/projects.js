export const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Sales Analytics',
    category: 'Data Analytics',
    emoji: '🛒',
    description: 'Designed a comprehensive analytics pipeline querying SQLite databases to segment users and calculate customer lifetime value. Conducted cohort analysis to identify month-over-month user retention rates and RFM customer grouping.',
    tech: 'SQLite, Pandas, Python, Plotly, RFM Analysis, Cohorts',
    impact: 'Highlighted a 30% potential revenue uplift through reactivation of inactive high-value segments',
    github: 'https://github.com/nashrahjaan53-code/ecommerce-analytics',
    dashboardPort: 8502
  },
  {
    id: 2,
    title: 'GitHub Trending Repository Trends',
    category: 'Data Analytics',
    emoji: '⭐',
    description: 'Automated GitHub API ingestion and web scraping pipelines to collect trending repos. Conducted correlational analysis between stars, forks, and pull request activity, building a success prediction classification model.',
    tech: 'GitHub API, Python, Web Scraping, Streamlit, scikit-learn, Plotly',
    impact: 'Discovered key metrics (fork-to-star ratio) that predict library adoption rates with 85% confidence',
    github: 'https://github.com/nashrahjaan53-code/github-trending-analysis',
    dashboardPort: 8501
  },
  {
    id: 3,
    title: 'Advanced Real Estate Analytics',
    category: 'Data Analytics',
    emoji: '🏠',
    description: 'Conducted geospatial and statistical analysis on 13,000+ home listings. Engineered 50+ spatial features and integrated an ensemble price regression model (XGBoost, LightGBM) to forecast local house price index fluctuations.',
    tech: 'XGBoost, Feature Engineering, Plotly Maps, Geo-Clustering, Streamlit',
    impact: 'Achieved 94% R² accuracy, establishing a statistically stable valuation tool for investors',
    github: 'https://github.com/nashrahjaan53-code/real-estate-analysis-',
    dashboardPort: 8508
  },
  {
    id: 4,
    title: 'Advanced Fraud Detection System',
    category: 'Machine Learning',
    emoji: '🔐',
    description: 'Engineered an ensemble model (LightGBM, XGBoost, Isolation Forest) to identify anomalies in imbalanced transaction streams (284K records). Utilized SMOTE and SHAP explainability waterfall plots to highlight fraud features.',
    tech: 'LightGBM, XGBoost, SHAP, SMOTE, Isolation Forest, Streamlit',
    impact: 'Achieved 96% AUC-ROC, identifying parameters that prevent $2M+ in potential transaction fraud',
    github: 'https://github.com/nashrahjaan53-code/fraud-detection',
    dashboardPort: 8506
  },
  {
    id: 5,
    title: 'Customer Churn Prediction',
    category: 'Machine Learning',
    emoji: '📉',
    description: 'Engineered customer retention analysis using LightGBM classifications. Calculated risk scores and mapped customers to specific threat tiers to determine intervention pathways.',
    tech: 'LightGBM, SHAP, Feature Engineering, Pandas, Streamlit',
    impact: 'Predicted churn events with 92% accuracy, allowing proactive retention campaigns for 25% of at-risk clients',
    github: 'https://github.com/nashrahjaan53-code/churn-prediction',
    dashboardPort: 8505
  },
  {
    id: 6,
    title: 'COVID-19 Global Data Pipeline',
    category: 'ETL & Reporting',
    emoji: '🦠',
    description: 'Built a robust ETL script scraping data from public repositories. Designed interactive regional heatmaps and time-series case trajectories, detailing global vaccine distribution speeds.',
    tech: 'ETL, Web Scraping, Pandas, Plotly, Streamlit',
    impact: 'Aggregated regional statistics from 100+ countries into a single daily-refreshed report',
    github: 'https://github.com/nashrahjaan53-code/covid-analysis',
    dashboardPort: 8503
  },
  {
    id: 7,
    title: 'Resume Parser (NLP Engine)',
    category: 'NLP & Text Mining',
    emoji: '📄',
    description: 'Created a spacy-based Named Entity Recognition (NER) system extracting technical skills, education, and career duration from unstructured resume files. Combined with a fuzzy matching algorithm for job description alignment.',
    tech: 'spaCy, NER, Transformers, NLTK, Fuzzy Matching, Streamlit',
    impact: 'Extracted skills and entities with 92% accuracy, saving recruiting teams hours of manual filtering',
    github: 'https://github.com/nashrahjaan53-code/resume-parser',
    dashboardPort: 8507
  },
  {
    id: 8,
    title: 'Stock Price Sequential Forecaster',
    category: 'Machine Learning',
    emoji: '📈',
    description: 'Modeled sequential time-series stocks using LSTM recurrent neural networks. Integrated technical indicators (RSI, MACD, Bollinger Bands) and performed historical backtesting to validate market alpha.',
    tech: 'TensorFlow, LSTM Neural Networks, yfinance, Pandas, Streamlit',
    impact: 'Delivered forecast directions with 88% directional accuracy over a 6-month historical test window',
    github: 'https://github.com/nashrahjaan53-code/stock-predictor',
    dashboardPort: 8504
  },
  {
    id: 9,
    title: 'Real-time Anomaly Detection',
    category: 'Machine Learning',
    emoji: '🚨',
    description: 'Implemented unsupervised anomaly detection pipelines on sensor time-series datasets using Isolation Forest, One-Class SVM, and DBSCAN density clustering.',
    tech: 'Isolation Forest, One-Class SVM, DBSCAN, scikit-learn, Streamlit',
    impact: 'Identified out-of-bounds performance spikes with 89% precision and 84% recall',
    github: 'https://github.com/nashrahjaan53-code/anomaly-detection',
    dashboardPort: 8509
  },
  {
    id: 10,
    title: 'Social Media Sentiment Miner',
    category: 'NLP & Text Mining',
    emoji: '📱',
    description: 'Combined VADER sentiment analysis with HuggingFace transformer pipelines to classify public social media sentiment. Mapped viral trends and correlation with engagement indices.',
    tech: 'Transformers, VADER Sentiment, spaCy, Plotly, Streamlit',
    impact: 'Monitored sentiment streams with 88% classification accuracy',
    github: 'https://github.com/nashrahjaan53-code/social--media-analytics',
    dashboardPort: 8510
  },
  {
    id: 11,
    title: 'Loan Approval Risk Engine',
    category: 'Machine Learning',
    emoji: '🏦',
    description: 'Created a risk evaluation engine comparing Random Forest and Logistic Regression models. Developed parallel coordinates and sunburst diagrams to analyze demographic risk indicators.',
    tech: 'scikit-learn, Pandas, Plotly, Dash, Model Evaluation',
    impact: 'Provided fair lending insights, predicting credit defaults with 89% precision',
    github: 'https://github.com/nashrahjaan53-code/loan_analysis',
    dashboardPort: 8511
  }
];
