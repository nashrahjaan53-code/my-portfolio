import React, { useState, useEffect } from 'react';

export default function TypingHeadline({ 
  phrases = [
    'Translating database streams into actionable BI.',
    'Mastering statistical machine learning loops.',
    'Building optimized code and analytics patterns.',
    'Designing interactive enterprise dashboard sandboxes.'
  ],
  typeSpeed = 60,
  backSpeed = 30,
  delayBetween = 2000 
}) {
  const [currentPhraseIdx, setCurrentPhraseIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const phrase = phrases[currentPhraseIdx];

    if (!isDeleting) {
      // Typing phase
      if (displayText.length < phrase.length) {
        timer = setTimeout(() => {
          setDisplayText(phrase.substring(0, displayText.length + 1));
        }, typeSpeed);
      } else {
        // Pause at full text
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetween);
      }
    } else {
      // Deleting phase
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(phrase.substring(0, displayText.length - 1));
        }, backSpeed);
      } else {
        // Move to next phrase
        setIsDeleting(false);
        setCurrentPhraseIdx((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentPhraseIdx, phrases, typeSpeed, backSpeed, delayBetween]);

  return (
    <span style={{ position: 'relative' }}>
      {displayText}
      <span 
        style={{
          borderRight: '2px solid var(--accent-gold)',
          marginLeft: '2px',
          animation: 'blink 0.8s step-end infinite'
        }}
      />
      <style>{`
        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: var(--accent-gold) }
        }
      `}</style>
    </span>
  );
}
