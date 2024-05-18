'use client';

import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';

import TextInput from '@/app/components/ui/inputs/textInput';
import Textarea from '@/app/components/ui/inputs/textarea';
import Button from '@/app/components/ui/buttons/ficFormButton';


const EditPart = () => {

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
    },
  });

  return (
    <div>
      <h5 className="text-center text-gray-300 text-xl">Добавить часть</h5>
      <form className='space-y-6'>
        <div className="space-y-2">
          <label>
            Название части <span className="text-red-600">*</span>
          </label>
          <div className="w-full">
            <TextInput placeholder="Часть 1" id="partTitle" register={register} />
          </div>
        </div>
        <div className="space-y-2">
          <label>Текстовый редактор</label>
          <div className="w-full">
            <div>
              <Textarea register={register} id="partContent" className='h-[600px]'/>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <label>Комментарий перед частью</label>
          <div className="w-full">
            <div>
              <Textarea register={register} id="commentBeforePart" />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <label>Комментарий после части</label>
          <div className="w-full">
            <div>
              <Textarea register={register} id="commentAfterPart" />
            </div>
          </div>
        </div>
        <Button disabled={false} type="submit" className='w-full'>
            Сохранить и перейти к публикации
        </Button>
      </form>
    </div>
  );
};

export default EditPart;
