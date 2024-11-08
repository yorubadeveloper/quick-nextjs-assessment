'use client';

import Slider from '@/components/Slider/Slider';
import {useEffect, useState} from "react";
import {CardType} from "@/components/Card/Card";

export default function Home() {
    const [companies, setCompanies] = useState<CardType[]>([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            const response = await fetch('/api/companies');
            const data = await response.json();
            setCompanies(data);
        };

        fetchCompanies();
    }, []);

    return (
        <main className="page-main">
            <Slider cards={companies}/>
        </main>
    );
}
