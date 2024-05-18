'use client';

import { useState } from 'react';

import Sidebar from '@/app/components/edit/sidebar/Sidebar';
import EditPart from '@/app/components/edit/form/EditPart';
import AddFicForm from '@/app/components/addFiction/AddFicForm';
import EditCover from '@/app/components/edit/form/EditCover';
import EditTableContent from '@/app/components/edit/form/EditTableContent';
import Statistic from '@/app/components/edit/form/Statistic';

import { AnimatePresence, motion } from 'framer-motion';

type Variant =
  | 'ADD_PART'
  | 'ADD_CONTENT'
  | 'ADD_COVER'
  | 'ADD_HEADER'
  | 'STATISTIC'
  | 'WORK_PAGE';

const Content = () => {
  const [variant, setVariant] = useState<Variant>('ADD_PART');

  const renderFormVariant = () => {
    if (variant === 'ADD_PART') {
      return <EditPart />;
    } else if (variant === 'ADD_CONTENT') {
      return <EditTableContent />;
    } else if (variant === 'ADD_COVER') {
      return <EditCover />;
    } else if (variant === 'ADD_HEADER') {
      return <AddFicForm />
    } else if (variant === 'STATISTIC') {
      return <Statistic />
    }

    return null;
  };

  return (
    <section className="flex mt-4 gap-3 flex-col md:flex-row pb-6">
      <Sidebar setVariant={setVariant} variant={variant} />
      <section className="w-full border border-gray-700/30 bg-black/40 px-4 py-8 space-y-4 text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={variant}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderFormVariant()}
          </motion.div>
        </AnimatePresence>
      </section>
    </section>
  );
};

export default Content;
