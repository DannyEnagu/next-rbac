'use client';
import React, { FormEvent, useRef, useState } from 'react'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Toast } from 'primereact/toast';
import { useMutation } from '@tanstack/react-query'
import api from '@/utils/api';
import { AxiosError } from 'axios';
import useAuthStore from '@/store/auth-store';
import { useRouter } from 'next/navigation';

const RegisterForm = ({ role }: { role: string }) => {
    const router = useRouter();
    const toast = useRef<Toast>(null);
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        password: '',
        role: role
    })
    const authStore = useAuthStore()
    const createCustomer = useMutation({
        mutationFn: (payload: typeof formData) => {
            return api.post('/auth/register', payload)
        },
        onError(error: AxiosError<{ message?: string }>) {
            toast.current?.show({
                severity: 'error',
                summary: 'Error',
                detail: error.response?.data?.message ?? error.message,
                life: 4000
            })
        },
        onSuccess(res) {
            toast.current?.show({
                severity: 'success',
                summary: 'Created',
                detail: res.data.message,
                life: 4000
            })
            authStore.setToken(res.data.token)
            authStore.setUser(res.data.user)
            router.push('/dashboard')
        },
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const isValid = [
            formData.email.length > 3, 
            formData.name.length > 3, 
            formData.password.length >= 6, 
        ].every(Boolean)

        if (!isValid) {
            toast.current?.show({
                severity: 'warn',
                summary: 'Warning',
                detail: 'All form fields are required! Note: Password should be more than 6 letters.',
                life: 3000
            })
            return
        }
        createCustomer.mutate(formData)
    }
return (<div>
    <Toast ref={toast} />
    <form className='space-y-3 w-[450px]' onSubmit={onSubmit}>
        <p className="text-lg">
            This is the register page. You can register here.
        </p>
        <div>
            <label htmlFor="fullname" className='mb-2'>Fullname</label>
            <InputText id="fullname" name="name" placeholder="Enter your Fullname" className="w-full" onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="email" className='mb-2'>Email</label>
            <InputText id="email" name="email" placeholder="Enter your email" className="w-full" onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="password" className='mb-2'>Password</label>
            <Password id="password" name="password" placeholder="Enter your password" toggleMask={true} className='w-full !block' inputClassName='w-full' onChange={handleChange} />
        </div>
        <div>
            <Button disabled={createCustomer.isPending} loading={createCustomer.isPending} label="Login" className="p-button-info !mt-8 w-full" type="submit" />
        </div>
    </form>
</div>)
}

export default RegisterForm