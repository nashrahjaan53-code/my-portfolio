export const projectsData = [
  {
    id: 1,
    title: 'Reinforcement Learning Risk Trader',
    category: 'Quantitative Analysis',
    emoji: '📈',
    description: 'Designed an end-to-end ML pipeline featuring a custom financial trading environment. Integrates strict risk management boundaries (stop-loss, position sizing, drawdown limits) into an object-oriented reinforcement learning frame.',
    tech: 'Python, Gym/Gymnasium, Stable-Baselines3, Pandas, NumPy, Matplotlib',
    impact: 'Engineered a simulation agent balancing trading alpha with strict capital preservation boundaries',
    github: 'https://github.com/nashrahjaan53-code/rl-risk-trading-agent'
  },
  {
    id: 2,
    title: 'Geospatial Traffic Tracker',
    category: 'Spatial Analytics',
    emoji: '🗺️',
    description: 'Built an end-to-end unsupervised machine learning application implementing DBSCAN clustering to detect spatial foot-traffic density hubs. Processes raw latitude/longitude coordinates and filters out geospatial noise/anomalies.',
    tech: 'Python, DBSCAN, scikit-learn, Folium, Geopandas, Shapely',
    impact: 'Isolated dense pedestrian clusters and anomalies from noisy spatial logs with high geometric precision',
    github: 'https://github.com/nashrahjaan53-code/geospatial-traffic-tracker'
  },
  {
    id: 3,
    title: 'OrthoAssist AI',
    category: 'Deep Learning & Vision',
    emoji: '🩻',
    description: 'Developed an asynchronous FastAPI and Streamlit decision-support application. Pairs a PyTorch Vision Transformer (ViT) with multimodal Gemini 2.5 Flash to evaluate orthopedic X-rays and validate prescription safety.',
    tech: 'PyTorch, Vision Transformer, FastAPI, Gemini API, Streamlit, Asyncio',
    impact: 'Created a dual-engine validation workflow classifying fracture patterns and cross-referencing clinical notes',
    github: 'https://github.com/nashrahjaan53-code/ortho-assist-ai'
  },
  {
    id: 4,
    title: 'Code Fine-Tuning Pipeline',
    category: 'Generative AI & LLMs',
    emoji: '🧠',
    description: 'Established a fine-tuning framework for Mistral-7B on the CodeAlpaca-20k dataset. Utilized QLoRA (4-bit quantization + LoRA adapters) to build a domain-specific code generation assistant, optimizing training on consumer GPUs.',
    tech: 'Transformers, PEFT, QLoRA, PyTorch, HuggingFace, BitsAndBytes',
    impact: 'Fine-tuned a 7B parameter model to execute Python code instructions with minimized compute overhead',
    github: 'https://github.com/nashrahjaan53-code/code-finetune'
  },
  {
    id: 5,
    title: 'Credit Card Fraud PyTorch NN',
    category: 'Machine Learning',
    emoji: '🔐',
    description: 'Built a deep PyTorch neural network to detect fraudulent credit card transactions. Controlled data leakage by strictly partitioning validation/test sets prior to executing synthetic oversampling (SMOTE) algorithms.',
    tech: 'PyTorch, Neural Networks, SMOTE, scikit-learn, Pandas, Model Easing',
    impact: 'Suppressed classification leakage, delivering stable fraud detections on highly imbalanced datasets',
    github: 'https://github.com/nashrahjaan53-code/credit-card-fraud-detection-nn'
  },
  {
    id: 6,
    title: 'ML YouTube View Predictor',
    category: 'Data Analytics',
    emoji: '🎥',
    description: 'Conducted a comparative predictive analysis of video engagement. Programmed and evaluated Linear, Multiple Linear, Logistic, and Multi-class Logistic Regression models to predict watch counts and viral tiers.',
    tech: 'Python, scikit-learn, Statsmodels, Pandas, Seaborn, Plotly',
    impact: 'Mapped key engagement features (thumbnail contrasts, title length) affecting watch rates with statistical fits',
    github: 'https://github.com/nashrahjaan53-code/ml-youtube-prediction'
  },
  {
    id: 7,
    title: 'Smart Contract Vulnerability Pipeline',
    category: 'Data Security & ML',
    emoji: '⛓️',
    description: 'Designed a production-grade machine learning audit pipeline. Employs a stacked ensemble model (Random Forest + LightGBM) to inspect Ethereum bytecode matrices and detect reentrancy and overflow smart contract vulnerabilities.',
    tech: 'Random Forest, LightGBM, Stacked Ensembles, Pandas, Solidity Parser',
    impact: 'Secured smart contracts by predicting vulnerabilities with high audit precision metrics',
    github: 'https://github.com/nashrahjaan53-code/smart-contract-ml-pipeline'
  },
  {
    id: 8,
    title: 'Stock Price Multi-Forecaster',
    category: 'Time Series & Forecasting',
    emoji: '📈',
    description: 'Engineered an advanced time-series forecasting engine predicting Google (GOOGL) valuations. Compares three distinct model classes side-by-side: statistical (ARIMA), additive regression (Facebook Prophet), and deep learning (LSTM).',
    tech: 'ARIMA, FBProphet, LSTM, TensorFlow, Keras, yfinance, Pandas',
    impact: 'Compared statistical error bounds to prove LSTM superiority in volatile sequential trading patterns',
    github: 'https://github.com/nashrahjaan53-code/stock-price-forecasting'
  },
  {
    id: 9,
    title: 'E-Commerce Sales Analytics',
    category: 'Data Analytics',
    emoji: '🛒',
    description: 'Structured database ETL routines to query sales records, generate user RFM segmentations, and construct cohort retention charts, revealing transactional dynamics.',
    tech: 'SQLite, Pandas, Python, Plotly, RFM Segments, Cohort Analysis',
    impact: 'Highlighted a 30% potential revenue uplift through reactivation of inactive high-value segments',
    github: 'https://github.com/nashrahjaan53-code/ecommerce-analytics',
    dashboardPort: 8502
  },
  {
    id: 10,
    title: 'GitHub Trending Repo Scraper',
    category: 'Data Analytics',
    emoji: '⭐',
    description: 'Scraped open-source trends from GitHub using custom ingestion agents. Applied correlational coefficients and regressions to star-growth patterns over developer communities.',
    tech: 'GitHub API, Python, BeautifulSoup, scikit-learn, Plotly, Streamlit',
    impact: 'Discovered key metrics (fork-to-star ratio) that predict library adoption rates with 85% confidence',
    github: 'https://github.com/nashrahjaan53-code/github-trending-analysis',
    dashboardPort: 8501
  },
  {
    id: 11,
    title: 'AI Resume Propagation Screener',
    category: 'NLP & Text Mining',
    emoji: '📄',
    description: 'Designed a semi-supervised natural language processing pipeline. Utilized scikit-learn\'s Label Propagation algorithm to automatically classify and route text resume profiles using sparse labeled training points.',
    tech: 'Label Propagation, Semi-Supervised Learning, TF-IDF, NLTK, scikit-learn',
    impact: 'Classified unstructured applicant files into tech-role taxonomies with 79% classification accuracy',
    github: 'https://github.com/nashrahjaan53-code/ai-resume-screener'
  },
  {
    id: 12,
    title: 'Disease Classification Gradient Boosting',
    category: 'Machine Learning',
    emoji: '🩺',
    description: 'Evaluated tumor diagnostics using three major gradient boosting frameworks: XGBoost, LightGBM, and CatBoost. Performed grid searches to find optimal hyper-parameters and compared ROC-AUC curves.',
    tech: 'XGBoost, LightGBM, CatBoost, Grid Search, ROC-AUC, scikit-learn',
    impact: 'Benchmarked boosting speeds to determine the optimal balance of inference latency and diagnostic accuracy',
    github: 'https://github.com/nashrahjaan53-code/disease-prediction-boosting'
  },
  {
    id: 13,
    title: 'Customer Persona PCA Builder',
    category: 'Data Analytics',
    emoji: '👥',
    description: 'Developed an unsupervised learning application using Principal Component Analysis (PCA) to compress 10-dimensional customer behavioral profiles into a 2D map, identifying distinct purchase personas.',
    tech: 'PCA, K-Means Clustering, StandardScaler, Python, Plotly, Seaborn',
    impact: 'Reduced dataset dimensionality while retaining 82% of the original variance for clean customer maps',
    github: 'https://github.com/nashrahjaan53-code/customer-persona-pca'
  },
  {
    id: 14,
    title: 'Streaming Content Apriori Engine',
    category: 'Data Analytics',
    emoji: '🍿',
    description: 'Built an end-to-end unsupervised learning engine applying the Apriori algorithm and market basket analysis to discover transactional viewing affinities and generate real-time content recommendations.',
    tech: 'Apriori Algorithm, Association Rules, Pandas, MLxtend, Plotly',
    impact: 'Identified strong co-viewing affinities to drive recommendation click-through rates',
    github: 'https://github.com/nashrahjaan53-code/streaming-recommendation-apriori'
  }
];
