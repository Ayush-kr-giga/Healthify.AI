import React, { useState } from 'react';

const UserForm = ({onSubmit}) => {

    const [formData, setFormData] = useState({
        age: '',
        height: '',
        weight: '',
        dietType: '',
        diet:'',
        concerns: '',
        physical:'',
        gender:''
      });

    const handleInput=(e)=>{
      setFormData((prev)=>{
        let updated={...prev}

        updated[e.target.name]=e.target.value 

        return updated
    })
    }  

    const handleSubmit=(e)=>{
      e.preventDefault();
      onSubmit(formData);

    //   setFormData(
    //     {
    //       age: '',
    //       height: '',
    //       weight: '',
    //       dietType: '',
    //       diet:'',
    //       concerns: '',
    //     }
        
    // )
  }


  return (
    <div className='w-full flex flex-col gap-10 p-6 justify-center items-center mt-10'>
      <h1 className="text-3xl md:text-5xl font-medium text-center text-emerald-600 tracking-wide drop-shadow-sm">Healthcare Form </h1>
      
      <form className='w-full md:w-1/2 rounded-xl p-4 md:p-6 flex flex-col justify-center items-center gap-4' onSubmit={handleSubmit}>
        <input
          type='number'
          required
          name='age'
          value={formData.age}
          onChange={(e)=>{handleInput(e)}}
          placeholder='Age'
          className='outline-none border w-4/5 md:w-2/3 bg-emerald-50 border-emerald-300 py-2 px-4 rounded-2xl'
        />
        <input
          type='number'
          required
          name='weight'
          value={formData.weight}
          onChange={(e)=>{handleInput(e)}}
          placeholder='Weight in Kg'
          className='outline-none border w-4/5 md:w-2/3 bg-emerald-50 border-emerald-300 py-2 px-4 rounded-2xl'
        />
        <input
          type='number'
          required
          name='height'
          value={formData.height}
          onChange={(e)=>{handleInput(e)}}
          placeholder='Height in cm'
          className='outline-none border w-4/5 md:w-2/3 bg-emerald-50 border-emerald-300 py-2 px-4 rounded-2xl'
        />

        <select
          required
          name='gender'
          value={formData.gender}
          onChange={(e)=>{handleInput(e)}}
          defaultValue=""
          className='outline-none border text-gray-500 w-4/5 md:w-2/3 bg-emerald-50 border-emerald-300 py-2 px-4 rounded-2xl'
        >
          <option value="" disabled hidden>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>

        </select>
        <select
          required
          name='dietType'
          value={formData.Type}
          onChange={(e)=>{handleInput(e)}}
          defaultValue=""
          className='outline-none border text-gray-500 w-4/5 md:w-2/3 bg-emerald-50 border-emerald-300 py-2 px-4 rounded-2xl'
        >
          <option value="" disabled hidden>Select Diet Type</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Non-Vegetarian">Non-Vegetarian</option>
          <option value="Vegan">Vegan</option>
          <option value="Keto">Keto</option>
        </select>

        <textarea required
          placeholder='Briefly tell about your regular diet'
          name='diet'
          value={formData.diet}
          onChange={(e)=>{handleInput(e)}}
          className='outline-none border w-4/5 md:w-2/3 bg-emerald-50 border-emerald-300 py-2 px-4 rounded-2xl h-[10vh]'
        />
        <textarea required
          placeholder='Please briefly explain your physical activity throught your day.'
          name='physical'
          value={formData.physical}
          onChange={(e)=>{handleInput(e)}}
          className='outline-none border w-4/5 md:w-2/3 bg-emerald-50 border-emerald-300 py-2 px-4 rounded-2xl h-[10vh]'
        />
        <textarea required
          placeholder='Do you have any other Health concerns? (eg: Diabetes)'
          name='concerns'
          value={formData.concerns}
          onChange={(e)=>{handleInput(e)}}
          className='outline-none border w-4/5 md:w-2/3 bg-emerald-50 border-emerald-300 py-2 px-4 rounded-2xl h-[10vh]'
        />

        <button type="submit" className="bg-emerald-500 text-xl text-white px-4 py-2 rounded-xl hover:bg-emerald-600 ">
                Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm
