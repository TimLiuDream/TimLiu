import { type Contact, siteConfig } from '@/lib/site-config';
import { t } from '@/lib/i18n';

function formatContact(contact: Contact) {
  const label = contact.label === 'WeChat' ? '微信 / WeChat' : contact.label;
  const value = 'href' in contact ? '[' + contact.value + '](' + contact.href + ')' : contact.value;
  const preference = 'primary' in contact && contact.primary
    ? ' — 交流与合作首选 / Preferred for ideas and collaboration'
    : '';
  return '- ' + label + ': ' + value + preference;
}

// All representations share the same public facts as the visible website.
export function getLlmsIndex() {
  return [
    '# ' + siteConfig.name,
    '',
    '> ' + siteConfig.summary.zh,
    '',
    siteConfig.summary.en,
    '',
    '这是个人主页，介绍站点主人、个人项目与公开联系方式。项目的实际功能请以各项目网站为准。',
    'This is a personal website with a profile, projects, and public contact links. See each project website for its current features.',
    '',
    '## 内容 / Content',
    '',
    '- [完整介绍 / Full profile](' + siteConfig.url + '/llms-full.txt): 中英文纯文本，包含个人背景、项目用途、近况及联系方式，无需执行 JavaScript。',
    '- [首页 / Homepage](' + siteConfig.url + '/): 个人介绍、项目和联系方式。',
    '- [近况 / Now](' + siteConfig.url + '/now): 最近在做什么；以页面标注的更新日期为准。',
    '- [RSS](' + siteConfig.url + '/feed.xml): 公开内容订阅。',
    '',
    '## 项目 / Projects',
    '',
    ...siteConfig.projects.map((project) => '- [' + project.name + '](' + project.href + '): ' + project.details.zh + ' ' + project.details.en),
    '',
    '## 联系 / Contact',
    '',
    ...siteConfig.contacts.map(formatContact),
    '',
  ].join('\n');
}

export function getFullProfile() {
  return [
    '# ' + siteConfig.name,
    '',
    '> ' + siteConfig.summary.zh,
    '',
    'Website: ' + siteConfig.url,
    '',
    '## 关于 / About',
    '',
    siteConfig.about.zh,
    '',
    siteConfig.about.en,
    '',
    '关注方向 / Focus: ' + siteConfig.tags.join(', '),
    '',
    '## 项目 / Projects',
    '',
    ...siteConfig.projects.flatMap((project) => [
      '### ' + project.name,
      '',
      project.description.zh + ' / ' + project.description.en,
      '',
      project.details.zh,
      '',
      project.details.en,
      '',
      'Project website: ' + project.href,
      '',
    ]),
    '## 近况 / Now',
    '',
    t('zh', 'now.updated') + ' / ' + t('en', 'now.updated'),
    '',
    t('zh', 'now.web3'),
    '',
    t('en', 'now.web3'),
    '',
    t('zh', 'now.golang'),
    '',
    t('en', 'now.golang'),
    '',
    t('zh', 'now.project') + ' ContentPolish ' + t('zh', 'now.projectSuffix'),
    '',
    t('en', 'now.project') + ' ContentPolish' + t('en', 'now.projectSuffix'),
    '',
    'Source: ' + siteConfig.url + '/now',
    '',
    '## 联系 / Contact',
    '',
    '欢迎交流项目、想法与合作。 / Get in touch for projects, ideas, and collaboration.',
    '',
    ...siteConfig.contacts.map(formatContact),
    '',
  ].join('\n');
}
