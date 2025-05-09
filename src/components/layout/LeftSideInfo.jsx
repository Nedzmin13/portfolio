import React from 'react';
import { useTranslation } from 'react-i18next';

const LeftSideInfo = () => {
    const { t } = useTranslation('leftSideInfo');

    return (
        <aside className="left-side-info">
            <div className="left-side-info__header">
                <span className="left-side-info__name">{t('name')}</span>
                <span className="left-side-info__title">{t('title')}</span>
            </div>
            <div className="left-side-info__socials">
                {/* ... icone social ... */}
            </div>
        </aside>
    );
};

export default LeftSideInfo;