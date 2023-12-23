import React from 'react'
import { imcFormPropsType } from './imcForm';
import InputNumber from '../../globals/input/InputNumber'
import Image from 'next/image';
import { not } from 'ramda';

export default function ImcForm(props: imcFormPropsType) {
  const { tall, setTall, tallIsValid, weight, setWeight, weightIsValid, submit } = props;

  const errorText = "un nombre entre 1 et 300.";

  const calculate = (e: React.SyntheticEvent) => {
    e.preventDefault();
    submit();
  }


  return (
    <form>
      <p>
          Merci de renseigner votre poids et votre taille :
      </p>
        <div className='flex'>
            <div>
                <div className="w-40 h-80 relative">
                  <Image
                    src="/images/imc_ref.jpg"
                    alt="dessin représentant le corps d'une personne"
                    layout='fill'
                  />
                </div>
                
                  <InputNumber
                    label="Votre poids en kg"
                    name="weight"
                    defaultValue={weight}
                    step={1}
                    error={not(weightIsValid)}
                    errorText={errorText}
                    setValue={setWeight}
                  />
                  
                
            </div>
            <div className='flex flex-col'>
              <InputNumber
                label="Votre taille en cm"
                name="tall"
                defaultValue={tall}
                step={1}
                error={not(tallIsValid)}
                errorText={errorText}
                setValue={setTall}
              />
              <div className='flex justify-center items-center grow'>
                <button className='px-6 py-2 border-2 border-black rounded-full hover:font-bold hover:border-3' type="submit" onClick={calculate}>calculer</button>
              </div>
            </div>
        </div>
        
    </form>
  )
}
