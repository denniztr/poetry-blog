'use client';

import { useForm, FieldValues } from 'react-hook-form';

import TextInput from '@/app/components/ui/inputs/textInput';
import Textarea from '@/app/components/ui/inputs/textarea';
import Button from '@/app/components/ui/buttons/ficFormButton';

const EditTableContent = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {},
  });

  return (
    <div>
      <h5 className="text-center text-gray-300 text-xl">Добавить содержание</h5>
      <form className="space-y-6"></form>
    </div>
  );
};

export default EditTableContent;