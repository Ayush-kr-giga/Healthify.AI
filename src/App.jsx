import React, { useState } from 'react';
import UserForm from './components/UserForm'

import { PromptBuilder } from './utils/PromptBuilder';
import { getResponse } from './api/gemini';
import Header from './components/Header';

const App = ()=>{
  const [response,setResponse]=useState('');
  const [loading,setLoading]=useState(false);
  const [form,setForm]=useState(true);

  const formSumbit=async (formData)=>{
    setResponse('')
    setForm(false)
    setLoading(true);
    const prompt=PromptBuilder(formData);
    const geminiResponse= await getResponse(prompt)
    setResponse(geminiResponse)
    setLoading(false)
  }

  const refill=()=>{
    setResponse('')
    setForm(true)
  }

  return(
    <>
    <Header/>
    {loading && <p className="text-center text-2xl text-gray-500 mt-4">Loading...</p>}
      {response && (
        <div className="mt-6 max-w-2xl mx-auto p-4 bg-white rounded-xl shadow-md border-2 border-emerald-500 text-emerald-800">
          <pre className="whitespace-pre-wrap">{response}</pre>
        <button className="bg-emerald-500 text-xl text-white px-4 py-2 rounded-xl hover:bg-emerald-600 mt-10 ml-[40%]" onClick={refill}>Fill again</button>
        </div>)
        }
      {form && <UserForm onSubmit={formSumbit}/>}
    </>
  )
}

export default App