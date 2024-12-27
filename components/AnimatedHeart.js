"use client"
import { useEffect, useState, useLayoutEffect } from 'react';

export default function AnimatedHeart() {
    const [count, setCount] = useState(0);
    const maxCount = 130;  // Максимальное значение счетчика
    const [isClient, setIsClient] = useState(false);

    useLayoutEffect(() => {
        setIsClient(true);  // Устанавливаем состояние клиента после монтирования
    }, []);

    useEffect(() => {
        let interval;

        if (isClient) {
            interval = setInterval(() => {
                setCount((prevCount) => {
                    if (prevCount < maxCount) {
                        return prevCount + 1;
                    } else {
                        clearInterval(interval);
                        return prevCount;
                    }
                });
            }, 20);
        }

        return () => {
            if (interval) {
                clearInterval(interval);  // Очищаем интервал при размонтировании
            }
        };
    }, [isClient]); 

    const strokeDashoffset = 440 - (440 * count) / maxCount;  // Вычисляем смещение для анимации

    return (
        <div className='flex items-center justify-center'>
            <svg width="200" height="200" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="70" stroke="#ddd" strokeWidth="2" fill="transparent"/>
                <circle cx="100" cy="100" r="70" stroke="#D1B06B" strokeWidth="2" fill="transparent"
                    strokeDasharray="440" strokeDashoffset={strokeDashoffset}
                    transform="rotate(-90 100 100)" />  // Поворот для начала заполнения с верха
                <svg x="80" y="60" width="40" height="40" viewBox="0 0 31 28" fill="#D1B06B">
                    <path d="M15.5 28C15.9786 27.9994 16.446 27.8579 16.8413 27.5939C22.6974 23.7037 25.2332 21.0365 26.6318 19.3689C29.6124 15.8142 31.0394 12.1647 30.9992 8.2126C30.9522 3.68375 27.2391 0 22.722 0C19.4374 0 17.1624 1.81052 15.8376 3.31844C15.7956 3.36572 15.7437 3.40364 15.6855 3.42963C15.6273 3.45561 15.564 3.46906 15.5 3.46906C15.436 3.46906 15.3727 3.45561 15.3145 3.42963C15.2563 3.40364 15.2044 3.36572 15.1624 3.31844C13.8376 1.80906 11.5626 0 8.27798 0C3.76087 0 0.0477734 3.68375 0.000827789 8.21333C-0.0394096 12.1661 1.38905 15.8156 4.36817 19.3696C5.76682 21.0372 8.30257 23.7045 14.1587 27.5946C14.5541 27.8584 15.0215 27.9996 15.5 28Z" fill="#D1B06B"/>
                </svg>
                <text x="100" y="120" textAnchor="middle" fill="#000" fontSize="20" dy=".3em" className="font-outfit font-medium text-3xl leading-9 text-center">
                    {count}
                </text>
            </svg>
        </div>
    );
}
