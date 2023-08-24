"use client"
import useSWR from 'swr'
import axios from './axios'
import {useEffect, useState} from 'react'
import { useRouter } from 'next/navigation'

export default function useAuth({middleware} = {}) {
    const router = useRouter()

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (user || error) {
            setIsLoading(false);
        }

        if (middleware == 'guest' && user) router.push('/profil-user')
        if (middleware == 'auth' && !user && error) router.push('/login')
    })

    const {data: user, error, mutate} = useSWR('/api/user',
        () => axios.get('/api/user').then(response => response.data.data).catch(error => {
          if(error.response.status !== 409)
            throw error
        }),
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie');

    const login = async ({setErrors, ...props}) => {
        setErrors([])

        await csrf()

        axios
            .post('/api/login', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
    }

    const logout = async () => {
        await axios.post('/api/logout')

        mutate(null)

        router.push('/login')
    }

    return {
        user,
        csrf,
        login,
        logout,
        isLoading
    }
}