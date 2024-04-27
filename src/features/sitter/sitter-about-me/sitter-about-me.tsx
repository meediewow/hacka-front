import React from 'react';
import { ContentCard } from '@/shared/ui/content-card';
import type { SitterAboutMeProps } from './types';

export const SitterAboutMe: React.FC<SitterAboutMeProps> = () => {
    return (
        <ContentCard title="Обо мне">
            Я вроде недавно из университета, а у меня уже есть хорошая любимая работа,
            семейное гнездо, средство передвижения, также мне повезло с родственниками, и
            вообще жизнь часто кажется мне хорошей штукой!
        </ContentCard>
    );
};
