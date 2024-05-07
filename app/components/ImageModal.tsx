'use client';

import Modal from '@/app/components/ui/modal';
import Image from 'next/image';

interface ImageModalProps {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, src }) => {
  if (!src) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-[420px] h-[600px] overflow-hidden">
        <Image alt="Image" className="object-center" fill src={src} />
      </div>
    </Modal>
  );
};

export default ImageModal;
