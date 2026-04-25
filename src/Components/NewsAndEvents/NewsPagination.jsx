import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const NewsPagination = ({ totalPages, currentPage, handlePageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', alignItems: 'center' }}>
      <button 
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        style={{
          padding: '8px 12px',
          border: '1px solid var(--border)',
          background: '#fff',
          borderRadius: '4px',
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
          opacity: currentPage === 1 ? 0.5 : 1,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <FaChevronLeft style={{ fontSize: '12px' }} />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          style={{
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid',
            borderColor: currentPage === page ? 'var(--gold)' : 'var(--border)',
            background: currentPage === page ? 'var(--gold)' : '#fff',
            color: currentPage === page ? 'var(--navy)' : 'var(--text)',
            borderRadius: '4px',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          {page}
        </button>
      ))}

      <button 
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        style={{
          padding: '8px 12px',
          border: '1px solid var(--border)',
          background: '#fff',
          borderRadius: '4px',
          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
          opacity: currentPage === totalPages ? 0.5 : 1,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <FaChevronRight style={{ fontSize: '12px' }} />
      </button>
    </div>
  );
};

export default NewsPagination;
