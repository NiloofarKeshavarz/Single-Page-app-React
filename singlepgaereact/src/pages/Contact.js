import React from 'react';
import {Layout} from '../layout';

const Contact = () => (
    <Layout> 
       <h2 className='text-2xl'> Contact me :</h2>
       <form className='flex flex-col space-y-5 w-1/2 m-auto'>
        <div className='flex flex-col text-left'>
        <lable>Name:</lable>
        <input className='p-2 rounded' type ="text"/>
        </div>

        <div className='flex flex-col text-left'>
        <lable>Email:</lable>
        <input className='p-2 rounded' type ="email"/>
        </div>

        <div className='flex flex-col text-left'>
        <lable>Message:</lable>
        <textarea className='p-2 rounded h-32' ></textarea>
        </div>

       </form>
    </Layout>
)
export default Contact;