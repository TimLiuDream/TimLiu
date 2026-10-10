import { siteConfig } from '@/lib/site-config';

const personId = siteConfig.url + '/#person';
const websiteId = siteConfig.url + '/#website';

export const siteStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': personId,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.about.zh,
      knowsAbout: [...siteConfig.tags],
      sameAs: siteConfig.contacts.map((contact) => contact.href),
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.summary.zh,
      inLanguage: ['zh-CN', 'en'],
      publisher: { '@id': personId },
    },
  ],
};

export const homeStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': siteConfig.url + '/#profile',
      url: siteConfig.url,
      name: siteConfig.title,
      description: siteConfig.summary.zh,
      mainEntity: { '@id': personId },
      isPartOf: { '@id': websiteId },
      hasPart: { '@id': siteConfig.url + '/#projects' },
    },
    {
      '@type': 'ItemList',
      '@id': siteConfig.url + '/#projects',
      name: 'TimLiu 的项目 / Projects',
      itemListElement: siteConfig.projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'SoftwareApplication',
          '@id': siteConfig.url + '/#' + project.id,
          name: project.name,
          url: project.href,
          description: project.details.zh,
          applicationCategory: 'ProductivityApplication',
          creator: { '@id': personId },
        },
      })),
    },
  ],
};

export function serializeStructuredData(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\u003c');
}
