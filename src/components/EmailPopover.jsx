import React, { useState, useRef, useEffect } from 'react';
import { Mail, Copy, Check, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const EMAIL = 'buihang.work@gmail.com';
const LINKS = {
  gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`,
  outlook: `https://outlook.live.com/mail/0/deeplink/compose?to=${EMAIL}`,
  mailto: `mailto:${EMAIL}`,
};

export default function EmailPopover({ variant = 'button', align = 'left' }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      /* clipboard blocked — still show feedback */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div ref={wrapRef} className="email-popover-wrap">
      {variant === 'button' ? (
        <motion.button
          type="button"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setOpen((v) => !v)}
          className="btn-secondary"
          style={{ padding: '0.75rem 1.25rem', borderRadius: '12px', gap: '0.5rem', cursor: 'pointer', border: '1px solid var(--outline-low)' }}
          aria-label="Email"
          aria-haspopup="menu"
          aria-expanded={open}
        >
          <Mail size={18} />
          <span>{EMAIL}</span>
        </motion.button>
      ) : (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="email-icon-btn"
          aria-label="Email"
          title={EMAIL}
          aria-haspopup="menu"
          aria-expanded={open}
        >
          <Mail size={18} />
        </button>
      )}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            role="menu"
            className={`email-popover${align === 'right' ? ' email-popover--right' : ''}`}
          >
            <div className="email-popover__address">{EMAIL}</div>
            <button type="button" onClick={handleCopy} className="email-popover__copy">
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'Copied!' : 'Copy address'}
            </button>
            <div className="email-popover__divider" />
            <a className="email-popover__link" href={LINKS.gmail} target="_blank" rel="noopener noreferrer" role="menuitem">
              <span>Open in Gmail</span>
              <ExternalLink size={14} />
            </a>
            <a className="email-popover__link" href={LINKS.outlook} target="_blank" rel="noopener noreferrer" role="menuitem">
              <span>Open in Outlook</span>
              <ExternalLink size={14} />
            </a>
            <a className="email-popover__link" href={LINKS.mailto} role="menuitem">
              <span>Open in default mail app</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        .email-popover-wrap { position: relative; display: inline-block; }
        .email-icon-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: transparent;
          color: var(--text-muted);
          border: 1px solid var(--outline-low);
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .email-icon-btn:hover { background: var(--tag-bg); color: var(--primary-dark); }
        .email-popover {
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          min-width: 280px;
          background: var(--surface-container);
          border: 1px solid var(--glass-border);
          border-radius: 14px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.18);
          padding: 0.75rem;
          z-index: 100;
        }
        .email-popover--right { left: auto; right: 0; }
        .email-popover__address {
          padding: 0.4rem 0.55rem 0.6rem;
          font-size: 0.85rem;
          color: var(--text-main);
          font-weight: 500;
          word-break: break-all;
        }
        .email-popover__copy {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.6rem 0.8rem;
          background: var(--primary-dark);
          color: var(--on-primary);
          border: none;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.85rem;
          font-family: inherit;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.12s ease;
        }
        .email-popover__copy:hover { background: var(--btn-primary-hover); }
        .email-popover__copy:active { transform: scale(0.98); }
        .email-popover__divider {
          height: 1px;
          background: var(--outline-low);
          margin: 0.6rem 0;
        }
        .email-popover__link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          padding: 0.55rem 0.65rem;
          text-decoration: none;
          color: var(--text-main);
          font-size: 0.85rem;
          border-radius: 6px;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .email-popover__link:hover { background: var(--tag-bg); color: var(--primary-dark); }
        .email-popover__link svg { opacity: 0.55; flex-shrink: 0; }
      `}</style>
    </div>
  );
}
