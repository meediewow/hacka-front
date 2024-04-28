import React from 'react';
import { ContentCard } from '@/shared/ui/content-card';
import type { SitterAboutMeProps } from './types';

export const SitterAboutMe: React.FC<SitterAboutMeProps> = ({ user }) => {
    return (
        <ContentCard title="Обо мне">
            {user.about ?? 'Информация отсутствует'}
        </ContentCard>
    );
};
