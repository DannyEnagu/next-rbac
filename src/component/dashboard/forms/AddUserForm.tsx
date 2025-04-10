'use client'

import React, { FormEvent, useState } from 'react'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import api from '@/utils/api';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Message } from 'primereact/message';

function AddUserForm() {
    const [visible, setVisible] = useState(false);
    const [msg, setMsg] = useState<{
        text: string;
        type: 'warn' | 'success' | 'error'
    }>({
        text: '',
        type:  'warn'
    })
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        password: '',
        role: null
    })
  const roles = [
    { name: 'Customer', value: 'CUSTOMER' },
    { name: 'Sales Rep', value: 'SALES_REP' },
    { name: 'Support Staff', value: 'SUPPORT_STAFF' },
    { name: 'Manager', value: 'MANAGER' },
    { name: 'Admin', value: 'ADMIN' }
  ];

  const createUser = useMutation({
    mutationFn: (payload: typeof formData) => {
        return api.post('/users', payload)
    },
    onError(error: AxiosError<{ message?: string }>) {
        console.log(error.response?.data?.message, 'error')
        setMsg({type: 'error', text: error.response?.data?.message ?? '' })
    },
    onSuccess(res) {
        setMsg({type: 'success', text: res.data.message })
    },
})
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
}
const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMsg({...msg, text: '' })
    const isValid = [
        formData.email.length > 3, 
        formData.name.length >= 3,
        formData.password.length >= 6,
        formData.role !== null
    ].every(Boolean)

    if (!isValid) {
        setMsg({type: 'warn', text: 'All form fields are required! Note: Password should be more than 5 letters.' })
        return
    }
    createUser.mutate(formData)
}

  return (
    <>
        <Button label="Add New" size="small" className="p-button-secondary" icon="pi pi-plus" onClick={() => setVisible(true)} />
        <Dialog header="Create A New Employee" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }} position="top">
            <form className='space-y-3' onSubmit={onSubmit}>
                <p className={`mb-4 ${msg.text ? 'block' : 'hidden'}`}>
                    <Message severity={msg.type} text={msg.text} className="w-full !justify-start" />
                </p>
                <div>
                    <label htmlFor="role" className='mb-2'>Role</label>
                    <Dropdown value={formData.role} onChange={(e) => setFormData({...formData, role: e.value})} options={roles} optionLabel="name" optionValue="value" 
                    placeholder="Select a user role" className="w-full" inputId='role' />
                </div>
                <div>
                    <label htmlFor="fullname" className='mb-2'>Fullname</label>
                    <InputText id="fullname" name="name" placeholder="Enter user Fullname" className="w-full" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email" className='mb-2'>Email</label>
                    <InputText id="email" name="email" placeholder="Enter user email" className="w-full" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password" className='mb-2'>Password</label>
                    <Password id="password" name="password" placeholder="Enter password" toggleMask={true} className='w-full !block' inputClassName='w-full' onChange={handleChange} />
                </div>
                <div>
                    <Button disabled={createUser.isPending} loading={createUser.isPending} label="Add" className="p-button-info !mt-8 w-full" type="submit" />
                </div>
            </form>
        </Dialog>
    </>
  )
}

export default AddUserForm