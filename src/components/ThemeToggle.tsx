"use client";
import { useEffect, useState } from 'react';
import { Sun, Moon } from "lucide-react";
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition duration-500 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-600"
        >
            {theme === 'dark' ? <Sun className="text-gray-500 dark:text-gray-400 text-2xl" /> : <Moon className="text-gray-500 dark:text-gray-400 text-2xl" />}
        </button>
    );
}
