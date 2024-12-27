"use client"
import { useEffect, useState, useLayoutEffect } from 'react';

export default function AnimatedPercentageCircle() {
    const [count, setCount] = useState(0);
    const maxCount = 95;  // Максимальное значение 98%
    const [isClient, setIsClient] = useState(false);

    useLayoutEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        let interval;

        if (isClient) {
            interval = setInterval(() => {
                setCount((prevCount) => {
                    if (prevCount < maxCount) {
                        return prevCount + 1;
                    } else { // Добавлены фигурные скобки для else
                        clearInterval(interval);
                        return prevCount;
                    }
                });
            }, 20);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isClient]); 

    const strokeDasharray = 440; // Общая длина диаграммы
    const percentageToFill = 0.95; // 98% диаграммы
    const strokeDashoffset = strokeDasharray - (strokeDasharray * percentageToFill * count / maxCount);

    return (
        <div className='flex items-center justify-center'>
            <svg width="200" height="200" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="70" stroke="#ddd" strokeWidth="2" fill="transparent"/>
                <circle cx="100" cy="100" r="70" stroke="#D1B06B" strokeWidth="2" fill="transparent"
                    strokeDasharray={strokeDasharray} strokeDashoffset={strokeDashoffset}
                    transform="rotate(-90 100 100)" />
                <svg x="80" y="60" width="40" height="40" viewBox="0 0 26 23" fill="#D1B06B">
                    <path d="M13 0L17.9619 12.1353L25.9904 22.5L13 20.7295L0.00961876 22.5L8.03812 12.1353L13 0Z" fill="#D1B06B"/>
                </svg>
                <text x="100" y="120" textAnchor="middle" fill="#000" fontSize="20" dy=".3em" className="font-outfit font-medium text-3xl leading-9 text-center">
                    {count}%
                </text>
            </svg>
        </div>
    );
}
