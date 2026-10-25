import { t } from '@/lib/i18n';

export default function Loading() {
  return (
    <div className="loading-gate" role="status">
      <span className="sr-only">{t('zh', 'loading.text')}</span>
      <div className="skel skel-island" />
      <div className="skel-page">
        <div className="skel skel-line sm" />
        <div className="skel skel-line lg" />
        <div className="skel skel-line md" />
        <div className="skel-actions">
          <div className="skel skel-btn" />
          <div className="skel skel-btn short" />
        </div>
      </div>
    </div>
  );
}
