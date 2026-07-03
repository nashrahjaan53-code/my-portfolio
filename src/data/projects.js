export const projectsData = [
  {
    id: 1,
    title: 'Reinforcement Learning Risk Trader',
    category: 'Machine Learning',
    emoji: '📈',
    description: 'Designed an end-to-end ML pipeline featuring a custom financial trading environment. Integrates strict risk management boundaries (stop-loss, position sizing, drawdown limits) into an object-oriented reinforcement learning frame.',
    tech: 'Python, Gym/Gymnasium, Stable-Baselines3, Pandas, NumPy, Matplotlib',
    impact: 'Engineered a simulation agent balancing trading alpha with strict capital preservation boundaries',
    github: 'https://github.com/nashrahjaan53-code/rl-risk-trading-agent'
  },
  {
    id: 2,
    title: 'Geospatial Traffic Tracker',
    category: 'Data Analytics',
    emoji: '🗺️',
    description: 'Built an end-to-end unsupervised machine learning application implementing DBSCAN clustering to detect spatial foot-traffic density hubs. Processes raw latitude/longitude coordinates and filters out geospatial noise/anomalies.',
    tech: 'Python, DBSCAN, scikit-learn, Folium, Geopandas, Shapely',
    impact: 'Isolated dense pedestrian clusters and anomalies from noisy spatial logs with high geometric precision',
    github: 'https://github.com/nashrahjaan53-code/geospatial-traffic-tracker'
  },
  {
    id: 3,
    title: 'OrthoAssist AI',
    category: 'Deep Learning & CV',
    emoji: '🩻',
    description: 'Developed an asynchronous FastAPI and Streamlit decision-support application. Pairs a PyTorch Vision Transformer (ViT) with multimodal Gemini 2.5 Flash to evaluate orthopedic X-rays and validate prescription safety.',
    tech: 'PyTorch, Vision Transformer, FastAPI, Gemini API, Streamlit, Asyncio',
    impact: 'Created a dual-engine validation workflow classifying fracture patterns and cross-referencing clinical notes',
    github: 'https://github.com/nashrahjaan53-code/ortho-assist-ai'
  },
  {
    id: 4,
    title: 'Code Fine-Tuning Pipeline',
    category: 'NLP & Generative AI',
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
    tech: 'PyTorch, Neural Networks, SMOTE, scikit-learn, Pandas, Model Evaluation',
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
    title: 'RAG AI Agent',
    category: 'NLP & Generative AI',
    emoji: '🤖',
    description: 'Developed a high-fidelity Retrieval-Augmented Generation (RAG) agent integrating custom text vector databases, semantic search pipelines, and LLM text generation to query nested technical documents.',
    tech: 'LangChain, LlamaIndex, Vector DB, Python, LLMs, Sentence-Transformers',
    impact: 'Secured contextual answer retrievals from multi-format docs with minimal semantic drift',
    github: 'https://github.com/nashrahjaan53-code/rag-ai-agent'
  },
  {
    id: 8,
    title: 'Smart Contract Vulnerability Pipeline',
    category: 'Machine Learning',
    emoji: '⛓️',
    description: 'Designed a production-grade machine learning audit pipeline. Employs a stacked ensemble model (Random Forest + LightGBM) to inspect Ethereum bytecode matrices and detect reentrancy and overflow smart contract vulnerabilities.',
    tech: 'Random Forest, LightGBM, Stacked Ensembles, Pandas, Solidity Parser',
    impact: 'Secured smart contracts by predicting vulnerabilities with high audit precision metrics',
    github: 'https://github.com/nashrahjaan53-code/smart-contract-ml-pipeline'
  },
  {
    id: 9,
    title: 'Stock Price Multi-Forecaster',
    category: 'Machine Learning',
    emoji: '📈',
    description: 'Engineered an advanced time-series forecasting engine predicting Google (GOOGL) valuations. Compares three distinct model classes side-by-side: statistical (ARIMA), additive regression (Facebook Prophet), and deep learning (LSTM).',
    tech: 'ARIMA, FBProphet, LSTM, TensorFlow, Keras, yfinance, Pandas',
    impact: 'Compared statistical error bounds to prove LSTM superiority in volatile sequential trading patterns',
    github: 'https://github.com/nashrahjaan53-code/stock-price-forecasting'
  },
  {
    id: 10,
    title: 'Real-time Webcam Emotion Detector',
    category: 'Deep Learning & CV',
    emoji: '🎭',
    description: 'Created a lightweight, real-time facial expression classifier. Operates facial tracking loops through webcams using OpenCV and calls DeepFace classification backends to map facial states.',
    tech: 'Python, OpenCV, DeepFace, TensorFlow, CNNs, Real-time Feeds',
    impact: 'Engineered instant, high-frame-rate emotion mappings on local hardware with robust latency limits',
    github: 'https://github.com/nashrahjaan53-code/emotion-detector'
  },
  {
    id: 11,
    title: 'E-commerce Product Taxonomy',
    category: 'Data Analytics',
    emoji: '🏷️',
    description: 'Created an interactive web application running Agglomerative Hierarchical Clustering. Mapped inventory categories and product lineages across retail matrices, defining category nodes.',
    tech: 'Hierarchical Clustering, SciPy, scikit-learn, Pandas, Streamlit, Plotly',
    impact: 'Organized messy retail inventories into structured taxonomic distributions',
    github: 'https://github.com/nashrahjaan53-code/ecommerce-product-taxonomy'
  },
  {
    id: 12,
    title: 'Product Analytics Platform',
    category: 'Data Analytics',
    emoji: '📊',
    description: 'Designed a product analytics tracker mapping customer engagement. Plots cohort retentions, signup funnels, click heatmaps, and user path transitions to diagnose customer churn factors.',
    tech: 'Python, Pandas, Plotly, Cohort Calculations, Streamlit, Funnel Tracking',
    impact: 'Exposed conversion bottlenecks and retention decay loops to optimize product flow configurations',
    github: 'https://github.com/nashrahjaan53-code/product-analytics'
  },
  {
    id: 13,
    title: 'AI Career Path Predictor',
    category: 'Machine Learning',
    emoji: '💼',
    description: 'Modeled AI/Tech career vectors using semi-supervised self-training algorithms. Constructed a propagation classifier utilizing synthetic skill profiles and text metadata matrices.',
    tech: 'Semi-Supervised Learning, Self-Training Loop, scikit-learn, Pandas, Plotly',
    impact: 'Achieved 79% classification accuracy in routing sparse-labeled tech profile categories',
    github: 'https://github.com/nashrahjaan53-code/ai-career-predictor'
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
  },
  {
    id: 15,
    title: 'Customer Persona PCA Builder',
    category: 'Data Analytics',
    emoji: '👥',
    description: 'Developed an unsupervised learning application using Principal Component Analysis (PCA) to compress 10-dimensional customer behavioral profiles into a 2D map, identifying distinct purchase personas.',
    tech: 'PCA, K-Means Clustering, StandardScaler, Python, Plotly, Seaborn',
    impact: 'Reduced dataset dimensionality while retaining 82% of the original variance for clean customer maps',
    github: 'https://github.com/nashrahjaan53-code/customer-persona-pca'
  },
  {
    id: 16,
    title: 'Generative NLP Chatbot',
    category: 'NLP & Generative AI',
    emoji: '💬',
    description: 'Designed a conversational Streamlit chat agent backed by the Google Gemini API. Integrated session-state memory loops to maintain conversational context and deliver human-like response styles.',
    tech: 'Streamlit, Gemini API, Session State, Memory Integration, NLP, Python',
    impact: 'Engineered a highly responsive conversation client retaining state throughout live user inputs',
    github: 'https://github.com/nashrahjaan53-code/nlp-chatbot-project'
  },
  {
    id: 17,
    title: 'Brand Color K-Means Extractor',
    category: 'Deep Learning & CV',
    emoji: '🎨',
    description: 'Developed a computer vision application running K-Means clustering. Analyzes color distributions inside uploaded branding images and isolates primary color centroids.',
    tech: 'K-Means Clustering, OpenCV, scikit-learn, NumPy, Streamlit, Image Processing',
    impact: 'Extracted brand hex colors and dynamically mapped dominant color hierarchies',
    github: 'https://github.com/nashrahjaan53-code/ai-color-palette-generator'
  },
  {
    id: 18,
    title: 'AI Resume Propagation Screener',
    category: 'NLP & Generative AI',
    emoji: '📄',
    description: 'Designed a semi-supervised natural language processing pipeline. Utilized scikit-learn\'s Label Propagation algorithm to automatically classify and route text resume profiles using sparse labeled training points.',
    tech: 'Label Propagation, Semi-Supervised Learning, TF-IDF, NLTK, scikit-learn',
    impact: 'Classified unstructured applicant files into tech-role taxonomies with 79% classification accuracy',
    github: 'https://github.com/nashrahjaan53-code/ai-resume-screener'
  },
  {
    id: 19,
    title: 'News Classification Naive Bayes',
    category: 'NLP & Generative AI',
    emoji: '📰',
    description: 'Built a generative news text classifier running Multinomial Naive Bayes models. Analyzes and labels articles into 6 distinct categories utilizing TF-IDF vectorization matrices.',
    tech: 'Naive Bayes, TF-IDF Vectorization, NLTK, word clouds, scikit-learn, Python',
    impact: 'Categorized document patterns with robust precision metrics and predictive keyword weights',
    github: 'https://github.com/nashrahjaan53-code/-news-classification-naive-bayes'
  },
  {
    id: 20,
    title: 'Disease Classification Gradient Boosting',
    category: 'Machine Learning',
    emoji: '🩺',
    description: 'Evaluated tumor diagnostics using three major gradient boosting frameworks: XGBoost, LightGBM, and CatBoost. Performed grid searches to find optimal hyper-parameters and compared ROC-AUC curves.',
    tech: 'XGBoost, LightGBM, CatBoost, Grid Search, ROC-AUC, scikit-learn',
    impact: 'Benchmarked boosting speeds to determine the optimal balance of inference latency and diagnostic accuracy',
    github: 'https://github.com/nashrahjaan53-code/disease-prediction-boosting'
  },
  {
    id: 21,
    title: 'VGG / CNN Flower Image Classifier',
    category: 'Deep Learning & CV',
    emoji: '🌸',
    description: 'Engineered a Convolutional Neural Network (CNN) classifying multi-class flower species from raw image structures. Handles transformations, data augmentations, and deep layer learning.',
    tech: 'TensorFlow, CNNs, Image Augmentations, Matplotlib, Python',
    impact: 'Achieved high classification accuracy on raw image datasets using layered convolutional grids',
    github: 'https://github.com/nashrahjaan53-code/flower-classification'
  },
  {
    id: 22,
    title: 'Digit Recognition SVM Classifier',
    category: 'Machine Learning',
    emoji: '🔢',
    description: 'Developed an SVM classifier identifying handwritten digits from pixel grid arrays. Compares linear, polynomial, and radial basis function (RBF) kernels to maximize pixel separations.',
    tech: 'Support Vector Machine, Pixel Ingestion, kernels, scikit-learn, NumPy',
    impact: 'Achieved near-perfect digit recognition scores using high-dimensional kernel transforms',
    github: 'https://github.com/nashrahjaan53-code/digit-recognition-svm'
  },
  {
    id: 23,
    title: 'Mini AI Sandbox',
    category: 'Algorithms & Programming',
    emoji: '💡',
    description: 'Constructed a minimalist AI sandbox application in HTML, CSS, and vanilla JavaScript to demonstrate front-end script integrations and simple prompt-response mappings.',
    tech: 'HTML, CSS, JavaScript, Web Integrations, Frontend Engineering',
    impact: 'Created a ultra-lightweight client UI with minimal script load times',
    github: 'https://github.com/nashrahjaan53-code/mini-ai'
  },
  {
    id: 24,
    title: 'LeetCode Algorithmic Solutions',
    category: 'Algorithms & Programming',
    emoji: '🏆',
    description: 'Curated repository containing optimized code patterns for competitive programming challenges. Features clean, documented algorithms covering Data Structures, SQL Querying, and Math models.',
    tech: 'Algorithms, Data Structures, SQL, Python, Big-O Optimization',
    impact: 'Demonstrated deep logical reasoning, data structure mastery, and code efficiency audits',
    github: 'https://github.com/nashrahjaan53-code/leetcode-solutions'
  },
  {
    id: 25,
    title: 'E-Commerce Sales Analytics',
    category: 'Data Analytics',
    emoji: '🛒',
    description: 'Designed a comprehensive analytics pipeline querying SQLite databases to segment users and calculate customer lifetime value. Conducted cohort analysis to identify month-over-month user retention rates and RFM customer grouping.',
    tech: 'SQLite, Pandas, Python, Plotly, RFM Analysis, Cohorts',
    impact: 'Highlighted a 30% potential revenue uplift through reactivation of inactive high-value segments',
    github: 'https://github.com/nashrahjaan53-code/ecommerce-analytics'
  },
  {
    id: 26,
    title: 'GitHub Trending Repository Trends',
    category: 'Data Analytics',
    emoji: '⭐',
    description: 'Automated GitHub API ingestion and web scraping pipelines to collect trending repos. Conducted correlational analysis between stars, forks, and pull request activity, building a success prediction classification model.',
    tech: 'GitHub API, Python, Web Scraping, Streamlit, scikit-learn, Plotly',
    impact: 'Discovered key metrics (fork-to-star ratio) that predict library adoption rates with 85% confidence',
    github: 'https://github.com/nashrahjaan53-code/github-trending-analysis'
  },
  {
    id: 27,
    title: 'Advanced Real Estate Analytics',
    category: 'Data Analytics',
    emoji: '🏠',
    description: 'Conducted geospatial and statistical analysis on 13,000+ home listings. Engineered 50+ spatial features and integrated an ensemble price regression model (XGBoost, LightGBM) to forecast local house price index fluctuations.',
    tech: 'XGBoost, Feature Engineering, Plotly Maps, Geo-Clustering, Streamlit',
    impact: 'Achieved 94% R² accuracy, establishing a statistically stable valuation tool for investors',
    github: 'https://github.com/nashrahjaan53-code/real-estate-analysis-'
  },
  {
    id: 28,
    title: 'Advanced Fraud Detection System',
    category: 'Machine Learning',
    emoji: '🔐',
    description: 'Engineered an ensemble model (LightGBM, XGBoost, Isolation Forest) to identify anomalies in imbalanced transaction streams (284K records). Utilized SMOTE and SHAP explainability waterfall plots to highlight fraud features.',
    tech: 'LightGBM, XGBoost, SHAP, SMOTE, Isolation Forest, Streamlit',
    impact: 'Achieved 96% AUC-ROC, identifying parameters that prevent $2M+ in potential transaction fraud',
    github: 'https://github.com/nashrahjaan53-code/fraud-detection'
  },
  {
    id: 29,
    title: 'Customer Churn Prediction',
    category: 'Machine Learning',
    emoji: '📉',
    description: 'Engineered customer retention analysis using LightGBM classifications. Calculated risk scores and mapped customers to specific threat tiers to determine intervention pathways.',
    tech: 'LightGBM, SHAP, Feature Engineering, Pandas, Streamlit',
    impact: 'Predicted churn events with 92% accuracy, allowing proactive retention campaigns for 25% of at-risk clients',
    github: 'https://github.com/nashrahjaan53-code/churn-prediction'
  },
  {
    id: 30,
    title: 'COVID-19 Global Data Pipeline',
    category: 'Data Analytics',
    emoji: '🦠',
    description: 'Built a robust ETL script scraping data from public repositories. Designed interactive regional heatmaps and time-series case trajectories, detailing global vaccine distribution speeds.',
    tech: 'ETL, Web Scraping, Pandas, Plotly, Streamlit',
    impact: 'Aggregated regional statistics from 100+ countries into a single daily-refreshed report',
    github: 'https://github.com/nashrahjaan53-code/covid-analysis'
  },
  {
    id: 31,
    title: 'Resume Parser (NLP Engine)',
    category: 'NLP & Generative AI',
    emoji: '📄',
    description: 'Created a spacy-based Named Entity Recognition (NER) system extracting technical skills, education, and career duration from unstructured resume files. Combined with a fuzzy matching algorithm for job description alignment.',
    tech: 'spaCy, NER, Transformers, NLTK, Fuzzy Matching, Streamlit',
    impact: 'Extracted skills and entities with 92% accuracy, saving recruiting teams hours of manual filtering',
    github: 'https://github.com/nashrahjaan53-code/resume-parser'
  },
  {
    id: 32,
    title: 'Stock Price Sequential Forecaster',
    category: 'Machine Learning',
    emoji: '📈',
    description: 'Modeled sequential time-series stocks using LSTM recurrent neural networks. Integrated technical indicators (RSI, MACD, Bollinger Bands) and performed historical backtesting to validate market alpha.',
    tech: 'TensorFlow, LSTM Neural Networks, yfinance, Pandas, Streamlit',
    impact: 'Delivered forecast directions with 88% directional accuracy over a 6-month historical test window',
    github: 'https://github.com/nashrahjaan53-code/stock-predictor'
  },
  {
    id: 33,
    title: 'Real-time Anomaly Detection',
    category: 'Machine Learning',
    emoji: '🚨',
    description: 'Implemented unsupervised anomaly detection pipelines on sensor time-series datasets using Isolation Forest, One-Class SVM, and DBSCAN density clustering.',
    tech: 'Isolation Forest, One-Class SVM, DBSCAN, scikit-learn, Streamlit',
    impact: 'Identified out-of-bounds performance spikes with 89% precision and 84% recall',
    github: 'https://github.com/nashrahjaan53-code/anomaly-detection'
  },
  {
    id: 34,
    title: 'Social Media Sentiment Miner',
    category: 'NLP & Generative AI',
    emoji: '📱',
    description: 'Combined VADER sentiment analysis with HuggingFace transformer pipelines to classify public social media sentiment. Mapped viral trends and correlation with engagement indices.',
    tech: 'Transformers, VADER Sentiment, spaCy, Plotly, Streamlit',
    impact: 'Monitored sentiment streams with 88% classification accuracy',
    github: 'https://github.com/nashrahjaan53-code/social--media-analytics'
  },
  {
    id: 35,
    title: 'Loan Approval Risk Engine',
    category: 'Machine Learning',
    emoji: '🏦',
    description: 'Created a risk evaluation engine comparing Random Forest and Logistic Regression models. Developed parallel coordinates and sunburst diagrams to analyze demographic risk indicators.',
    tech: 'scikit-learn, Pandas, Plotly, Dash, Model Evaluation',
    impact: 'Provided fair lending insights, predicting credit defaults with 89% precision',
    github: 'https://github.com/nashrahjaan53-code/loan_analysis'
  }
];
