import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, Info } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toast } = useApp();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#1e293b] text-white px-5 py-3.5 rounded-lg shadow-xl border border-slate-700 animate-slide-up transition-all max-w-md">
      {toast.type === 'success' ? (
        <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
      ) : (
        <Info className="w-5 h-5 text-blue-400 shrink-0" />
      )}
      <p className="text-sm font-medium">{toast.message}</p>
    </div>
  );
};
